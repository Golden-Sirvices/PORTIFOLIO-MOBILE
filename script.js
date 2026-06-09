const PROJECTS = [
  {
    id: 'apresentacao',
    icon: '<i class="fas fa-user-circle"></i>',
    eyebrow: 'Projeto 01',
    title: 'Apresentação Mobile',
    desc: 'App de apresentação pessoal desenvolvido em React Native. Interface centrada em dois cards lado a lado exibindo Soft Skills e Hard Skills, com foto de perfil e layout elegante em azul marinho.',
    concepts: ['Mobile First', 'Hierarquia Visual', 'Layout com Flexbox', 'SafeAreaView'],
    techs: ['React Native', 'StyleSheet', 'Expo', 'Image Component'],
    tags: ['React Native', 'Expo'],
    chipColor: '#5b8eff',
    chips: ['Flexbox', 'Componentes', 'Estilização'],
    simId: 'apresentacao'
  },
  {
    id: 'rpg',
    icon: '<i class="fas fa-dice-d20"></i>',
    eyebrow: 'Projeto 02',
    title: 'RPG Card',
    desc: 'Cards de personagem com HP, MP, Ataque e Defesa com barras de progresso animadas. Explora componentes reutilizáveis (CharacterCard, StatusBar, GameButton) e alternância de layout retrato/paisagem.',
    concepts: ['Componentes Reutilizáveis', 'Props dinâmicas', 'Barras de progresso', 'Layout condicional'],
    techs: ['React Native', 'StyleSheet', 'Expo', 'Componentes customizados'],
    tags: ['React Native', 'Componentes'],
    chips: ['Flex-direction', 'Reusabilidade', 'Props'],
    simId: 'rpg'
  },
  {
    id: 'filmes',
    icon: '<i class="fas fa-film"></i>',
    eyebrow: 'Projeto 03',
    title: 'App de Filmes',
    desc: 'Catálogo de cinema com 8 filmes em cartaz (Duna 2, KFP4, Godzilla...). Navegação Stack com duas telas: lista de filmes e detalhes com poster e sinopse. Passagem de parâmetros via route.params.',
    concepts: ['Stack Navigator', 'Passagem de parâmetros', 'FlatList', 'Navegação entre telas'],
    techs: ['React Native', 'React Navigation', 'Expo', 'Native Stack Navigator'],
    tags: ['React Native', 'Navigation'],
    chips: ['Stack Nav', 'route.params', 'FlatList'],
    simId: 'filmes'
  },
  {
    id: 'techstore',
    icon: '<i class="fas fa-store"></i>',
    eyebrow: 'Projeto 04',
    title: 'Tech Store',
    desc: 'Loja de tecnologia com busca em tempo real, filtro por categoria, ordenação por preço, sistema de favoritos e carrinho de compras com controle de quantidade e snackbar de confirmação.',
    concepts: ['useMemo & useState', 'Filtro em tempo real', 'Carrinho de compras', 'Modal de detalhes'],
    techs: ['React Native', 'React Native Paper', 'Expo', 'Hooks avançados'],
    tags: ['React Native', 'Paper', 'Hooks'],
    chips: ['useMemo', 'FlatList', 'Modal', 'Snackbar'],
    simId: 'techstore'
  },
  {
    id: 'ordem',
    icon: '<i class="fas fa-shield-halved"></i>',
    eyebrow: 'Projeto 05',
    title: 'Ordem Paranormal',
    desc: 'App temático do RPG Ordem Paranormal com navegação mista: Tab Navigator (Início, Elementos, Rituais, Ameaças) + Stack Navigator interno. Telas de Classes de Agentes, Atributos, Elementos (Sangue, Morte...) e Bestiário.',
    concepts: ['Tab + Stack Navigator', 'Navegação mista', 'MaterialCommunityIcons', 'React Native Paper'],
    techs: ['React Native', 'React Navigation', 'Bottom Tab Navigator', 'Stack Navigator'],
    tags: ['React Native', 'Navigation', 'RPG'],
    chips: ['Tab Navigator', 'Stack Navigator', 'Paper Cards'],
    simId: 'ordem'
  }
];

