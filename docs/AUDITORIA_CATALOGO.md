# Auditoria do catálogo v1.0

- Fonte de dados: `src/data/catalogo.json`, extraído sem reescrita do kit oficial recebido.
- Integridade do pacote: hashes SHA-256 dos nove arquivos do kit conferidos; todos `OK`.
- Validador oficial: `scripts-validar-catalogo.mjs` executado com Node.js; resultado `PASS`.
- Contagem: 46 projetos únicos; 24 Mostra Nacional (`NAC-001` a `NAC-024`) e 22 Mostra de Extensão (`EXT-001` a `EXT-022`).
- Campos obrigatórios: id, título, modalidade, área temática, data, início, fim, formato, local e fontes.
- Grafia/acentuação: títulos exibidos diretamente do JSON; somente a função de busca normaliza acentos.
- PDFs: presentes no kit (`fontes/trabalhos-mostra-nacional.pdf` e `fontes/trabalhos-mostra-nacional-extensao.pdf`). O catálogo já contém referência de arquivo e página por registro; a revisão visual independente de dez registros ainda precisa ser feita por uma pessoa da equipe.
- Registros `AGROSENTINELA` e `TRAÇO VIVO`: mantidos como projetos distintos conforme a especificação, sem destaque ou peso especial.
- Dados ausentes: nenhum resumo, autor, campus, imagem ou URL individual foi inventado.