<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

define('SEU_EMAIL', 'vitordacostagoldem@gmail.com');
define('LIMITE_POR_IP', 3);          
define('RATE_FILE', __DIR__ . '/data/rate.json');
define('LOG_FILE',  __DIR__ . '/data/mensagens.json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'erro' => 'Método não permitido.']);
    exit;
}

$body = json_decode(file_get_contents('php://input'), true);
$nome  = trim($body['nome']  ?? '');
$email = trim($body['email'] ?? '');
$msg   = trim($body['msg']   ?? '');

$erros = [];
if (strlen($nome)  < 2)              $erros[] = 'Nome muito curto.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $erros[] = 'E-mail inválido.';
if (strlen($msg)   < 10)             $erros[] = 'Mensagem muito curta.';
if (strlen($msg)   > 2000)           $erros[] = 'Mensagem muito longa (máx 2000 caracteres).';

if ($erros) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'erros' => $erros]);
    exit;
}

@mkdir(__DIR__ . '/data', 0755, true);
$ip   = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rate = file_exists(RATE_FILE) ? json_decode(file_get_contents(RATE_FILE), true) : [];
$agora = time();
$rate = array_filter($rate, fn($t) => $agora - $t < 3600);
$enviosDoIp = count(array_filter($rate, fn($t, $k) => str_starts_with($k, $ip), ARRAY_FILTER_USE_BOTH));

if ($enviosDoIp >= LIMITE_POR_IP) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'erro' => 'Muitos envios. Aguarde um tempo e tente novamente.']);
    exit;
}
$mensagens = file_exists(LOG_FILE) ? json_decode(file_get_contents(LOG_FILE), true) : [];
$entrada = [
    'id'    => uniqid(),
    'data'  => date('d/m/Y H:i:s'),
    'ip'    => $ip,
    'nome'  => htmlspecialchars($nome),
    'email' => htmlspecialchars($email),
    'msg'   => htmlspecialchars($msg),
    'lida'  => false,
];
array_unshift($mensagens, $entrada); 
file_put_contents(LOG_FILE, json_encode($mensagens, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

$rate[$ip . '_' . uniqid()] = $agora;
file_put_contents(RATE_FILE, json_encode($rate));

$assunto = "💌 Contato do Portfólio — {$nome}";
$corpo   = "Nova mensagem recebida pelo portfólio:\n\n"
        . "Nome:  {$nome}\n"
        . "Email: {$email}\n"
        . "Data:  {$entrada['data']}\n\n"
        . "Mensagem:\n{$msg}\n\n"
        . "---\nVitor Chaves · Portfólio 2026";
$headers = "From: noreply@portfolio.dev\r\nReply-To: {$email}";
@mail(SEU_EMAIL, $assunto, $corpo, $headers);

echo json_encode([
    'ok'  => true,
    'msg' => "Mensagem enviada, {$nome}! Entrarei em contato em breve."
]);
