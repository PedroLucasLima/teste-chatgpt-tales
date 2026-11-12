# Configurar Google Sheets + Apps Script

## 1. Criar planilha privada
1. Entre na conta Google da equipe e crie uma planilha nova, privada.
2. Abra **Extensões → Apps Script**.
3. Substitua o conteúdo de `Code.gs` pelo arquivo `backend/Code.gs` deste repositório.
4. Crie um arquivo HTML chamado `App` e cole `backend/App.html`.
5. Salve e execute `setupInicial()` no editor. Autorize os escopos solicitados pelo Google.

A inicialização cria as abas `Projetos`, `Codigos`, `Avaliacoes` e `Configuracao`. A planilha e todas as abas permanecem privadas.

## 2. Criar códigos de avaliação
No editor Apps Script, execute `adicionarCodigo("CODIGO-DE-TESTE-UNICO")` para cada código. O código em texto puro não é salvo; somente SHA-256 fica na aba `Codigos`. Distribua os códigos em canal privado. Não versione códigos de produção.

## 3. Implantação (não realizada automaticamente)
1. **Implantar → Nova implantação → App da Web**.
2. Executar como: proprietário que implantou.
3. Acesso: qualquer pessoa, inclusive anônima, somente se a política institucional permitir e após autorização expressa da equipe.
4. Guarde a URL `/exec`.
5. Para o front-end React, configure `VITE_APPS_SCRIPT_URL` no ambiente de build. O envio via `fetch` pode ser bloqueado por CORS/redirecionamento do ContentService. Não use `no-cors` e não trate uma requisição sem recibo como sucesso.

## 4. Fallback HTML Service
Se a integração Pages ↔ Apps Script falhar, acesse a URL do Web App com `?action=app`. A tela `App.html` usa `google.script.run` para submeter avaliações e ler ranking no mesmo ambiente Apps Script. Isso evita alegar compatibilidade CORS inexistente, mas significa que a tela dinâmica é servida pelo Apps Script, não pelo GitHub Pages.

## 5. Segurança e homologação
- Não compartilhe publicamente a planilha nem as abas `Codigos`/`Avaliacoes`.
- `getPublicRanking()` expõe somente agregados com mínimo de cinco avaliações.
- `LockService` serializa gravações e a chave de unicidade é hash do código + ID do projeto.
- Não habilite `XFrameOptionsMode.ALLOWALL`.
- Teste em modo anônimo e celular: leitura de ranking, voto válido, recibo, readback privado da linha e bloqueio do segundo voto para o mesmo par código/projeto; confirme que o mesmo código pode avaliar outro projeto.
- Não utilize códigos de produção até que a equipe e a organização autorizem a demonstração.