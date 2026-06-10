<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

define('VISITAS_FILE', __DIR__ . '/data/visitas.json');
@mkdir(__DIR__ . '/data', 0755, true);

$dados = file_exists(VISITAS_FILE)
    ? json_decode(file_get_contents(VISITAS_FILE), true)
    : ['total' => 0, 'hoje' => 0, 'data_hoje' => ''];

$hoje = date('Y-m-d');

if ($dados['data_hoje'] !== $hoje) {
    $dados['hoje']      = 0;
    $dados['data_hoje'] = $hoje;
}

$dados['total']++;
$dados['hoje']++;

file_put_contents(VISITAS_FILE, json_encode($dados));

echo json_encode([
    'total' => $dados['total'],
    'hoje'  => $dados['hoje'],
]);
