# Universo IF Avalia

Protótipo acadêmico responsivo para explorar e avaliar 46 projetos das Mostras Nacional e de Extensão do Universo IF 2026. **Não é votação, júri ou premiação oficial do evento.**

## Stack
React + Vite + TypeScript · GitHub Pages · Google Apps Script + Google Sheets.

## Desenvolvimento
```bash
npm install
npm run validate:catalog
npm run typecheck
npm test
npm run build
npm run dev
```

## Configuração
Veja [docs/CONFIGURAR_GOOGLE.md](docs/CONFIGURAR_GOOGLE.md). Sem `VITE_APPS_SCRIPT_URL`, o catálogo funciona, mas o envio de avaliações e o ranking conectado permanecem desabilitados.

## Documentação
- [Backlog](docs/BACKLOG.md)
- [Auditoria do catálogo](docs/AUDITORIA_CATALOGO.md)
- [Testes e QA](docs/TESTES_E_QA.md)
- [Configuração Google](docs/CONFIGURAR_GOOGLE.md)

## Segurança e status
Nunca versionar códigos de avaliação, credenciais ou dados pessoais. A planilha deve permanecer privada. A implantação anônima do Apps Script e a publicação pública dependem de autorização separada. Integração real com Sheets e QA móvel ainda exigem homologação.