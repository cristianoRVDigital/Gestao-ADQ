(() => {
  "use strict";

  const teams = [
    { name: "Mesa 1", supervisor: "Camila Nunes", clients: 379, tpv: 712000, activation: 81.8, installs: 95, active: 78 },
    { name: "Mesa 2", supervisor: "André Rocha", clients: 408, tpv: 765000, activation: 82.4, installs: 96, active: 79 },
    { name: "Mesa 3", supervisor: "João Viana", clients: 345, tpv: 653000, activation: 80.3, installs: 87, active: 70 }
  ];
  const sellers = [
    { name: "Marina Costa", initials: "MC", team: "Mesa 1", clients: 84, installs: 38, activated: 31, target: 42 },
    { name: "Rafael Lima", initials: "RL", team: "Mesa 1", clients: 72, installs: 31, activated: 27, target: 36 },
    { name: "Beatriz Souza", initials: "BS", team: "Mesa 1", clients: 68, installs: 26, activated: 20, target: 32 },
    { name: "Lucas Freitas", initials: "LF", team: "Mesa 2", clients: 91, installs: 39, activated: 34, target: 40 },
    { name: "Gabriela Alves", initials: "GA", team: "Mesa 2", clients: 79, installs: 34, activated: 26, target: 38 },
    { name: "Pedro Martins", initials: "PM", team: "Mesa 2", clients: 53, installs: 23, activated: 19, target: 28 },
    { name: "Nathalia Dias", initials: "ND", team: "Mesa 3", clients: 76, installs: 36, activated: 30, target: 39 },
    { name: "Thiago Reis", initials: "TR", team: "Mesa 3", clients: 64, installs: 29, activated: 22, target: 35 },
    { name: "Ana Clara", initials: "AC", team: "Mesa 3", clients: 49, installs: 22, activated: 18, target: 30 }
  ];
  const clients = [
    { name: "Mercado São Bento", code: "PDV-1842", city: "São Paulo", owner: "Marina Costa", team: "Mesa 1", adqs: 2, status: "Ativa", last: "02/11/2026 11:48", tpv: 86240, supplier: "Stone" },
    { name: "Studio Forma & Saúde", code: "PDV-2077", city: "São Paulo", owner: "Rafael Lima", team: "Mesa 1", adqs: 1, status: "Ativa", last: "01/11/2026 17:20", tpv: 42180, supplier: "Paguebank" },
    { name: "Auto Peças Horizonte", code: "PDV-1386", city: "Campinas", owner: "Lucas Freitas", team: "Mesa 2", adqs: 1, status: "Atenção", last: "21/10/2026 16:02", tpv: 16800, supplier: "RV Pay" },
    { name: "Boutique Lume", code: "PDV-1911", city: "Santos", owner: "Nathalia Dias", team: "Mesa 3", adqs: 1, status: "Inoperante", last: "19/09/2026 13:48", tpv: 0, supplier: "Stone" },
    { name: "Café Aurora", code: "PDV-2240", city: "São Paulo", owner: "Beatriz Souza", team: "Mesa 1", adqs: 1, status: "Aguardando primeira venda", last: "Sem uso", tpv: 0, supplier: "Paguebank" },
    { name: "Farmácia Vida Nova", code: "PDV-0928", city: "Jundiaí", owner: "Gabriela Alves", team: "Mesa 2", adqs: 1, status: "Ativa", last: "02/11/2026 12:04", tpv: 109400, supplier: "RV Pay" },
    { name: "Casa do Construtor", code: "PDV-2412", city: "Sorocaba", owner: "Thiago Reis", team: "Mesa 3", adqs: 1, status: "Ativa", last: "30/10/2026 10:15", tpv: 28450, supplier: "Stone" },
    { name: "Pet Shop Bicho Solto", code: "PDV-1644", city: "São Paulo", owner: "Marina Costa", team: "Mesa 1", adqs: 1, status: "Atenção", last: "29/10/2026 18:12", tpv: 35600, supplier: "Paguebank" },
    { name: "Armazém do Vale", code: "PDV-1302", city: "São Paulo", owner: "Pedro Martins", team: "Mesa 2", adqs: 0, status: "Sem ADQ", last: "Sem uso", tpv: 0, supplier: "Stone" },
    { name: "Clínica Bem Estar", code: "PDV-2568", city: "Campinas", owner: "Ana Clara", team: "Mesa 3", adqs: 1, status: "Ativa", last: "01/11/2026 14:32", tpv: 19750, supplier: "RV Pay" },
    { name: "Mercado do Lago", code: "PDV-0881", city: "Santos", owner: "Nathalia Dias", team: "Mesa 3", adqs: 1, status: "Atenção", last: "25/10/2026 09:18", tpv: 9120, supplier: "Paguebank" },
    { name: "Oficina São Jorge", code: "PDV-1735", city: "Sorocaba", owner: "Lucas Freitas", team: "Mesa 2", adqs: 2, status: "Ativa", last: "02/11/2026 09:05", tpv: 53980, supplier: "Stone" }
  ];
  const alerts = [
    { title: "5 credenciamentos sem primeira venda", detail: "Instalados nos últimos 10 dias e ainda aguardando transação.", kind: "warning", area: "Ativação", time: "há 12 min" },
    { title: "12 terminais sem uso há +30 dias", detail: "A maior concentração está na Mesa 3, em Santos e Sorocaba.", kind: "danger", area: "Saúde da base", time: "há 28 min" },
    { title: "Queda de TPV detectada", detail: "Carteira de Rafael Lima caiu 18,4% vs. média dos últimos 3 meses.", kind: "warning", area: "Performance", time: "há 1 h" },
    { title: "9 clientes sem responsável", detail: "Registros importados com vendedor ou supervisor ausente.", kind: "green", area: "Governança", time: "ontem" }
  ];
  const activities = [
    { icon: "⇧", title: "Importação concluída", detail: "credenciamentos_outubro.xlsx adicionou 472 ADQs", time: "Hoje, 18:10" },
    { icon: "↗", title: "Vínculo alterado", detail: "PDV-1842 transferido para Marina Costa", time: "Hoje, 17:36" },
    { icon: "◷", title: "Status atualizado", detail: "POS-22991 marcado como Inoperante", time: "Hoje, 16:48" },
    { icon: "⚙", title: "Regra de saúde ajustada", detail: "Atenção agora inicia após 4 dias sem uso", time: "Ontem, 15:21" }
  ];
  const initialProtocols = [
    { name: "movimentacoes_stone_2026-11-02.csv", detail: "02/11/2026 11:42 · 18.242 linhas", status: "38 erros" },
    { name: "credenciamentos_outubro.xlsx", detail: "01/11/2026 18:10 · 486 linhas", status: "OK" },
    { name: "base_pdv_outubro.xlsx", detail: "01/11/2026 17:52 · 3.278 linhas", status: "12 erros" }
  ];
  const routes = {
    overview: ["Visão executiva", "MONITORAMENTO AO VIVO", "Veja a operação inteira em um só lugar."],
    teams: ["Mesas de supervisão", "ESTRUTURA COMERCIAL", "Uma visão comparativa das três equipes e seus sinais de performance."],
    portfolio: ["Carteira de clientes", "BASE COMERCIAL", "Busque, filtre e abra o contexto completo de cada PDV."],
    production: ["Produção mensal", "RITMO COMERCIAL", "Credenciamentos instalados, ativação efetiva e TPV por responsável."],
    imports: ["Importações", "GOVERNANÇA DE DADOS", "Atualize a base com rastreabilidade, validação e deduplicação."],
    audit: ["Auditoria", "RASTREABILIDADE", "Tudo que mudou na operação, com usuário, data e contexto."],
    settings: ["Configurações", "ADMINISTRAÇÃO", "Parâmetros de saúde, fornecedores, metas e permissões da operação."],
    health: ["Saúde da base", "SAÚDE OPERACIONAL", "Identifique clientes que precisam de atenção e recupere o potencial da carteira."]
  };
  const labels = ["Todos", "Com ADQ", "Sem ADQ", "Ativa", "Sem movimentação", "Inoperante", "Múltiplas ADQs", "Nova no mês"];
  const importFields = [
    { key: "name", label: "Cliente / estabelecimento", required: true, aliases: ["cliente", "estabelecimento", "razao social", "nome fantasia", "nome"] },
    { key: "code", label: "Código do PDV", required: true, aliases: ["codigo pdv", "codigo", "pdv", "documento", "cnpj"] },
    { key: "city", label: "Cidade", aliases: ["cidade", "municipio"] },
    { key: "owner", label: "Responsável", aliases: ["responsavel", "vendedor"] },
    { key: "team", label: "Mesa / equipe", aliases: ["mesa", "equipe"] },
    { key: "adqs", label: "Quantidade de ADQs", aliases: ["adq", "terminal", "quantidade"] },
    { key: "status", label: "Situação", aliases: ["situacao", "status"] },
    { key: "supplier", label: "Fornecedor", aliases: ["fornecedor", "adquirente"] },
    { key: "tpv", label: "TPV do mês", aliases: ["tpv", "volume"] },
    { key: "last", label: "Última transação", aliases: ["ultima transacao", "transacao mais recente"] }
  ];
  const state = {
    route: "overview", team: "all", period: "current", supplier: "all", status: "all", portfolioFilter: "Todos",
    search: "", page: 1, pageSize: 8, protocols: load("rvadq.protocols", initialProtocols), extraClients: load("rvadq.clients", []),
    auditExtra: load("rvadq.audit", []), settings: load("rvadq.settings", { attentionDays: 4, inactiveDays: 30, approvedOnly: true, suppliers: { Paguebank: true, Stone: true, "RV Pay": true }, monthlyTarget: 146 }),
    importedRows: null
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const pageContent = $("#page-content");
  const pageHeading = $("#page-heading");
  const modalRoot = $("#modal-root");
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  function load(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { toast("Não foi possível salvar neste navegador.", true); }
  }
  const fmtMoney = (value) => value === 0 ? "—" : new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);
  const fmtNum = (value) => new Intl.NumberFormat("pt-BR").format(value);
  const countLabel = (value, singular, plural) => `${value} ${value === 1 ? singular : plural}`;
  const initials = (name) => String(name || "RV").trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  const statusClass = (status) => ({ "Ativa": "status-active", "Atenção": "status-attention", "Inoperante": "status-inactive", "Aguardando primeira venda": "status-waiting", "Sem ADQ": "status-noadq" })[status] || "status-noadq";
  const statusPill = (status) => `<span class="status-pill ${statusClass(status)}">${escapeHtml(status)}</span>`;
  const clientRows = () => {
    const overrides = new Map(state.extraClients.map((client) => [client.code, client]));
    const added = state.extraClients.filter((client) => !clients.some((seed) => seed.code === client.code));
    return [...added, ...clients.map((client) => overrides.get(client.code) || client)];
  };
  function toast(message, error = false) {
    const node = document.createElement("div");
    node.className = `toast${error ? " error" : ""}`;
    node.innerHTML = `<span class="toast-mark">${error ? "!" : "✓"}</span><span>${escapeHtml(message)}</span>`;
    $("#toast-region").append(node);
    window.setTimeout(() => node.remove(), 3500);
  }
  function addAudit(title, detail, user = "Administração") {
    state.auditExtra.unshift({ title, detail, user, time: new Date().toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" }) });
    state.auditExtra = state.auditExtra.slice(0, 30);
    save("rvadq.audit", state.auditExtra);
  }
  function headingActions(route) {
    if (route === "portfolio") return `<button class="button button-outline" data-action="export-clients"><span class="button-icon">↓</span> Exportar lista</button><button class="button button-green" data-action="add-client"><span class="button-icon">＋</span> Cadastrar cliente</button>`;
    if (route === "imports") return `<button class="button button-outline" data-action="protocols"><span class="button-icon">◷</span> Histórico de protocolos</button>`;
    if (route === "settings") return `<button class="button button-green" data-action="save-settings"><span class="button-icon">✓</span> Salvar alterações</button>`;
    if (route === "audit") return `<button class="button button-outline" data-action="export-audit"><span class="button-icon">↓</span> Exportar log</button>`;
    if (route === "teams") return `<button class="button button-outline" data-action="manage-teams"><span class="button-icon">⚙</span> Gerenciar equipes</button>`;
    if (route === "production") return `<button class="button button-outline" data-action="export-production"><span class="button-icon">↓</span> Exportar</button>`;
    if (route === "health") return `<button class="button button-outline" data-action="export-health"><span class="button-icon">↓</span> Exportar diagnóstico</button>`;
    return `<button class="button button-green" data-action="import"><span class="button-icon">⇧</span> Importar dados</button>`;
  }
  function setHeading() {
    const [title, eyebrow, description] = routes[state.route];
    $("#breadcrumb-current").textContent = title;
    pageHeading.innerHTML = `<div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p class="page-description">${description}</p></div><div class="heading-actions">${headingActions(state.route)}</div>`;
    $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.route === state.route));
  }
  function filteredClients() {
    let rows = clientRows();
    if (state.team !== "all") rows = rows.filter((item) => item.team === state.team);
    if (state.supplier !== "all") rows = rows.filter((item) => item.supplier === state.supplier);
    if (state.status !== "all") rows = rows.filter((item) => item.status === state.status);
    if (state.portfolioFilter === "Com ADQ") rows = rows.filter((item) => item.adqs > 0);
    if (state.portfolioFilter === "Sem ADQ") rows = rows.filter((item) => item.adqs === 0);
    if (state.portfolioFilter === "Ativa") rows = rows.filter((item) => item.status === "Ativa");
    if (state.portfolioFilter === "Sem movimentação") rows = rows.filter((item) => ["Inoperante", "Aguardando primeira venda"].includes(item.status));
    if (state.portfolioFilter === "Inoperante") rows = rows.filter((item) => item.status === "Inoperante");
    if (state.portfolioFilter === "Múltiplas ADQs") rows = rows.filter((item) => item.adqs > 1);
    if (state.portfolioFilter === "Nova no mês") rows = rows.filter((item) => item.last.startsWith("02/11") || item.status === "Aguardando primeira venda");
    const needle = state.search.trim().toLocaleLowerCase("pt-BR");
    if (needle) rows = rows.filter((item) => [item.name, item.code, item.city, item.owner, item.team, item.supplier].join(" ").toLocaleLowerCase("pt-BR").includes(needle));
    return rows;
  }
  function tableRows(rows) {
    if (!rows.length) return `<tr><td colspan="6"><div class="empty-state">Nenhum cliente encontrado para os filtros atuais.</div></td></tr>`;
    return rows.map((client) => `<tr data-action="client-detail" data-code="${escapeHtml(client.code)}">
      <td><div class="client-cell"><span class="client-avatar">${escapeHtml(initials(client.name))}</span><span class="client-copy"><strong>${escapeHtml(client.name)}</strong><span>${escapeHtml(client.code)} · ${escapeHtml(client.city)}</span></span></div></td>
      <td><span class="owner-copy"><strong>${escapeHtml(client.owner || "Sem responsável")}</strong><span>${escapeHtml(client.team || "Sem mesa")}</span></span></td>
      <td>${client.adqs > 1 ? `${client.adqs} <span class="status-pill status-waiting">MULTI</span>` : client.adqs || "—"}</td>
      <td>${statusPill(client.status)}</td><td>${escapeHtml(client.last)}</td><td><strong>${fmtMoney(client.tpv)}</strong></td></tr>`).join("");
  }
  function dataTable(rows, showFooter = true) {
    return `<div class="table-wrap"><table class="data-table"><thead><tr><th>CLIENTE</th><th>RESPONSÁVEL</th><th>ADQS</th><th>SITUAÇÃO</th><th>ÚLTIMA TRANSAÇÃO</th><th>TPV DO MÊS</th></tr></thead><tbody>${tableRows(rows)}</tbody></table></div>${showFooter ? `<div class="table-footer"><span>Exibindo <strong>${rows.length}</strong> registros</span><span>Base demonstrativa · Clique em um cliente para ver detalhes</span></div>` : ""}`;
  }
  function chartSvg() {
    const months = ["Jun", "Jul", "Ago", "Set", "Out", "Nov"];
    const installed = [72, 86, 93, 104, 110, 119], active = [55, 69, 74, 84, 89, 98];
    return `<svg viewBox="0 0 600 145" role="img" aria-label="Gráfico de produção por mês">
      ${[0,1,2,3].map((n) => `<line class="chart-gridline" x1="36" x2="592" y1="${15+n*34}" y2="${15+n*34}"/><text class="chart-y" text-anchor="end" x="27" y="${18+n*34}">${120-n*40}</text>`).join("")}
      ${months.map((month, i) => { const x=67+i*89; const h1=installed[i]*.72; const h2=active[i]*.72; return `<rect class="chart-bar" fill="#dbe9de" x="${x}" y="${116-h1}" width="20" height="${h1}"/><rect class="chart-bar" fill="#208260" x="${x+24}" y="${116-h2}" width="20" height="${h2}"/><text class="chart-x" text-anchor="middle" x="${x+22}" y="137">${month}</text>`; }).join("")}
      <line x1="36" x2="592" y1="116" y2="116" stroke="#dfe6e1"/>
    </svg>`;
  }
  function miniTeamCards() {
    return `<div class="team-mini-grid">${teams.filter((team) => state.team === "all" || team.name === state.team).map((team, i) => `<div class="team-mini-card"><div class="team-mini-top"><span class="team-mini-number">0${i+1}</span></div><strong>${team.name}</strong><span>${team.supervisor}</span><div class="team-mini-stats"><span>Ativos<strong>${team.clients}</strong></span><span>Ativação<strong>${team.activation}%</strong></span></div></div>`).join("")}</div>`;
  }
  function portfolioPanel(rows, compact = false, total = rows.length) {
    return `<section class="panel"><div class="panel-head"><div><div class="section-label">AMOSTRA OPERACIONAL</div><h2 class="section-title">${compact ? "Clientes para acompanhar" : "Carteira de clientes"}</h2><p class="section-subtitle">${compact ? "Registros mais relevantes no período atual" : "Busque, filtre e abra o contexto completo de cada PDV."}</p></div>${compact ? `<button class="text-link" data-route-to="portfolio">Abrir carteira ↗</button>` : ""}</div>
      ${compact ? `<div class="panel-content">${dataTable(rows.slice(0,5), false)}</div>` : `<div class="table-toolbar"><label class="search-box"><span>⌕</span><input id="client-search" type="search" placeholder="Buscar por nome, código, CPF/CNPJ, cidade..." value="${escapeHtml(state.search)}" autocomplete="off"></label><label class="filter-select"><span class="sr-only">Mesa</span><select id="table-team"><option value="all">Todas as mesas</option>${teams.map((team) => `<option ${state.team === team.name ? "selected" : ""}>${team.name}</option>`).join("")}</select></label><span class="table-summary-extra">${total} encontrados</span></div><div class="status-chips">${labels.map((label) => `<button class="status-chip ${state.portfolioFilter===label?"active":""}" data-portfolio-filter="${label}">${label}${label==="Inoperante"?` <span class="chip-number">65</span>`:label==="Múltiplas ADQs"?` <span class="chip-number">174</span>`:""}</button>`).join("")}</div><div class="table-summary"><span><strong>${total}</strong> clientes encontrados</span><span>Atualizado há 6 min</span></div>${dataTable(rows)}<div class="table-footer"><span>Exibindo <strong>${rows.length}</strong> de <strong>${total}</strong> registros</span><span class="pagination-controls"><button class="page-button" data-action="page" data-direction="-1" ${state.page<=1?"disabled":""} aria-label="Página anterior">‹</button><span>Página ${state.page} de ${Math.max(1,Math.ceil(total/state.pageSize))}</span><button class="page-button" data-action="page" data-direction="1" ${state.page>=Math.ceil(total/state.pageSize)?"disabled":""} aria-label="Próxima página">›</button></span></div>`}</section>`;
  }
  function renderOverview() {
    const shown = filteredClients();
    const headline = state.team === "all" ? "R$ 914 mil" : fmtMoney(teams.find((team) => team.name === state.team)?.tpv || 0);
    return `<section class="overview-hero"><div class="hero-content"><div class="hero-overline"><span class="live-dot"></span> MONITORAMENTO AO VIVO</div><h1>Bom dia, Administração.</h1><p>A operação está em movimento. Veja onde o cadastro já virou uso — e quais clientes precisam de atenção hoje.</p><div class="hero-actions"><button class="button button-green" data-route-to="portfolio">Ver carteira <span>↗</span></button><button class="button button-outline" data-route-to="production">Acompanhar produção <span>↗</span></button></div></div><div class="hero-stat"><div class="hero-stat-label">TPV transacionado no período</div><div class="hero-stat-value">${headline}</div><div class="hero-stat-change">↗ +12,8% vs. mês anterior</div></div></section>
      <section class="kpi-grid">
        ${kpi("Clientes na base","1.286","+4,2% no mês","♙")}
        ${kpi("Com ADQ","1.132","88,0% da base","▤")}
        ${kpi("ADQs ativas","1.008","+7,8% no mês","↗")}
        ${kpi("Aguardando uso","116","5 novas hoje","◷","kpi-warn")}
        ${kpi("Inoperantes","65","−8,1% vs. mês ant.","⌁","kpi-danger")}
        ${kpi("Múltiplas ADQs","174","15,3% dos clientes","▧")}
      </section>
      <div class="overview-grid">
        <section class="panel production-chart"><div class="panel-head"><div><div class="section-label">RITMO COMERCIAL</div><h2 class="section-title">Produção de ADQ</h2><p class="section-subtitle">Instaladas versus ativadas no mês</p></div><button class="text-link" data-route-to="production">Ver produção ↗</button></div><div class="panel-content"><div class="chart-summary"><div class="chart-stat"><strong>119</strong><span>Instaladas <em class="chart-positive">+8,6%</em></span></div><div class="chart-stat"><strong>98</strong><span>Já transacionaram · 82,4%</span></div><div class="chart-stat"><strong>146</strong><span>Meta do mês · 81,5%</span></div><div class="legend"><span class="legend-item"><i class="legend-dot" style="background:#dbe9de"></i>Instaladas</span><span class="legend-item"><i class="legend-dot" style="background:#208260"></i>Ativadas</span></div></div><div class="chart-wrap">${chartSvg()}</div><div class="section-subtitle">Competência: Novembro/26</div></div></section>
        <section class="panel health-card"><div class="panel-head"><div><div class="section-label">STATUS OPERACIONAL</div><h2 class="section-title">Saúde da base</h2><p class="section-subtitle">1.286 clientes monitorados</p></div><button class="text-link" data-route-to="health">Ver detalhes ↗</button></div><div class="panel-content"><div class="health-score"><div class="health-ring"><strong>81,4%</strong></div><div class="health-score-copy"><strong>Base saudável</strong><span>Ativa e transacionando hoje</span></div></div><div class="health-breakdown">${healthRow("Ativa e transacionando",69,"1.008")}${healthRow("Atenção",8,"116","warn")}${healthRow("Inoperante",5,"65","danger")}${healthRow("Sem ADQ",12,"154","neutral")}</div></div></section>
      </div>
      <div class="overview-bottom"><section class="panel"><div class="panel-head"><div><div class="section-label">SINAL DE RISCO</div><h2 class="section-title">Alertas que pedem ação</h2><p class="section-subtitle">Prioridades identificadas pelo monitoramento</p></div><span class="filter-badge">4 abertos</span></div><div class="panel-content"><div class="alert-list">${alerts.map(alertRow).join("")}</div></div></section>
        <section class="panel"><div class="panel-head"><div><div class="section-label">ÚLTIMAS MOVIMENTAÇÕES</div><h2 class="section-title">Atividade recente</h2><p class="section-subtitle">O que mudou na operação</p></div><button class="text-link" data-route-to="audit">Ver auditoria ↗</button></div><div class="panel-content"><div class="activity-list">${activities.slice(0,4).map(activityRow).join("")}</div></div></section>
      </div>
      <div class="panel" style="margin-top:12px"><div class="panel-head"><div><div class="section-label">VISÃO POR EQUIPE</div><h2 class="section-title">As três mesas</h2><p class="section-subtitle">Performance consolidada de supervisores e vendedores</p></div><button class="text-link" data-route-to="teams">Comparar mesas ↗</button></div><div class="panel-content">${miniTeamCards()}</div></div>
      <div style="margin-top:12px">${portfolioPanel(shown,true)}</div>`;
  }
  function kpi(title,value,foot,icon,extra="") { return `<button class="kpi-card ${extra}" data-action="kpi-filter" data-kpi="${title}"><span class="kpi-top">${title}<span class="kpi-icon">${icon}</span></span><strong class="kpi-value">${value}</strong><span class="kpi-foot">${foot}</span></button>`; }
  function healthRow(label,percent,value,kind="") { return `<div class="health-row"><span>${label}</span><div class="progress-track"><div class="progress-fill ${kind}" style="width:${percent}%"></div></div><strong>${value}</strong></div>`; }
  function alertRow(item) { return `<div class="alert-item"><span class="signal-icon ${item.kind==="danger"?"red":item.kind==="green"?"green":""}">${item.kind==="danger"?"!":item.kind==="green"?"✓":"↗"}</span><div class="alert-copy"><strong>${item.title}</strong><p>${item.detail}</p></div><span class="alert-meta">${item.area}<br>${item.time}</span></div>`; }
  function activityRow(item) { return `<div class="activity-item"><span class="signal-icon green">${item.icon}</span><div class="activity-copy"><strong>${item.title}</strong><p>${item.detail}</p></div><span class="activity-meta">${item.time}</span></div>`; }
  function renderPortfolio() {
    const rows = filteredClients();
    const tableRowsPage = rows.slice((state.page-1)*state.pageSize, state.page*state.pageSize);
    return portfolioPanel(tableRowsPage, false, rows.length);
  }
  function renderTeams() {
    const visibleTeams = teams.filter((team) => state.team === "all" || team.name === state.team);
    const filteredSellers = sellers.filter((seller) => state.team === "all" || seller.team === state.team).sort((a,b) => b.activated-a.activated);
    return `<div class="team-cards">${visibleTeams.map((team,i) => `<article class="panel team-card"><div class="team-card-head"><span class="team-card-no">MESA 0${teams.indexOf(team)+1}</span><span class="filter-badge">${team.name}</span></div><h2>${team.supervisor}</h2><div class="team-card-owner">3 vendedores · ${team.clients} clientes ativos</div><div class="team-graphic">${[45,66,56,85,72,98,70,89,61].map((v,j)=>`<span style="height:${Math.round(v*(.68+team.activation/300))}%"></span>`).join("")}</div><div class="team-card-stats"><div><span>TPV no mês</span><strong>${fmtMoney(team.tpv)}</strong></div><div><span>Ativação</span><strong>${team.activation}%</strong></div><div><span>Clientes</span><strong>${team.clients}</strong></div></div><button class="button button-outline" data-action="team-detail" data-team="${team.name}">Abrir painel da mesa ↗</button></article>`).join("")}</div>
      <section class="panel"><div class="panel-head"><div><div class="section-label">RANKING DA OPERAÇÃO</div><h2 class="section-title">Vendedores por produção</h2><p class="section-subtitle">Competência atual, ordenada por ADQs ativadas</p></div><button class="text-link" data-action="export-production">Exportar ↓</button></div><div class="panel-content"><div class="rank-list">${filteredSellers.map((person,index)=>`<div class="rank-row"><span class="rank-no">${String(index+1).padStart(2,"0")}</span><span class="rank-person"><span class="person-avatar">${person.initials}</span><span><strong>${person.name}</strong><small>${person.team} · ${person.clients} clientes na carteira</small></span></span><span class="rank-metric"><strong>${person.activated} ADQs</strong><span>${person.installs} instaladas · ${Math.round(person.activated/person.installs*100)}% ativação</span></span></div>`).join("")}</div></div></section>`;
  }
  function renderProduction() {
    const visibleSellers = sellers.filter((person)=>state.team==="all"||person.team===state.team);
    const installed = visibleSellers.reduce((sum,item)=>sum+item.installs,0);
    const activated = visibleSellers.reduce((sum,item)=>sum+item.activated,0);
    const goal = state.settings.monthlyTarget;
    return `<div class="metric-strip">${metric("ADQs instaladas",fmtNum(state.team==="all"?278:installed),"+8,6% vs. out/26")}${metric("Já transacionaram",fmtNum(state.team==="all"?227:activated),`${(activated/(installed||1)*100).toFixed(1)}% de ativação`)}${metric("Meta da competência",fmtNum(goal),`${Math.max(goal-(state.team==="all"?119:installed),0)} ADQs para atingir`)}${metric("TPV das novas ADQs",state.team==="all"?"R$ 914 mil":fmtMoney(visibleSellers.length*92000),"+12,8% vs. out/26")}</div>
      <div class="production-split"><section class="panel"><div class="panel-head"><div><div class="section-label">DIVISÃO POR FORNECEDOR</div><h2 class="section-title">De onde vem a produção</h2><p class="section-subtitle">Instalações únicas na competência selecionada</p></div><label class="filter-select"><select id="month-filter"><option>Novembro de 2026</option><option>Outubro de 2026</option><option>Setembro de 2026</option></select></label></div><div class="panel-content">${[["P","Paguebank",17,47],["S","Stone",14,39],["R","RV Pay",12,33]].map(([letter,name,share,count])=>`<div class="supplier-row"><span class="supplier-mark">${letter}</span><span class="supplier-name">${name} <span style="color:#909b94;font-weight:400">· ${share}%</span></span><strong class="supplier-value">${count}</strong><div class="supplier-line"><div class="progress-track"><div class="progress-fill" style="width:${share*4}%"></div></div></div></div>`).join("")}<p class="section-subtitle">A mesma instalação só é contada uma vez por chave de credenciamento.</p></div></section>
      <section class="panel"><div class="panel-head"><div><div class="section-label">CONVERSÃO</div><h2 class="section-title">Instalada → em uso</h2><p class="section-subtitle">Primeira transação na competência selecionada</p></div></div><div class="panel-content"><div class="conversion-visual"><span class="conversion-big">${(activated/(installed||1)*100).toFixed(1)}%</span><span class="conversion-copy">das ADQs instaladas no mês já realizaram a primeira transação.</span></div><div class="health-breakdown">${healthRow("Instaladas",100,String(installed))}${healthRow("Em uso",Math.round(activated/(installed||1)*100),String(activated))}</div><p class="section-subtitle" style="margin-top:12px">${installed-activated} ADQs aguardam a primeira venda.</p></div></section></div>
      <section class="panel"><div class="panel-head"><div><div class="section-label">DETALHAMENTO NOMINAL</div><h2 class="section-title">Produção por vendedor</h2><p class="section-subtitle">Abra a lista dos clientes e terminais que compõem cada número.</p></div><button class="text-link" data-action="export-production">Exportar lista nominal ↓</button></div><div class="panel-content"><div class="table-wrap"><table class="data-table"><thead><tr><th>RESPONSÁVEL</th><th>INSTALADAS</th><th>EM USO</th><th>META</th><th>TAXA DE ATIVAÇÃO</th><th>PROGRESSO</th></tr></thead><tbody>${visibleSellers.map(person=>`<tr data-action="seller-detail" data-seller="${person.name}"><td><span class="person-cell"><span class="person-avatar">${person.initials}</span><span><strong>${person.name}</strong><small>${person.team}</small></span></span></td><td>${person.installs}</td><td><strong>${person.activated}</strong></td><td>${person.target}</td><td>${(person.activated/person.installs*100).toFixed(1)}%</td><td><div class="progress-track" style="width:95px"><div class="progress-fill" style="width:${Math.min(person.activated/person.target*100,100)}%"></div></div></td></tr>`).join("")}</tbody></table></div></div></section>`;
  }
  function metric(label,value,change) { return `<div class="metric-panel"><span>${label}</span><strong>${value}</strong><small>${change}</small></div>`; }
  function renderImports() {
    const activeStep=state.importedRows?.stage===4?4:state.importedRows?.stage===3?3:state.importedRows?.stage===2?2:1;
    return `<div class="import-steps">${["Selecionar arquivo","Mapear colunas","Revisar dados","Concluir"].map((step,i)=>`<div class="import-step ${i+1<activeStep?"done":""} ${i+1===activeStep?"active":""}" data-step="${i+1}"><span>${i+1<activeStep?"✓":i+1}</span>${step}</div>`).join("")}</div>
    <div class="import-layout"><section class="panel"><div class="panel-head"><div><div class="section-label">IMPORTAR BASE</div><h2 class="section-title">Atualize os dados da operação</h2><p class="section-subtitle">Selecione uma planilha Excel ou CSV para iniciar a importação.</p></div></div><div class="panel-content"><div class="drop-zone ${state.importedRows?.stage===4?"hidden":state.importedRows?"drop-zone-compact":""}" id="drop-zone"><span class="upload-icon">⇧</span><strong>${state.importedRows?"Arquivo carregado para revisão":"Solte seu arquivo aqui"}</strong><p>${state.importedRows?`${escapeHtml(state.importedRows.file)} · ${(state.importedRows.size/1024/1024).toFixed(2)} MB`:"ou clique para buscar no computador"}<br><strong>Formatos aceitos: XLSX ou CSV · até 50 MB</strong></p><button class="button button-outline" data-action="choose-file">${state.importedRows?"Escolher outro arquivo":"Escolher arquivo"}</button></div><input id="import-file" class="file-input" type="file" accept=".csv,.xlsx,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">${renderImportPreview()}</div></section>
    <section class="panel"><div class="panel-head"><div><div class="section-label">REGRAS PROTEGIDAS</div><h2 class="section-title">Importar sem perder contexto</h2><p class="section-subtitle">Rastreabilidade e segurança em todas as etapas.</p></div></div><div class="panel-content"><div class="rule-list"><div class="rule-item"><span class="rule-check">✓</span><span><strong>Deduplicação pelo código do PDV</strong>Atualiza cadastros existentes sem duplicar pontos de venda.</span></div><div class="rule-item"><span class="rule-check">✓</span><span><strong>Arquivo de origem identificado</strong>O protocolo registra o nome do arquivo e o horário do processamento.</span></div><div class="rule-item"><span class="rule-check">✓</span><span><strong>Linhas rejeitadas destacadas</strong>Confira o número e o motivo de cada linha ignorada na revisão.</span></div><div class="rule-item"><span class="rule-check">✓</span><span><strong>Protocolo e trilha de auditoria</strong>Cada importação confirmada fica registrada para consulta.</span></div></div></div></section></div>
    <section class="panel" style="margin-top:12px"><div class="panel-head"><div><div class="section-label">ÚLTIMOS PROTOCOLOS</div><h2 class="section-title">Histórico recente</h2></div><button class="text-link" data-action="protocols">Ver histórico completo ↗</button></div><div class="panel-content"><div class="protocol-list">${state.protocols.slice(0,4).map(protocolRow).join("")}</div></div></section>`;
  }
  function renderImportPreview() {
    const imported=state.importedRows;
    if(!imported)return "";
    if(imported.stage===2) {
      const options=`<option value="-1">Não importar esta coluna</option>${imported.headers.map((header,index)=>`<option value="${index}">${escapeHtml(header||`Coluna ${index+1}`)}</option>`).join("")}`;
      return `<div class="import-preview"><div class="import-preview-heading"><div><strong>Mapeie as colunas da planilha</strong><p>Revise as associações sugeridas; campos com * são obrigatórios.</p></div><span class="status-pill status-active">Cabeçalhos detectados</span></div><div class="mapping-grid">${importFields.map(field=>`<label class="mapping-field">${escapeHtml(field.label)}${field.required?" *":""}<select data-import-field="${field.key}">${options.replace(`value="${imported.mapping[field.key]}"`,`value="${imported.mapping[field.key]}" selected`)}</select></label>`).join("")}</div><div class="mapping-sample"><span>PRIMEIRA LINHA DE DADOS</span><div id="mapping-sample-values">${renderMappingSample(imported)}</div></div><div class="import-preview-actions"><button class="button button-outline button-small" data-action="reset-import">Cancelar</button><button class="button button-green button-small" data-action="review-import">Validar e revisar dados <span>→</span></button></div></div>`;
    }
    if(imported.stage===4) {
      return `<div class="import-preview import-success"><span class="import-success-icon">✓</span><div><strong>Importação concluída com sucesso</strong><p>${escapeHtml(imported.file)} · ${countLabel(imported.newCount,"novo cliente","novos clientes")} e ${countLabel(imported.updatedCount,"registro atualizado","registros atualizados")}.${imported.rejected?` ${countLabel(imported.rejected,"linha rejeitada","linhas rejeitadas")}.`:""}</p></div><div class="import-preview-actions"><button class="button button-outline button-small" data-action="protocols">Ver protocolo</button><button class="button button-green button-small" data-action="choose-file">Importar outro arquivo</button></div></div>`;
    }
    return `<div class="import-preview"><div class="import-preview-heading"><div><strong>Revise os dados antes de importar</strong><p>${countLabel(imported.valid,"registro válido","registros válidos")} de ${countLabel(imported.total,"linha","linhas")}${imported.rejected?` · ${countLabel(imported.rejected,"linha rejeitada","linhas rejeitadas")} por falta de nome ou código`:""}.</p></div><span class="status-pill ${imported.rejected?"status-attention":"status-active"}">${imported.rejected?countLabel(imported.rejected,"erro","erros"):"Pronto para importar"}</span></div><div class="table-wrap import-preview-table"><table class="data-table"><thead><tr><th>PDV</th><th>CLIENTE</th><th>CIDADE</th><th>SITUAÇÃO</th></tr></thead><tbody>${imported.rows.slice(0,5).map(row=>`<tr><td>${escapeHtml(row.code)}</td><td>${escapeHtml(row.name)}</td><td>${escapeHtml(row.city)}</td><td>${escapeHtml(row.status)}</td></tr>`).join("")}</tbody></table></div>${imported.rejectedRows?.length?`<div class="import-rejected"><strong>Linhas ignoradas</strong>${imported.rejectedRows.slice(0,5).map(row=>`<p><b>Linha ${row.line}:</b> ${row.reasons.map(escapeHtml).join(" e ")} ausente${row.reasons.length>1?"s":""}.</p>`).join("")}${imported.rejectedRows.length>5?`<p>+ ${imported.rejectedRows.length-5} outras linhas ignoradas.</p>`:""}</div>`:""}<div class="import-preview-actions"><button class="button button-outline button-small" data-action="reset-import">Cancelar</button><button class="button button-green button-small" data-action="confirm-import">Confirmar importação (${imported.valid})</button></div></div>`;
  }
  function renderMappingSample(imported,mapping=imported.mapping) {
    return importFields.filter(field=>mapping[field.key]>=0).slice(0,4).map(field=>`<span><strong>${escapeHtml(field.label)}</strong>${escapeHtml(imported.rawRows[1]?.[mapping[field.key]]||"—")}</span>`).join("");
  }
  function protocolRow(item) { const errors = String(item.status).toLowerCase().includes("erro"); return `<div class="protocol-item"><span class="protocol-icon ${errors?"error":""}">${errors?"!":"✓"}</span><span class="protocol-copy"><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.detail)}</small></span><span class="protocol-status ${errors?"error":""}">${escapeHtml(item.status)}</span></div>`; }
  const auditSeed = [
    { title:"Importação concluída", detail:"credenciamentos_outubro.xlsx · 472 novos registros", user:"Administração", time:"01/11/2026 18:10" },
    { title:"Vínculo alterado", detail:"PDV-1842 · Vendedor: Rafael Lima → Marina Costa", user:"Camila Nunes", time:"02/11/2026 17:36" },
    { title:"Status de ADQ atualizado", detail:"POS-22991 · Atenção → Inoperante", user:"André Rocha", time:"02/11/2026 16:48" },
    { title:"Regra de saúde ajustada", detail:"Limite de Atenção: 7 dias → 4 dias", user:"Administração", time:"01/11/2026 15:21" },
    { title:"Importação com erros", detail:"base_pdv_outubro.xlsx · 12 linhas rejeitadas", user:"Administração", time:"01/11/2026 17:52" }
  ];
  function renderAudit() {
    const allEvents = [...state.auditExtra, ...auditSeed].filter((event) => {
      if (state.search && !`${event.title} ${event.detail} ${event.user}`.toLowerCase().includes(state.search.toLowerCase())) return false;
      return true;
    });
    return `<section class="panel"><div class="panel-head"><div><div class="section-label">RASTREABILIDADE</div><h2 class="section-title">Histórico de atividades</h2><p class="section-subtitle">248 eventos registrados · Auditoria ativa</p></div><div class="audit-controls"><label class="search-box" style="flex:0 1 195px"><span>⌕</span><input id="audit-search" placeholder="Buscar evento..." value="${escapeHtml(state.search)}"></label><label class="filter-select"><select id="audit-period"><option>Últimos 30 dias</option><option>Últimos 7 dias</option><option>Últimos 90 dias</option></select></label><label class="filter-select"><select id="audit-type"><option>Todos os eventos</option><option>Importações</option><option>Alterações</option><option>Configurações</option></select></label></div></div><div class="audit-timeline">${allEvents.map((event,i)=>`<div class="audit-row"><span class="audit-icon ${i===4?"warning":""}">${i===0?"⇧":i===1?"↗":i===2?"◷":i===3?"⚙":"!"}</span><div class="audit-copy"><strong>${escapeHtml(event.title)}</strong><p>${escapeHtml(event.detail)}</p><small>${escapeHtml(event.time)}</small></div><span class="audit-user">${escapeHtml(event.user)}</span></div>`).join("")}</div></section>`;
  }
  function renderHealth() {
    const categories = [
      { title:"Clientes ativos", detail:"Transacionando nos últimos 30 dias · 1.008 clientes", kind:"green", rows:clientRows().filter(c=>c.status==="Ativa").slice(0,3) },
      { title:"Atenção necessária", detail:"Sem transação recente · 116 clientes", kind:"warning", rows:clientRows().filter(c=>c.status==="Atenção").slice(0,3) },
      { title:"Terminais inoperantes", detail:"Mais de 30 dias sem uso · 65 clientes", kind:"danger", rows:clientRows().filter(c=>c.status==="Inoperante").slice(0,3) },
      { title:"Sem ADQ vinculada", detail:"Credenciamentos pendentes · 154 clientes", kind:"", rows:clientRows().filter(c=>c.status==="Sem ADQ").slice(0,3) }
    ];
    return `<section class="health-hero"><div><div class="hero-overline"><span class="live-dot"></span> INDICADOR DE SAÚDE DA OPERAÇÃO</div><h2>Sua base está no caminho certo.</h2><p>81,4% dos clientes estão ativos e transacionando. Acompanhe os sinais abaixo para agir antes que virem churn.</p></div><div class="health-ring"><strong>81,4%</strong></div></section><div class="metric-strip">${metric("Clientes monitorados","1.286","Base atualizada há 6 min")}${metric("Ativa e transacionando","1.008","78% da base")}${metric("Precisam de atenção","181","Atenção + inoperantes")}${metric("Sem ADQ vinculada","154","12% da base")}</div><div class="health-detail-grid">${categories.map(cat=>`<section class="panel health-category"><div class="category-head"><span class="signal-icon ${cat.kind==="danger"?"red":cat.kind==="green"?"green":""}">${cat.kind==="danger"?"!":cat.kind==="green"?"✓":"◷"}</span><span><strong>${cat.title}</strong><small>${cat.detail}</small></span></div>${cat.rows.length?cat.rows.map(c=>`<div class="health-customer" data-action="client-detail" data-code="${c.code}"><span><strong>${c.name}</strong><small>${c.code} · ${c.city}</small></span>${statusPill(c.status)}</div>`).join(""):`<p class="empty-state">Nenhum registro demonstrativo nessa categoria.</p>`}<button class="text-link" data-route-to="portfolio">Ver carteira ↗</button></section>`).join("")}</div>`;
  }
  function renderSettings() {
    const s = state.settings;
    return `<div class="settings-layout">
      <section class="panel settings-card"><div class="section-label">SAÚDE DA BASE</div><h2 class="section-title">Limiares de inatividade</h2><p class="settings-intro">Defina quando uma ADQ deve pedir atenção ou ser considerada inoperante.</p><div class="setting-grid"><label class="form-field">Atenção<span>Após quantos dias sem transação o cliente entra em atenção?</span><span class="setting-number"><input type="number" id="attention-days" min="1" max="90" value="${s.attentionDays}"><span>dias</span></span></label><label class="form-field">Inoperante<span>Após quantos dias sem transação o terminal fica inoperante?</span><span class="setting-number"><input type="number" id="inactive-days" min="2" max="365" value="${s.inactiveDays}"><span>dias</span></span></label></div><label class="setting-check"><input id="approved-only" type="checkbox" ${s.approvedOnly?"checked":""}> Somente transações aprovadas entram no cálculo.</label></section>
      <section class="panel settings-card"><div class="section-label">ADQUIRENTES</div><h2 class="section-title">Fornecedores ativos</h2><p class="settings-intro">Aliases são usados para reconhecer arquivos de importação.</p><div class="supplier-settings">${Object.keys(s.suppliers).map((name)=>`<div class="supplier-setting-row"><span class="supplier-mark">${escapeHtml(name[0])}</span><span class="supplier-name">${escapeHtml(name)}<small style="color:#8e9992;display:block;font-size:8px;font-weight:400;margin-top:3px">Ativo · reconhecido em 4 aliases</small></span><input class="switch supplier-toggle" type="checkbox" data-supplier="${escapeHtml(name)}" ${s.suppliers[name]?"checked":""} aria-label="Ativar fornecedor ${escapeHtml(name)}"></div>`).join("")}</div><button class="button button-outline button-small" data-action="add-supplier">＋ Adicionar fornecedor</button></section>
      <section class="panel settings-card"><div class="section-label">METAS</div><h2 class="section-title">Meta de credenciamentos</h2><p class="settings-intro">Competência Novembro/2026 · atualize o total esperado da operação.</p><div class="setting-grid"><label class="form-field">Meta total da operação<span class="setting-number"><input type="number" id="monthly-target" min="1" value="${s.monthlyTarget}"><span>ADQs</span></span></label></div><div class="meta-grid">${teams.map((team,i)=>`<div class="meta-tile"><span>${team.name}</span><strong>${[42,43,34][i]} / ${[52,54,40][i]} ADQs instaladas</strong></div>`).join("")}</div></section>
      <section class="panel settings-card"><div class="section-label">ACESSOS</div><h2 class="section-title">Perfis e visibilidade</h2><p class="settings-intro">Estrutura de permissões configurada para a operação.</p><div class="permission-list"><div class="permission-tile"><strong>Administração</strong><span>Visão total, importação, auditoria e configuração</span></div><div class="permission-tile"><strong>Supervisor</strong><span>Equipe vinculada, carteira, ADQs e produção</span></div><div class="permission-tile"><strong>Vendedor</strong><span>Clientes vinculados e produção própria</span></div></div></section>
      </div>`;
  }
  function render() {
    setHeading();
    const pages = { overview:renderOverview, teams:renderTeams, portfolio:renderPortfolio, production:renderProduction, imports:renderImports, audit:renderAudit, settings:renderSettings, health:renderHealth };
    pageContent.innerHTML = (pages[state.route] || renderOverview)();
    $("#supplier-filter").innerHTML = `<option value="all">Todos os fornecedores</option>${Object.keys(state.settings.suppliers).map((supplier)=>`<option value="${escapeHtml(supplier)}">${escapeHtml(supplier)}</option>`).join("")}`;
    $("#team-filter").value = state.team;
    $("#date-filter").value = state.period;
    $("#supplier-filter").value = state.supplier;
    $("#status-filter").value = state.status;
    $("#filter-badge").textContent = String(2 + (state.team !== "all" ? 1 : 0) + (state.supplier !== "all" ? 1 : 0) + (state.status !== "all" ? 1 : 0));
    document.title = `RV Digital — ${routes[state.route][0]}`;
    const pageMax = Math.max(1, Math.ceil(filteredClients().length / state.pageSize));
    if (state.page > pageMax) state.page = pageMax;
  }
  function navigate(route) {
    if (!routes[route]) route = "overview";
    if(route!==state.route) state.search="";
    state.route = route;
    $("#filter-popover").classList.add("hidden");
    render();
    if (window.innerWidth <= 900) closeSidebar();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function showModal(title, subtitle, body, actions = "", wide = false) {
    modalRoot.innerHTML = `<div class="modal-backdrop" data-action="backdrop-close"><section class="modal ${wide?"modal-wide":""}" role="dialog" aria-modal="true" aria-labelledby="modal-title"><header class="modal-head"><div><h2 id="modal-title">${title}</h2><p>${subtitle}</p></div><button class="modal-close" data-action="close-modal" type="button" aria-label="Fechar">×</button></header><div class="modal-body">${body}</div>${actions?`<footer class="modal-actions">${actions}</footer>`:""}</section></div>`;
    const first = $("input,select,button", $(".modal", modalRoot));
    if (first) first.focus();
  }
  function closeModal() { modalRoot.innerHTML = ""; }
  function customerDetail(code) {
    const client = clientRows().find((item) => item.code === code);
    if (!client) return;
    showModal(escapeHtml(client.name), `${escapeHtml(client.code)} · ${escapeHtml(client.city)}`, `<div class="detail-grid"><div class="detail-item"><span>RESPONSÁVEL</span><strong>${escapeHtml(client.owner || "Sem responsável")}</strong></div><div class="detail-item"><span>MESA</span><strong>${escapeHtml(client.team || "Sem mesa")}</strong></div><div class="detail-item"><span>SITUAÇÃO</span><strong>${statusPill(client.status)}</strong></div><div class="detail-item"><span>FORNECEDOR</span><strong>${escapeHtml(client.supplier)}</strong></div><div class="detail-item"><span>ADQs VINCULADAS</span><strong>${client.adqs}</strong></div><div class="detail-item"><span>ÚLTIMA TRANSAÇÃO</span><strong>${escapeHtml(client.last)}</strong></div><div class="detail-item"><span>TPV NO MÊS</span><strong>${fmtMoney(client.tpv)}</strong></div><div class="detail-item"><span>IDENTIFICADOR PDV</span><strong>${escapeHtml(client.code)}</strong></div></div>`, `<button class="button button-outline" data-action="close-modal">Fechar</button><button class="button button-green" data-action="edit-client" data-code="${escapeHtml(client.code)}">Editar cliente</button>`);
  }
  function clientForm(client = null) {
    const c = client || { name:"", code:"", city:"", owner:"", team:"Mesa 1", adqs:1, status:"Aguardando primeira venda", supplier:"Paguebank", tpv:0, last:"Sem uso" };
    const supplierNames=Object.keys(state.settings.suppliers);
    showModal(client?"Editar cliente":"Cadastrar cliente", "Informações comerciais do ponto de venda.", `<form id="client-form"><div class="form-grid"><label class="form-field">Nome do estabelecimento<input name="name" required value="${escapeHtml(c.name)}" placeholder="Ex.: Mercado Central"></label><label class="form-field">Código do PDV<input name="code" required value="${escapeHtml(c.code)}" placeholder="PDV-0000"></label><label class="form-field">Cidade<input name="city" required value="${escapeHtml(c.city)}" placeholder="São Paulo"></label><label class="form-field">Responsável<input name="owner" value="${escapeHtml(c.owner)}" placeholder="Nome do vendedor"></label><label class="form-field">Mesa<select name="team">${teams.map(t=>`<option ${c.team===t.name?"selected":""}>${t.name}</option>`).join("")}</select></label><label class="form-field">Fornecedor<select name="supplier">${supplierNames.map(n=>`<option ${c.supplier===n?"selected":""}>${escapeHtml(n)}</option>`).join("")}</select></label><label class="form-field">Número de ADQs<input name="adqs" type="number" min="0" value="${c.adqs}"></label><label class="form-field">Situação<select name="status">${["Ativa","Atenção","Inoperante","Aguardando primeira venda","Sem ADQ"].map(n=>`<option ${c.status===n?"selected":""}>${n}</option>`).join("")}</select></label></div></form>`, `<button class="button button-outline" data-action="close-modal">Cancelar</button><button class="button button-green" data-action="save-client" data-code="${client?escapeHtml(client.code):""}">Salvar cliente</button>`);
  }
  function csvToRows(text) {
    const firstLine = text.split(/\r?\n/)[0] || "";
    const delimiter = (firstLine.match(/;/g)||[]).length > (firstLine.match(/,/g)||[]).length ? ";" : ",";
    const rows = []; let row = []; let cell = ""; let quoted = false;
    for (let i=0;i<text.length;i++) {
      const char=text[i];
      if (char==='"' && quoted && text[i+1]==='"') { cell+='"'; i++; }
      else if (char==='"') quoted=!quoted;
      else if (char===delimiter && !quoted) { row.push(cell.trim()); cell=""; }
      else if ((char==="\n"||char==="\r")&&!quoted) { if(char==="\r"&&text[i+1]==="\n") i++; row.push(cell.trim()); if(row.some(Boolean)) rows.push(row); row=[]; cell=""; }
      else cell+=char;
    }
    if(cell.length||row.length) { row.push(cell.trim()); if(row.some(Boolean)) rows.push(row); }
    return rows;
  }
  async function readXlsxRows(buffer) {
    const bytes=new Uint8Array(buffer);
    const view=new DataView(buffer);
    let end=-1;
    for(let i=bytes.length-22;i>=Math.max(0,bytes.length-65557);i--) {
      if(view.getUint32(i,true)===0x06054b50){end=i;break;}
    }
    if(end<0) throw new Error("O arquivo não parece ser uma planilha XLSX válida.");
    const entries=view.getUint16(end+10,true);
    let offset=view.getUint32(end+16,true);
    const files=new Map();
    const decoder=new TextDecoder("utf-8");
    for(let i=0;i<entries;i++) {
      if(view.getUint32(offset,true)!==0x02014b50) throw new Error("Não foi possível ler o conteúdo da planilha.");
      const method=view.getUint16(offset+10,true);
      const compressedSize=view.getUint32(offset+20,true);
      const nameLength=view.getUint16(offset+28,true);
      const extraLength=view.getUint16(offset+30,true);
      const commentLength=view.getUint16(offset+32,true);
      const localOffset=view.getUint32(offset+42,true);
      const name=decoder.decode(bytes.subarray(offset+46,offset+46+nameLength));
      const localNameLength=view.getUint16(localOffset+26,true);
      const localExtraLength=view.getUint16(localOffset+28,true);
      const dataOffset=localOffset+30+localNameLength+localExtraLength;
      const compressed=bytes.subarray(dataOffset,dataOffset+compressedSize);
      let payload;
      if(method===0) payload=compressed;
      else if(method===8&&typeof DecompressionStream==="function") {
        const stream=new Blob([compressed]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
        payload=new Uint8Array(await new Response(stream).arrayBuffer());
      } else throw new Error("Este navegador não consegue descompactar a planilha. Salve o arquivo como CSV e tente novamente.");
      if(name==="xl/sharedStrings.xml"||/^xl\/worksheets\/sheet\d+\.xml$/i.test(name)) files.set(name,decoder.decode(payload));
      offset+=46+nameLength+extraLength+commentLength;
    }
    const sheetName=[...files.keys()].find(name=>/^xl\/worksheets\/sheet\d+\.xml$/i.test(name));
    if(!sheetName) throw new Error("A planilha não contém uma aba de dados legível.");
    const parseXml=(xml)=>{const documentXml=new DOMParser().parseFromString(xml,"application/xml");if(documentXml.querySelector("parsererror"))throw new Error("A estrutura XML da planilha está inválida.");return documentXml;};
    const sharedXml=files.get("xl/sharedStrings.xml");
    const shared=sharedXml?Array.from(parseXml(sharedXml).getElementsByTagName("si"),item=>Array.from(item.getElementsByTagName("t"),text=>text.textContent||"").join("")):[];
    const sheet=parseXml(files.get(sheetName));
    const rows=[];
    for(const rowNode of sheet.getElementsByTagName("row")) {
      const row=[];
      for(const cell of rowNode.getElementsByTagName("c")) {
        const letters=(cell.getAttribute("r")||"").replace(/\d/g,"");
        const column=letters.split("").reduce((value,letter)=>value*26+letter.charCodeAt(0)-64,0)-1;
        const type=cell.getAttribute("t");
        const value=cell.getElementsByTagName("v")[0]?.textContent||"";
        const inline=cell.getElementsByTagName("t")[0]?.textContent;
        row[column]=type==="s"?shared[Number(value)]||"":type==="inlineStr"?inline||"":value;
      }
      if(row.some(value=>value!==undefined&&value!=="")) rows.push(row.map(value=>value??""));
    }
    return rows;
  }
  function prepareImportRows(rows,file) {
    if(rows.length<2) { toast("A planilha precisa conter cabeçalho e pelo menos uma linha de dados.",true); return; }
    const normalize=(value)=>String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g," ").trim();
    const headers=rows[0].map((header)=>String(header).trim());
    const normalized=headers.map(normalize);
    const mapping={};
    importFields.forEach((field)=>{
      let column=normalized.findIndex((header)=>field.aliases.some((alias)=>header===normalize(alias)));
      if(column<0)column=normalized.findIndex((header)=>field.aliases.some((alias)=>header.includes(normalize(alias))));
      mapping[field.key]=column;
    });
    state.importedRows={file:file.name,size:file.size,rawRows:rows,headers,mapping,stage:2};
    render();
    toast("Arquivo carregado. Confirme o mapeamento das colunas.");
  }
  function reviewImport() {
    const imported=state.importedRows;
    if(!imported||imported.stage!==2)return;
    const mapping={...imported.mapping};
    $$(".mapping-field select").forEach((select)=>{mapping[select.dataset.importField]=Number(select.value);});
    const required=importFields.filter(field=>field.required);
    const missing=required.filter(field=>mapping[field.key]<0);
    if(missing.length){toast(`Associe os campos obrigatórios: ${missing.map(field=>field.label).join(" e ")}.`,true);return;}
    if(required.some((field,index)=>required.slice(index+1).some(other=>mapping[field.key]===mapping[other.key]))){toast("Cliente e Código do PDV precisam estar em colunas diferentes.",true);return;}
    const read=(cells,key,fallback="")=>mapping[key]>=0?String(cells[mapping[key]]??fallback).trim():fallback;
    const normalize=(value)=>String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim();
    const statusValues=new Map(["Ativa","Atenção","Inoperante","Aguardando primeira venda","Sem ADQ"].map(value=>[normalize(value),value]));
    const suppliers=new Map(Object.keys(state.settings.suppliers).map(value=>[normalize(value),value]));
    const source=imported.rawRows.slice(1).map((cells,index)=>{
      const amount=read(cells,"tpv","0").replace(/[^\d,.-]/g,"");
      const normalizedAmount=amount.includes(",")?amount.replace(/\./g,"").replace(",","."):amount;
      const statusInput=read(cells,"status","Aguardando primeira venda");
      const supplierInput=read(cells,"supplier","Paguebank");
      const teamInput=read(cells,"team","Mesa 1");
      const matchedTeam=teams.find(team=>normalize(team.name)===normalize(teamInput));
      const parsedAdqs=Number.parseInt(read(cells,"adqs","1").replace(/[^\d-]/g,""),10);
      return {
        name:read(cells,"name"), code:read(cells,"code"), city:read(cells,"city","Não informado")||"Não informado",
        owner:read(cells,"owner","Sem responsável")||"Sem responsável", team:matchedTeam?.name||"Mesa 1",
        status:statusValues.get(normalize(statusInput))||"Aguardando primeira venda",
        supplier:suppliers.get(normalize(supplierInput))||"Paguebank",
        adqs:Number.isFinite(parsedAdqs)?Math.max(0,parsedAdqs):0,
        tpv:Math.max(0,Number(normalizedAmount)||0),
        last:read(cells,"last","Sem uso")||"Sem uso", line:index+2
      };
    });
    const data=source.filter(row=>row.code&&row.name);
    if(!data.length){toast("Não encontramos linhas válidas. Revise as colunas de Cliente e Código do PDV.",true);return;}
    imported.mapping=mapping;
    imported.rows=data;
    imported.valid=data.length;
    imported.total=source.length;
    imported.rejected=source.length-data.length;
    imported.rejectedRows=source.filter(row=>!row.code||!row.name).map(row=>({
      line:row.line,
      reasons:[...(!row.name?["Nome"]:[]),...(!row.code?["Código do PDV"]:[])]
    }));
    imported.stage=3;
    render();
    toast(`${countLabel(data.length,"registro válido","registros válidos")}; confira a prévia antes de confirmar.`);
  }
  function parseImportFile(file) {
    if(!file||!/\.(csv|xlsx)$/i.test(file.name)){toast("Formato não suportado. Selecione um arquivo CSV ou XLSX.",true);return;}
    if(file.size>50*1024*1024){toast("O arquivo excede o limite de 50 MB.",true);return;}
    const reader=new FileReader();
    reader.onerror=()=>toast("Não foi possível ler o arquivo selecionado.",true);
    reader.onload=async()=>{
      try {
        const rows=file.name.toLowerCase().endsWith(".xlsx")?await readXlsxRows(reader.result):csvToRows(String(reader.result||"").replace(/^\uFEFF/,""));
        prepareImportRows(rows,file);
      } catch(error) {
        toast(error instanceof Error?error.message:"Falha ao processar o arquivo.",true);
      }
    };
    if(file.name.toLowerCase().endsWith(".xlsx"))reader.readAsArrayBuffer(file);else reader.readAsText(file);
  }
  function confirmImport() {
    if(!state.importedRows||state.importedRows.stage!==3){toast("Revise e valide os dados antes de confirmar a importação.",true);return;}
    const imported=state.importedRows;
    const before=clientRows();
    const known=new Set(before.map(c=>c.code));
    const newCount=imported.rows.filter(row=>!known.has(row.code)).length;
    const updatedCount=imported.valid-newCount;
    const merged=new Map(before.map((client)=>[client.code,client]));
    imported.rows.forEach((row)=>merged.set(row.code,{...merged.get(row.code),...row}));
    state.extraClients=[...merged.values()];
    save("rvadq.clients",state.extraClients);
    const now=new Date().toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"});
    state.protocols.unshift({name:imported.file,detail:`${now} · ${countLabel(imported.total,"linha","linhas")}`,status:`${countLabel(updatedCount,"atualizado","atualizados")} · ${countLabel(newCount,"novo","novos")}${imported.rejected?` · ${countLabel(imported.rejected,"erro","erros")}`:""}`});
    save("rvadq.protocols",state.protocols);
    addAudit("Importação concluída",`${imported.file} · ${countLabel(newCount,"novo registro","novos registros")}, ${countLabel(updatedCount,"registro atualizado","registros atualizados")} e ${countLabel(imported.rejected||0,"linha rejeitada","linhas rejeitadas")}`);
    imported.newCount=newCount;
    imported.updatedCount=updatedCount;
    imported.stage=4;
    imported.rows=[];
    imported.rawRows=[];
    toast(`Importação concluída: ${countLabel(newCount,"novo cliente","novos clientes")} e ${countLabel(updatedCount,"registro atualizado","registros atualizados")}.`);
    render();
  }
  function exportCsv(filename, headers, rows) {
    const safeCell=(value)=>`"${String(value??"").replace(/"/g,'""')}"`;
    const content=[headers,...rows].map(row=>row.map(safeCell).join(";")).join("\r\n");
    const blob=new Blob(["\uFEFF"+content],{type:"text/csv;charset=utf-8"});
    const link=document.createElement("a");
    link.href=URL.createObjectURL(blob); link.download=filename; document.body.append(link); link.click(); link.remove(); URL.revokeObjectURL(link.href);
    toast(`${filename} exportado com sucesso.`);
  }
  function exportClients() {
    exportCsv("carteira-rv-digital.csv",["Cliente","Código PDV","Cidade","Responsável","Mesa","ADQs","Situação","Última transação","TPV","Fornecedor"],filteredClients().map(c=>[c.name,c.code,c.city,c.owner,c.team,c.adqs,c.status,c.last,c.tpv,c.supplier]));
  }
  function exportProduction() {
    exportCsv("producao-rv-digital.csv",["Responsável","Mesa","Clientes na carteira","Instaladas","Ativadas","Meta","Taxa de ativação"],sellers.filter(p=>state.team==="all"||p.team===state.team).map(p=>[p.name,p.team,p.clients,p.installs,p.activated,p.target,`${(p.activated/p.installs*100).toFixed(1)}%`]));
  }
  function exportAudit() { exportCsv("auditoria-rv-digital.csv",["Evento","Detalhes","Usuário","Data"],[...state.auditExtra,...auditSeed].map(e=>[e.title,e.detail,e.user,e.time])); }
  function openProtocolModal() {
    showModal("Histórico de protocolos","Importações processadas nesta operação.",`<div class="protocol-list">${state.protocols.map(protocolRow).join("")}</div>`,`<button class="button button-outline" data-action="close-modal">Fechar</button>`);
  }
  function saveSettings() {
    const attention=Number($("#attention-days").value), inactive=Number($("#inactive-days").value), target=Number($("#monthly-target").value);
    if(!Number.isInteger(attention)||attention<1||attention>90||!Number.isInteger(inactive)||inactive<=attention||inactive>365||!Number.isInteger(target)||target<1) { toast("Revise os valores: Atenção deve ser de 1–90 dias, Inoperante maior que Atenção, e meta acima de zero.",true); return; }
    const old=state.settings;
    const suppliers={...state.settings.suppliers};
    $$(".supplier-toggle").forEach(toggle=>suppliers[toggle.dataset.supplier]=toggle.checked);
    state.settings={attentionDays:attention,inactiveDays:inactive,approvedOnly:$("#approved-only").checked,monthlyTarget:target,suppliers};
    save("rvadq.settings",state.settings);
    addAudit("Configurações atualizadas",`Limites de inatividade ${old.attentionDays} → ${attention} dias; meta ${old.monthlyTarget} → ${target} ADQs.`);
    toast("Configurações salvas neste dispositivo.");
    render();
  }
  function openTeamDetail(teamName) {
    const team=teams.find(item=>item.name===teamName);
    if(!team)return;
    const people=sellers.filter(item=>item.team===teamName);
    showModal(`${teamName} · ${team.supervisor}`,"Painel resumido da equipe.",`<div class="metric-strip">${metric("Clientes ativos",String(team.clients),"Na carteira")}${metric("TPV no mês",fmtMoney(team.tpv),"Competência atual")}${metric("Taxa de ativação",`${team.activation}%`,"ADQs instaladas")}${metric("Vendedores",String(people.length),"Equipe ativa")}</div><div class="rank-list">${people.map(p=>`<div class="rank-row"><span class="person-avatar">${p.initials}</span><span class="rank-person"><span><strong>${p.name}</strong><small>${p.clients} clientes · ${p.installs} instaladas</small></span></span><span class="rank-metric"><strong>${p.activated} ativadas</strong></span></div>`).join("")}</div>`,`<button class="button button-outline" data-action="close-modal">Fechar</button>`,true);
  }
  function openSellerDetail(name) {
    const person=sellers.find(item=>item.name===name);
    if(!person)return;
    showModal(person.name,`${person.team} · carteira comercial`, `<div class="detail-grid"><div class="detail-item"><span>CLIENTES NA CARTEIRA</span><strong>${person.clients}</strong></div><div class="detail-item"><span>ADQs INSTALADAS</span><strong>${person.installs}</strong></div><div class="detail-item"><span>ADQs ATIVADAS</span><strong>${person.activated}</strong></div><div class="detail-item"><span>META DA COMPETÊNCIA</span><strong>${person.target}</strong></div><div class="detail-item"><span>TAXA DE ATIVAÇÃO</span><strong>${(person.activated/person.installs*100).toFixed(1)}%</strong></div><div class="detail-item"><span>PROGRESSO DA META</span><strong>${Math.round(person.activated/person.target*100)}%</strong></div></div>`,`<button class="button button-outline" data-action="close-modal">Fechar</button>`); 
  }
  function closeSidebar() { $("#sidebar").classList.remove("open"); $("#sidebar-scrim").classList.remove("visible"); }
  function eventAction(target) {
    const action=target.closest("[data-action]")?.dataset.action;
    if(!action) return false;
    const element=target.closest("[data-action]");
    if(action==="close-modal") closeModal();
    else if(action==="backdrop-close"&&target===element) closeModal();
    else if(action==="add-client") clientForm();
    else if(action==="edit-client") { const client=clientRows().find(c=>c.code===element.dataset.code); closeModal(); clientForm(client); }
    else if(action==="save-client") {
      const form=$("#client-form"); if(!form.reportValidity()) return true;
      const data=Object.fromEntries(new FormData(form).entries());
      const existing=clientRows().find(c=>c.code===element.dataset.code);
      const client={...existing,...data,adqs:Number(data.adqs)||0,tpv:existing?.tpv||0,last:existing?.last||"Sem uso",supplier:data.supplier||"Paguebank"};
      if(existing){state.extraClients=[...state.extraClients.filter(c=>c.code!==client.code),client];addAudit("Cadastro de cliente atualizado",`${client.code} · ${client.name}`);}
      else {state.extraClients.unshift(client);addAudit("Cliente cadastrado",`${client.code} · ${client.name}`);}
      save("rvadq.clients",state.extraClients); closeModal(); toast("Cadastro salvo com sucesso."); render();
    }
    else if(action==="client-detail") customerDetail(element.dataset.code);
    else if(action==="export-clients") exportClients();
    else if(action==="export-production") exportProduction();
    else if(action==="export-audit") exportAudit();
    else if(action==="export-health") exportCsv("saude-da-base-rv-digital.csv",["Cliente","Código PDV","Cidade","Responsável","Situação"],clientRows().map(c=>[c.name,c.code,c.city,c.owner,c.status]));
    else if(action==="page"){state.page=Math.max(1,Math.min(Math.ceil(filteredClients().length/state.pageSize),state.page+Number(element.dataset.direction)));render();}
    else if(action==="import"||action==="choose-file") { if(state.route!=="imports") navigate("imports"); window.setTimeout(()=>$("#import-file")?.click(),50); }
    else if(action==="review-import") reviewImport();
    else if(action==="reset-import"){state.importedRows=null;render();}
    else if(action==="confirm-import") confirmImport();
    else if(action==="protocols") openProtocolModal();
    else if(action==="save-settings") saveSettings();
    else if(action==="team-detail") openTeamDetail(element.dataset.team);
    else if(action==="seller-detail") openSellerDetail(element.dataset.seller);
    else if(action==="manage-teams") showModal("Estrutura de equipes","Supervisores e vendedores da operação.",`<div class="rank-list">${teams.map(team=>`<div class="rank-row"><span class="person-avatar">${initials(team.supervisor)}</span><span class="rank-person"><span><strong>${team.name}</strong><small>Supervisor: ${team.supervisor}</small></span></span><span class="rank-metric"><strong>${team.clients} clientes</strong><span>${team.activation}% ativação</span></span></div>`).join("")}</div>`,`<button class="button button-outline" data-action="close-modal">Fechar</button>`);
    else if(action==="add-supplier") {
      showModal("Adicionar fornecedor","Adicione uma adquirente reconhecida nos arquivos CSV.",`<form id="supplier-form"><label class="form-field">Nome do fornecedor<input name="supplier" required maxlength="40" placeholder="Ex.: Nova adquirente"></label></form>`,`<button class="button button-outline" data-action="close-modal">Cancelar</button><button class="button button-green" data-action="save-supplier">Adicionar</button>`);
    }
    else if(action==="save-supplier") {
      const form=$("#supplier-form"); if(!form.reportValidity()) return true;
      const name=new FormData(form).get("supplier").trim();
      if(!name){toast("Informe o nome do fornecedor.",true);return true;}
      if(state.settings.suppliers[name]!==undefined){toast("Este fornecedor já existe.",true);return true;}
      state.settings.suppliers[name]=true; save("rvadq.settings",state.settings); closeModal(); render(); toast(`Fornecedor ${name} adicionado.`);
    }
    else if(action==="kpi-filter") {
      const map={"Aguardando uso":"Aguardando primeira venda","Inoperantes":"Inoperante","Múltiplas ADQs":"Múltiplas ADQs","Clientes na base":"Todos","Com ADQ":"Com ADQ"};
      state.portfolioFilter=map[element.dataset.kpi]||"Todos"; navigate("portfolio");
    }
    return true;
  }
  document.addEventListener("click",(event)=>{
    const target=event.target;
    if(eventAction(target)) return;
    const routeTarget=target.closest("[data-route-to]");
    if(routeTarget){event.preventDefault();location.hash=`#/${routeTarget.dataset.routeTo}`;navigate(routeTarget.dataset.routeTo);return;}
    const portfolioFilter=target.closest("[data-portfolio-filter]");
    if(portfolioFilter){state.portfolioFilter=portfolioFilter.dataset.portfolioFilter;state.page=1;render();return;}
    const nav=target.closest("[data-route]");
    if(nav){event.preventDefault();location.hash=`#/${nav.dataset.route}`;navigate(nav.dataset.route);return;}
    if(target.closest("#more-filters")){$("#filter-popover").classList.toggle("hidden");return;}
    if(!target.closest("#filter-popover"))$("#filter-popover").classList.add("hidden");
    if(target.closest("#mobile-menu")){$("#sidebar").classList.add("open");$("#sidebar-scrim").classList.add("visible");return;}
    if(target.closest("#sidebar-scrim"))closeSidebar();
    if(target.closest("#notifications-button"))toast("Você está em dia com as notificações.");
    if(target.closest("#workspace-switch"))toast("Workspace atual: Operação Brasil.");
    if(target.closest("#profile-button")||target.closest("#topbar-user"))toast("Sessão ativa · Administração.");
  });
  document.addEventListener("change",(event)=>{
    const target=event.target;
    if(target.matches("[data-import-field]")){
      const imported=state.importedRows;
      if(imported?.stage===2){
        const mapping={...imported.mapping};
        $$(".mapping-field select").forEach(select=>mapping[select.dataset.importField]=Number(select.value));
        $("#mapping-sample-values").innerHTML=renderMappingSample(imported,mapping);
      }
    }
    else if(target.id==="team-filter"||target.id==="table-team"){state.team=target.value;state.page=1;render();}
    else if(target.id==="date-filter"){state.period=target.value;toast(target.options[target.selectedIndex].text+" selecionado.");}
    else if(target.id==="supplier-filter"){state.supplier=target.value;state.page=1;render();}
    else if(target.id==="status-filter"){state.status=target.value;state.page=1;render();}
    else if(target.id==="import-file"&&target.files?.[0])parseImportFile(target.files[0]);
    else if(target.id==="month-filter"){toast(`${target.value} selecionado.`);}
    else if(target.classList.contains("supplier-toggle")){const name=target.dataset.supplier;state.settings.suppliers[name]=target.checked;save("rvadq.settings",state.settings);addAudit("Fornecedor atualizado",`${name} ${target.checked?"ativado":"desativado"}`);toast(`Fornecedor ${target.checked?"ativado":"desativado"}.`);}
  });
  document.addEventListener("input",(event)=>{
    if(event.target.id==="client-search"){state.search=event.target.value;state.page=1;const cursor=event.target.selectionStart;render();const next=$("#client-search");next?.focus();next?.setSelectionRange(cursor,cursor);}
    if(event.target.id==="audit-search"){state.search=event.target.value;render();const next=$("#audit-search");next?.focus();next?.setSelectionRange(state.search.length,state.search.length);}
  });
  document.addEventListener("dragover",(event)=>{if(event.target.closest("#drop-zone")){event.preventDefault();$("#drop-zone").classList.add("dragover");}});
  document.addEventListener("dragleave",(event)=>{if(event.target.closest("#drop-zone"))$("#drop-zone").classList.remove("dragover");});
  document.addEventListener("drop",(event)=>{const zone=event.target.closest("#drop-zone");if(!zone)return;event.preventDefault();zone.classList.remove("dragover");if(event.dataTransfer.files[0])parseImportFile(event.dataTransfer.files[0]);});
  document.addEventListener("keydown",(event)=>{if(event.key==="Escape"){closeModal();closeSidebar();$("#filter-popover").classList.add("hidden");}if(event.key==="Enter"&&event.target.id==="client-search")event.preventDefault();});
  $("#clear-filters").addEventListener("click",()=>{state.team="all";state.supplier="all";state.status="all";state.portfolioFilter="Todos";state.search="";state.page=1;render();toast("Filtros limpos.");});
  $("#sidebar-scrim").addEventListener("click",closeSidebar);
  $("#today-label").textContent="SEGUNDA-FEIRA, 02 DE NOVEMBRO DE 2026";
  render();
  if(location.hash.startsWith("#/")) navigate(location.hash.slice(2));
  window.addEventListener("hashchange",()=>{const route=location.hash.slice(2);if(route&&route!==state.route)navigate(route);});
})();
