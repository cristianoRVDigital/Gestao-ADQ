# RV Digital — Gestão de ADQ

Dashboard demonstrativo de gestão comercial construído com HTML, CSS e JavaScript puros. Não requer build, servidor de aplicação ou dependências de runtime.

## Executar localmente

Abra `index.html` no navegador ou sirva a pasta com qualquer servidor HTTP estático.

## Publicar

- **Netlify:** publique a pasta do projeto como site estático; não há comando de build nem diretório de saída separado.
- **GitHub Pages:** publique a raiz do repositório. A navegação usa fragmentos (`#/portfolio`) e funciona sem configuração de fallback para rotas.

## Recursos demonstrativos

- Painel executivo, equipes, carteira, produção, importações, auditoria, configurações e saúde da base.
- Pesquisa e filtros de clientes, cadastro local e detalhes de PDV.
- Importação de CSV/XLSX em etapas reais de mapeamento de colunas, validação, prévia e confirmação; registros e configurações são guardados no `localStorage` do navegador.
- Exportação CSV de carteira, produção, auditoria e diagnóstico.
- Layout responsivo para desktop, tablet e celular.

Os dados são demonstrativos e ficam no navegador atual. Uma operação multiusuário ou sincronização entre dispositivos requer uma API e um banco de dados.
