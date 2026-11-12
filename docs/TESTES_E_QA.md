# Testes e QA

## Automatizados
- `npm run validate:catalog`: validador oficial de integridade do JSON.
- `npm run typecheck`: verificação TypeScript.
- `npm test`: testes de contagem, IDs, campos, busca acento-insensível, cálculo ponderado, validação de escala e regra de ranking.
- `npm run build`: build Vite para publicação estática.

## Casos manuais obrigatórios antes de homologar
1. Com código de teste habilitado, submeter quatro notas válidas e confirmar recibo + linha em `Avaliacoes`.
2. Repetir mesmo código e projeto: servidor deve rejeitar sem segunda linha.
3. Mesmo código em outro projeto: servidor deve aceitar.
4. Duas requisições simultâneas mesmo código/projeto: somente uma linha válida.
5. Código inválido/desabilitado, projeto inexistente, nota decimal, vazia, 0 e 6: rejeitar.
6. Ranking separado por modalidade, mínimo de cinco votos, média e desempate por quantidade e ID.
7. Conferir que endpoint público não retorna hashes, tokens, linhas de avaliação ou dados pessoais.
8. Testar larguras 320, 375, 768 e 1280 px, navegação por teclado, foco, contraste e mensagens de erro.
9. QA independente: outra pessoa deve tentar quebrar unicidade, revisar visualmente pelo menos dez projetos contra os PDFs e testar em smartphone.

## Estado real desta entrega
- Validação oficial do catálogo e SHA-256 do kit: PASS.
- Testes de domínio e build: serão executados localmente antes do commit.
- Teste integrado com Sheets, voto real, recibo e readback: BLOCKED até a equipe criar/autorizar a planilha e implantar o Apps Script.
- Deploy GitHub Pages: BLOCKED até aprovação expressa para publicar e configuração de Pages no repositório.
- QA independente e dispositivo físico: NOT_RUN.