function renderCards() {
  const grid = document.getElementById('project-cards');
  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="pcard" style="opacity:0;transform:translateY(24px);transition:opacity .5s ${i*0.08}s ease,transform .5s ${i*0.08}s ease">
      <div class="pcard-head">
        <div class="pcard-icon">${p.icon}</div>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
      <h3 class="pcard-title">${p.title}</h3>
      <p class="pcard-desc">${p.desc.slice(0,120)}...</p>
      <div class="concepts">${p.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>
      <button class="pcard-btn" onclick="openModal(${i})">ver detalhes & simulador <i class="fas fa-mobile-alt"></i></button>
    </article>
  `).join('');
}

function renderTimeline() {
  const tl = document.getElementById('project-timeline');
  tl.innerHTML = PROJECTS.map((p, i) => `
    <div class="tl-item" style="opacity:0;transform:translateY(24px);transition:opacity .5s ${i*0.08}s ease,transform .5s ${i*0.08}s ease">
      <div class="tl-mark"><div class="tl-dot"></div><div class="tl-line"></div></div>
      <div class="tl-body">
        <div class="tl-meta">
          <span class="tl-num">0${i+1}</span>
          <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        </div>
        <h3 class="tl-title">${p.title}</h3>
        <p class="tl-desc">${p.desc}</p>
        <div class="concepts">${p.chips.map(c=>`<span class="chip">${c}</span>`).join('')}</div>
        <button class="pcard-btn" onclick="openModal(${i})" style="margin-top:16px;display:inline-flex">ver detalhes & simulador <i class="fas fa-mobile-alt"></i></button>
      </div>
    </div>
  `).join('');
}

const SIMULATORS = {

  apresentacao: () => `
    <div class="sim-apre">
      <p class="s-name">Vitor Chaves</p>
      <div class="s-avatar">👤</div>
      <div class="s-cards">
        <div class="s-card">
          <div class="s-card-title">Soft Skills</div>
          <p class="s-skill">✨ Comunicação</p>
          <p class="s-skill">🤝 Trabalho em Equipe</p>
          <p class="s-skill">🌱 Empatia</p>
        </div>
        <div class="s-card">
          <div class="s-card-title">Hard Skills</div>
          <p class="s-skill">💻 Programação</p>
          <p class="s-skill">📊 Gestão</p>
          <p class="s-skill">📱 Mobile Dev</p>
        </div>
      </div>
      <p class="s-footer">Apresentação 2026</p>
    </div>`,

  rpg: () => `
    <div class="sim-rpg">
      <p class="s-title">Character Stats</p>
      <div class="mode-toggle">
        <button class="mtbtn active" onclick="rpgMode('vertical',this)">▯ Retrato</button>
        <button class="mtbtn" onclick="rpgMode('horizontal',this)">▭ Paisagem</button>
      </div>
      <div id="rpg-card-wrap">
        ${rpgCardVertical()}
      </div>
    </div>`,

  filmes: () => `
    <div class="sim-filmes">
      <div class="f-header"><div class="f-title">🎬 Cinema em Cartaz</div></div>
      <div class="f-list" id="filmes-list">
        ${['Duna: Parte 2','Kung Fu Panda 4','Godzilla e Kong','Pobres Criaturas','O Menino e a Garça','Bob Marley: One Love'].map((t,i)=>`
          <div class="f-item" onclick="showFilmeDetail(${i})">
            <span class="f-item-title">${t}</span>
            <span class="f-arrow">➔</span>
          </div>`).join('')}
      </div>
      <div class="f-detail" id="filmes-detail" style="display:none"></div>
    </div>`,

  techstore: () => `
    <div class="sim-store">
      <div class="st-header">
        <span class="st-title">Tech Store</span>
        <div class="st-icons"><span>♥</span><span>🛒</span></div>
      </div>
      <div class="st-search"><i class="fas fa-search" style="font-size:9px;color:#aaa"></i> Buscar produtos...</div>
      <div class="st-cats">
        ${['Todos','Smartphones','Laptops','Áudio','Games','Wearables'].map((c,i)=>`<div class="st-cat${i===0?' on':''}" onclick="storeFilter(this)">${c}</div>`).join('')}
      </div>
      <div class="st-list" id="store-list">
        ${storeItems('Todos')}
      </div>
    </div>`,

  ordem: () => `
    <div class="sim-ordem">
      <div class="op-appbar"><span class="op-appbar-title">ORDO REALITAS</span></div>
      <div id="op-screen-home">
        <div class="op-screen">
          <div class="op-banner">
            <img class="op-banner-img" src="imagens/king.png" onerror="this.style.display='none'">
            <div class="op-banner-overlay"></div>
            <span class="op-banner-text">MEMBRANA EM CRISE</span>
          </div>
          <p class="op-welcome">Bem-vindo, Recruta.</p>
          <p class="op-sub">Selecione um arquivo confidencial:</p>
          <div class="op-menu">
            <div class="op-item" onclick="opNavigate('agentes')">
              <div class="op-item-left">
                <span class="op-item-icon">👥</span>
                <div><div class="op-item-title">Classes de Agentes</div><div class="op-item-sub">Combatente, Especialista e Ocultista</div></div>
              </div>
              <span class="op-chevron">›</span>
            </div>
            <div class="op-item" onclick="opNavigate('atributos')">
              <div class="op-item-left">
                <span class="op-item-icon">📊</span>
                <div><div class="op-item-title">Sistema de Atributos</div><div class="op-item-sub">Força, Agilidade, Intelecto...</div></div>
              </div>
              <span class="op-chevron">›</span>
            </div>
            <div class="op-item" onclick="opNavigate('sobre')">
              <div class="op-item-left">
                <span class="op-item-icon">ℹ️</span>
                <div><div class="op-item-title">Sobre a Ordo Realitas</div><div class="op-item-sub">História e a Membrana</div></div>
              </div>
              <span class="op-chevron">›</span>
            </div>
          </div>
        </div>
      </div>
      <div class="op-tabbar">
        <div class="op-tab"><span class="op-tab-icon active">🛡️</span><span class="op-tab-label active">Início</span></div>
        <div class="op-tab" onclick="opTab('elementos')"><span class="op-tab-icon">🔮</span><span class="op-tab-label">Elementos</span></div>
        <div class="op-tab" onclick="opTab('rituais')"><span class="op-tab-icon">📖</span><span class="op-tab-label">Grimório</span></div>
        <div class="op-tab" onclick="opTab('ameacas')"><span class="op-tab-icon">💀</span><span class="op-tab-label">Ameaças</span></div>
      </div>
    </div>`
};

function rpgCardVertical() {
  return `<div class="rpg-card" style="width:100%">
    <div class="rpg-card-title">Level 5 Warrior</div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
      <div class="rpg-avatar">🧙</div>
      <div style="width:100%">
        <div class="stat-label">❤️ HP 120/150</div>
        <div class="stat-bar"><div class="stat-fill" style="width:80%;background:#e63946"></div></div>
        <div class="stat-label">⚡ MP 60/85</div>
        <div class="stat-bar"><div class="stat-fill" style="width:70%;background:#457b9d"></div></div>
        <div class="attr-row"><span class="attr">⚔️ Atk: 20</span><span class="attr">🛡️ Def: 15</span></div>
      </div>
    </div>
    <div class="rpg-btns">
      <div class="rpg-btn">ATAQUE</div><div class="rpg-btn">DEFESA</div><div class="rpg-btn">BAG</div>
    </div>
  </div>`;
}

function rpgCardHorizontal() {
  return `<div class="rpg-card" style="width:100%">
    <div class="rpg-card-title">Level 5 Warrior</div>
    <div style="display:flex;flex-direction:row;align-items:center;gap:10px">
      <div class="rpg-avatar" style="flex-shrink:0">🧙</div>
      <div style="flex:1">
        <div class="stat-label">❤️ HP 120/150</div>
        <div class="stat-bar"><div class="stat-fill" style="width:80%;background:#e63946"></div></div>
        <div class="stat-label">⚡ MP 60/85</div>
        <div class="stat-bar"><div class="stat-fill" style="width:70%;background:#457b9d"></div></div>
        <div class="attr-row"><span class="attr">⚔️ 20</span><span class="attr">🛡️ 15</span></div>
      </div>
    </div>
    <div class="rpg-btns" style="margin-top:8px">
      <div class="rpg-btn">ATAQUE</div><div class="rpg-btn">DEFESA</div><div class="rpg-btn">BAG</div>
    </div>
  </div>`;
}

window.rpgMode = function(mode, btn) {
  document.querySelectorAll('.mtbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const wrap = document.getElementById('rpg-card-wrap');
  if (wrap) wrap.innerHTML = mode === 'vertical' ? rpgCardVertical() : rpgCardHorizontal();
};

const FILMES_DATA = [
  { titulo:'Duna: Parte 2', emoji:'🏜️', sinopse:'Paul Atreides se une a Chani e aos Fremen em uma guerra de vingança contra os conspiradores que destruíram sua família.' },
  { titulo:'Kung Fu Panda 4', emoji:'🐼', sinopse:'Po é escolhido para se tornar o Líder Espiritual do Vale da Paz e precisa encontrar e treinar um novo Dragão Guerreiro.' },
  { titulo:'Godzilla e Kong', emoji:'🦕', sinopse:'O novo império coloca o colossal Kong e o temível Godzilla contra uma ameaça colossal desconhecida.' },
  { titulo:'Pobres Criaturas', emoji:'🧪', sinopse:'A incrível história e evolução de Bella Baxter, trazida de volta à vida pelo brilhante cientista Dr. Godwin Baxter.' },
  { titulo:'O Menino e a Garça', emoji:'🦢', sinopse:'Um jovem rapaz chamado Mahito aventura-se num mundo partilhado entre vivos e mortos.' },
  { titulo:'Bob Marley: One Love', emoji:'🎵', sinopse:'Um olhar sobre a vida e a música de Bob Marley, que inspirou gerações com sua mensagem de amor e unidade.' },
];

window.showFilmeDetail = function(idx) {
  const f = FILMES_DATA[idx];
  const list = document.getElementById('filmes-list');
  const detail = document.getElementById('filmes-detail');
  if (!list || !detail) return;
  list.style.display = 'none';
  detail.style.display = 'block';
  detail.innerHTML = `
    <span class="f-back" onclick="backFilmes()">← Voltar ao Menu</span>
    <div class="f-poster" style="font-size:48px;background:#1a1a1a;border-radius:8px;display:flex;align-items:center;justify-content:center;height:110px;margin-bottom:10px">${f.emoji}</div>
    <div class="f-detail-title">${f.titulo}</div>
    <div class="f-sinopse-label">Sinopse:</div>
    <div class="f-sinopse">${f.sinopse}</div>
    <div class="f-btn">← Voltar ao Menu</div>`;
  detail.querySelector('.f-btn').onclick = backFilmes;
};

window.backFilmes = function() {
  const list = document.getElementById('filmes-list');
  const detail = document.getElementById('filmes-detail');
  if (list) list.style.display = 'block';
  if (detail) detail.style.display = 'none';
};

const STORE_ITEMS = [
  { name:'iPhone 15 Pro', cat:'Smartphones', brand:'Apple', price:'R$ 7.299' },
  { name:'Galaxy S24 Ultra', cat:'Smartphones', brand:'Samsung', price:'R$ 6.899' },
  { name:'MacBook Air M3', cat:'Laptops', brand:'Apple', price:'R$ 9.499' },
  { name:'Sony WH-1000XM5', cat:'Áudio', brand:'Sony', price:'R$ 2.199' },
  { name:'iPad Air', cat:'Tablets', brand:'Apple', price:'R$ 5.499' },
  { name:'PlayStation 5', cat:'Games', brand:'Sony', price:'R$ 3.799' },
  { name:'Nintendo Switch OLED', cat:'Games', brand:'Nintendo', price:'R$ 2.200' },
  { name:'Apple Watch S9', cat:'Wearables', brand:'Apple', price:'R$ 3.899' },
];

function storeItems(cat) {
  const filtered = cat === 'Todos' ? STORE_ITEMS : STORE_ITEMS.filter(i => i.cat === cat);
  return filtered.map(item => `
    <div class="st-item">
      <div>
        <div class="st-item-cat">${item.cat.toUpperCase()}</div>
        <div class="st-item-name">${item.name}</div>
        <div class="st-item-brand">${item.brand}</div>
      </div>
      <div style="text-align:right">
        <div class="st-price">${item.price}</div>
        <div class="st-add">+ Carrinho</div>
      </div>
    </div>`).join('');
}

window.storeFilter = function(el) {
  document.querySelectorAll('.st-cat').forEach(c => c.classList.remove('on'));
  el.classList.add('on');
  const list = document.getElementById('store-list');
  if (list) list.innerHTML = storeItems(el.textContent.trim());
};

// --- ORDEM PARANORMAL ---
const OP_SCREENS = {
  agentes: `
    <div class="op-inner">
      <span class="op-back" onclick="opBack()">← Voltar</span>
      ${[
        { nome:'Combatente', desc:'Especialistas em combate. Alta resistência e proteção na linha de frente.' },
        { nome:'Especialista', desc:'Gênios da investigação. Dominam perícias e encontram pistas cruciais.' },
        { nome:'Ocultista', desc:'Manipulam rituais poderosos do Outro Lado, sacrificando a própria Sanidade.' }
      ].map(c => `<div class="op-card"><div class="op-card-title">${c.nome}</div><div class="op-card-desc">${c.desc}</div></div>`).join('')}
    </div>`,
  atributos: `
    <div class="op-inner">
      <span class="op-back" onclick="opBack()">← Voltar</span>
      ${[
        { nome:'Força', val:14 }, { nome:'Agilidade', val:11 }, { nome:'Intelecto', val:16 },
        { nome:'Presença', val:12 }, { nome:'Vigor', val:13 }
      ].map(a => `
        <div class="op-card" style="margin-bottom:8px">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div class="op-card-title" style="margin:0">${a.nome}</div>
            <span style="color:#e51e25;font-size:12px;font-weight:900">${a.val}</span>
          </div>
          <div style="margin-top:6px;height:4px;background:#2a2a2a;border-radius:2px">
            <div style="height:100%;width:${(a.val/20)*100}%;background:#e51e25;border-radius:2px"></div>
          </div>
        </div>`).join('')}
    </div>`,
  sobre: `
    <div class="op-inner">
      <span class="op-back" onclick="opBack()">← Voltar</span>
      <div class="op-card">
        <div class="op-card-title">A Ordo Realitas</div>
        <div class="op-card-desc">Organização secreta fundada para proteger a humanidade de entidades do Outro Lado. A Membrana que separa os mundos está se enfraquecendo...</div>
      </div>
      <div class="op-card">
        <div class="op-card-title">A Membrana</div>
        <div class="op-card-desc">Barreira dimensional que separa o mundo dos vivos do Outro Lado. Quando enfraquece, criaturas e entidades conseguem atravessar.</div>
      </div>
    </div>`,
  elementos: `
    <div class="op-inner">
      ${[
        { nome:'Sangue', desc:'Sentimento, dor, paixão e força bruta.', cor:'#ff3333' },
        { nome:'Morte', desc:'Tempo, lodo, entropia e o ciclo da vida.', cor:'#a0a0a0' },
        { nome:'Conhecimento', desc:'Razão, sigilos, lógica e a busca pela verdade.', cor:'#ffdf00' },
        { nome:'Energia', desc:'Caos, eletricidade, mudança e imprevisibilidade.', cor:'#8a2be2' },
        { nome:'Medo', desc:'O elemento primordial. Origem de tudo que cruza a membrana.', cor:'#ffffff' },
      ].map(e => `
        <div class="el-card" style="border-color:${e.cor}40">
          <div class="el-title" style="color:${e.cor}">${e.nome}</div>
          <div class="el-desc">${e.desc}</div>
        </div>`).join('')}
    </div>`,
  rituais: `
    <div class="op-inner">
      ${[
        { nome:'Chama Negra', nivel:'Círculo 1', desc:'Invoca uma chama do Outro Lado que queima a sanidade dos alvos.' },
        { nome:'Véu das Sombras', nivel:'Círculo 2', desc:'Cria uma névoa que oculta o agente das percepções das criaturas.' },
        { nome:'Palavra de Poder', nivel:'Círculo 3', desc:'Uma palavra carregada de NEX que atordoa qualquer criatura que a ouça.' },
      ].map(r => `
        <div class="op-card" style="margin-bottom:8px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
            <div class="op-card-title" style="margin:0">${r.nome}</div>
            <span style="font-size:8px;color:#e51e25;background:#e51e2520;padding:2px 8px;border-radius:4px">${r.nivel}</span>
          </div>
          <div class="op-card-desc">${r.desc}</div>
        </div>`).join('')}
    </div>`,
  ameacas: `
    <div class="op-inner">
      ${[
        { nome:'A Degolificada', desc:'Criatura relacionada à morte injusta de pessoas jovens. Aparece em locais de violência.' },
        { nome:'Zumbi de Sangue', desc:'Manifestação física do Sangue quando corpos sem vida entram em contato com a Membrana.' },
      ].map(c => `
        <div class="op-card" style="margin-bottom:8px">
          <div class="op-card-title">${c.nome}</div>
          <div class="op-card-desc">${c.desc}</div>
        </div>`).join('')}
    </div>`
};

window.opNavigate = function(screen) {
  const home = document.getElementById('op-screen-home');
  if (!home) return;
  const existing = document.getElementById('op-screen-inner');
  if (existing) existing.remove();
  const div = document.createElement('div');
  div.id = 'op-screen-inner';
  div.innerHTML = OP_SCREENS[screen] || '';
  home.parentNode.insertBefore(div, home.nextSibling);
  home.style.display = 'none';
};

window.opBack = function() {
  const home = document.getElementById('op-screen-home');
  const inner = document.getElementById('op-screen-inner');
  if (home) home.style.display = 'block';
  if (inner) inner.remove();
  // resetar tabs
  document.querySelectorAll('.op-tab-icon, .op-tab-label').forEach(el => el.classList.remove('active'));
  const firstTab = document.querySelectorAll('.op-tab-icon')[0];
  const firstLabel = document.querySelectorAll('.op-tab-label')[0];
  if (firstTab) firstTab.classList.add('active');
  if (firstLabel) firstLabel.classList.add('active');
};

window.opTab = function(screen) {
  const home = document.getElementById('op-screen-home');
  const inner = document.getElementById('op-screen-inner');
  // atualizar tab ativa
  const tabIcons = document.querySelectorAll('.op-tab-icon');
  const tabLabels = document.querySelectorAll('.op-tab-label');
  const tabMap = ['home','elementos','rituais','ameacas'];
  tabIcons.forEach((el, i) => el.classList.toggle('active', tabMap[i] === screen));
  tabLabels.forEach((el, i) => el.classList.toggle('active', tabMap[i] === screen));

  if (screen === 'home') {
    if (home) home.style.display = 'block';
    if (inner) inner.remove();
    return;
  }
  if (home) home.style.display = 'none';
  if (inner) inner.remove();
  const div = document.createElement('div');
  div.id = 'op-screen-inner';
  div.innerHTML = OP_SCREENS[screen] || '';
  document.querySelector('.sim-ordem').insertBefore(div, document.querySelector('.op-tabbar'));
};

/* ============================================================
   MODAL
   ============================================================ */
window.openModal = function(idx) {
  const p = PROJECTS[idx];
  document.getElementById('m-icon').innerHTML = p.icon;
  document.getElementById('m-eyebrow').textContent = p.eyebrow;
  document.getElementById('m-title').textContent = p.title;
  document.getElementById('m-desc').textContent = p.desc;
  document.getElementById('m-concepts').innerHTML = p.concepts.map(c => `<li>${c}</li>`).join('');
  document.getElementById('m-techs').innerHTML = p.techs.map(t => `<li>${t}</li>`).join('');
  // Renderizar simulador
  const screen = document.getElementById('phone-screen');
  screen.innerHTML = SIMULATORS[p.simId] ? SIMULATORS[p.simId]() : '<div style="padding:20px;color:#666;text-align:center">Simulador em breve</div>';
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
};

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ============================================================
   TABS
   ============================================================ */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.pview').forEach(v => v.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('view-' + tab.dataset.tab).classList.add('active');
    revealItems();
  });
});

/* ============================================================
   TYPEWRITER
   ============================================================ */
const TEXTS = ['Desenvolvedor Mobile','React Native & Expo','Aluno 2026 · sempre aprendendo'];
let tIdx=0, cIdx=0, del=false;
const twEl = document.getElementById('typewriter');
function type() {
  const cur = TEXTS[tIdx];
  if (twEl) twEl.textContent = del ? cur.slice(0,cIdx--) : cur.slice(0,cIdx++);
  let delay = del ? 55 : 90;
  if (!del && cIdx > cur.length) { delay=2200; del=true; }
  else if (del && cIdx < 0) { del=false; tIdx=(tIdx+1)%TEXTS.length; delay=400; }
  setTimeout(type, delay);
}
setTimeout(type, 800);

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

function revealItems() {
  setTimeout(() => {
    document.querySelectorAll('.pcard, .tl-item, .stat').forEach(el => io.observe(el));
  }, 50);
}

/* ============================================================
   INIT
   ============================================================ */
renderCards();
renderTimeline();
revealItems();
document.querySelectorAll('.stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  io.observe(el);
});
