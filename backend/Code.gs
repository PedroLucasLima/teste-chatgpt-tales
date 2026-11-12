/** Universo IF Avalia — Google Apps Script backend (v1.0)
 * Crie uma planilha privada e cole este arquivo no projeto Apps Script associado.
 * Nunca publique as abas Codigos ou Avaliacoes.
 */
const CATALOG_JSON = [{"id":"EXT-001","titulo":"CONSTRUINDO UMA COMUNIDADE DE LEITORES: A Leitura Como Meio De Inclusão De Pessoas Em Processo De Reintegração Social Da ACBS","modalidade":"Mostra de Extensão"},{"id":"EXT-002","titulo":"PROJETO DE EXTENSÃO: LEITURA E CULTURA: CONECTANDO SABERES NAS TRILHAS DO CONHECIMENTO","modalidade":"Mostra de Extensão"},{"id":"EXT-003","titulo":"II Jornada Da Consciência Negra: Identidade, História E Oralidade Dos Povos Negros","modalidade":"Mostra de Extensão"},{"id":"EXT-004","titulo":"VIAJANDO NO UNIVERSO DA LEITURA: Projeto De Mediação Literária Para Os Filhos Das Estudantes Do PROEJA.","modalidade":"Mostra de Extensão"},{"id":"EXT-005","titulo":"IDENTIDADE NEGRA: Experiências De Um Projeto De Extensão No Instituto Federal Do Maranhão - Campus Carolina","modalidade":"Mostra de Extensão"},{"id":"EXT-006","titulo":"III NEABI EM AÇÃO: SABERES E EDUCAÇÃO ANTIRRACISTA NAS ESCOLAS:\"NEGRITUDE E EDUCAÇÃO: LUTA POLÍTICA E VALORIZAÇÃO DA CULTURA NEGRA\"","modalidade":"Mostra de Extensão"},{"id":"EXT-007","titulo":"TECNOARTE: Robótica, Programação E Cultura Por Meio De Mangás Educativos","modalidade":"Mostra de Extensão"},{"id":"EXT-008","titulo":"IV SIMPÓSIO DE BIOLOGIA","modalidade":"Mostra de Extensão"},{"id":"EXT-009","titulo":"A MEDITAÇÃO COMO ESTRATÉGIA PEDAGÓGICA NO DESENVOLVIMENTO DE HABILIDADES COGNITIVAS E SOCIOEMOCIONAIS COM CRIANÇAS NO PROJETO ROBIN HOOD.","modalidade":"Mostra de Extensão"},{"id":"EXT-010","titulo":"CIÊNCIA CIDADÃ NA ESCOLA: BIOMONITORAMENTO DO RIO TOCANTINS COMO FERRAMENTA DE EDUCAÇÃO","modalidade":"Mostra de Extensão"},{"id":"EXT-011","titulo":"ConsCIÊNCIA CLIMÁTICA: EDUCAÇÃO PARA MUDANÇAS CLIMÁTICAS EM ESCOLAS PÚBLICAS DE VIANA-MA","modalidade":"Mostra de Extensão"},{"id":"EXT-012","titulo":"IFMA DE PORTAS ABERTAS 2.0: CONECTANDO JOVENS DA BAIXADA MARANHENSE À EDUCAÇÃO PROFISSIONAL E TECNOLÓGICA","modalidade":"Mostra de Extensão"},{"id":"EXT-013","titulo":"EDUCAÇÃO EM SAÚDE E EMPODERAMENTO FEMININO: PROMOVENDO PRÁTICAS DE HIGIENE ÍNTIMA E AUTOESTIMA ENTRE ESTUDANTES DA REDE PÚBLICA MUNICIPAL","modalidade":"Mostra de Extensão"},{"id":"EXT-014","titulo":"Projeto De Extensão: Jiu-Jitsu Para Todas: Mulheres Em Movimento","modalidade":"Mostra de Extensão"},{"id":"EXT-015","titulo":"PLATEIA IFMA: FORMAÇÃO DE PLATEIA E VALORIZAÇÃO DAS MODINHAS BRASILEIRAS EM AÇAILÂNDIA – MA","modalidade":"Mostra de Extensão"},{"id":"EXT-016","titulo":"PARTIU REAGIR: A QUÍMICA EM AÇÃO COM OS ALUNOS DO PARTIU IF DO IFMA CAMPUS TIMON","modalidade":"Mostra de Extensão"},{"id":"EXT-017","titulo":"CURSO DE IDIOMAS BÁSICO I EM LÍNGUA ESTRANGEIRA (INGLÊS E ESPANHOL)","modalidade":"Mostra de Extensão"},{"id":"EXT-018","titulo":"Extensão Universitária Em Redes De Computadores Para Laboratórios Escolares E Comunidades Tradicionais","modalidade":"Mostra de Extensão"},{"id":"EXT-019","titulo":"Setembro Azul: Celebrando A Semana Do Surdo No IFMA - Campus Barra Do Corda","modalidade":"Mostra de Extensão"},{"id":"EXT-020","titulo":"SANTA FILOMENA VIVA: RESGATE CULTURAL E AÇÕES AMBIENTAIS PARTICIPATIVAS","modalidade":"Mostra de Extensão"},{"id":"EXT-021","titulo":"Inclusão Digital No Ensino De Ciências Para Alunos Do 9º Ano Do Ensino Fundamental Em Comunidades Afrodescendentes De São Luís","modalidade":"Mostra de Extensão"},{"id":"EXT-022","titulo":"EVENTO GEEK ARENA: PROMOVENDO A CULTURA GEEK E TECNOLÓGICA ENTRE A COMUNIDADE ACADÊMICA E A SOCIEDADE EM GERAL","modalidade":"Mostra de Extensão"},{"id":"NAC-001","titulo":"TRANSFERÊNCIA ENTRE DESENVOLVIMENTO AO TESTE E PERFIL DE ERROS NO RECONHECIMENTO MULTIRRÓTULO DE EMOÇÕES EM PT-BR","modalidade":"Mostra Nacional"},{"id":"NAC-002","titulo":"Flora: Desenvolvimento Inicial De Um Sistema Adaptativo Para Integração Humano-Planta","modalidade":"Mostra Nacional"},{"id":"NAC-003","titulo":"EXTRAÇÃO DE NANOCELULOSE A PARTIR DA FIBRA DO AÇAÍ","modalidade":"Mostra Nacional"},{"id":"NAC-004","titulo":"AGROSENTINELA: DESENVOLVIMENTO E AVALIAÇÃO EXPLORATÓRIA DE UM PROTÓTIPO AUDITÁVEL PARA CONTAGEM DE BOVINOS EM VÍDEO","modalidade":"Mostra Nacional"},{"id":"NAC-005","titulo":"TRAÇO VIVO: INTERAÇÃO CONVERSACIONAL E ANIMAÇÃO EXPRESSIVA DE DESENHOS BIDIMENSIONAIS COM CONTROLE SEMÂNTICO","modalidade":"Mostra Nacional"},{"id":"NAC-006","titulo":"ZEÓLITAS FAU E LTA DERIVADAS DE BIOSSÍLICA MODIFICADAS COM CÉRIO PARA REDUÇÃO ELETROQUÍMICA DE OXIGÊNIO","modalidade":"Mostra Nacional"},{"id":"NAC-007","titulo":"LIPOTALE: RELATO DE IMPLEMENTAÇÃO DE UM JOGO DIGITAL PARA O ENSINO DE BIOQUÍMICA NO ENSINO SUPERIOR","modalidade":"Mostra Nacional"},{"id":"NAC-008","titulo":"A QUÍMICA DOS ALIMENTOS NO COTIDIANO: EXPERIÊNCIA EXTENSIONISTA COM ESTUDANTES DA EDUCAÇÃO DE JOVENS E ADULTOS","modalidade":"Mostra Nacional"},{"id":"NAC-009","titulo":"SÍNTESE E CARACTERIZAÇÃO DE AZUL DA PRÚSSIA PARA APLICAÇÕES FOTOTÉRMICAS","modalidade":"Mostra Nacional"},{"id":"NAC-010","titulo":"DESENVOLVIMENTO E APLICAÇÃO DE UM SISTEMA EMBARCADO INTERATIVO PARA ROBÓTICA EDUCACIONAL NOS ANOS INICIAIS","modalidade":"Mostra Nacional"},{"id":"NAC-011","titulo":"SUSTENTABILIDADE AMBIENTAL EM UMA ESCOLA PÚBLICA DO MARANHÃO: ESTUDO SITUACIONAL E DIAGNÓSTICO","modalidade":"Mostra Nacional"},{"id":"NAC-012","titulo":"IDENTIDADE E PERTENCIMENTO: VIVÊNCIAS AFRO-BRASILEIRAS NA COMUNIDADE QUILOMBOLA DE CAJAZEIRAS EM ITAPECURU-MIRIM – MARANHÃO","modalidade":"Mostra Nacional"},{"id":"NAC-013","titulo":"ATIVIDADE ANTAGONISTA DE Trichoderma Harzianum CONTRA Fusarium Solani: UMA POSSÍVEL ESTRATÉGIA DE BIOCONTROLE DA FUSARIOSE NA CULTURA DA MANDIOCA","modalidade":"Mostra Nacional"},{"id":"NAC-014","titulo":"DESENVOLVIMENTO DE BISCOITO COM FARINHA DE “ARROZ DO BARRO” E AVALIAÇÃO DE SUA ACEITABILIDADE SENSORIAL PARA A ALIMENTAÇÃO ESCOLAR","modalidade":"Mostra Nacional"},{"id":"NAC-015","titulo":"PESCADO NA FEIRA LIVRE: UM DIAGNÓSTICO DAS CONDIÇÕES HIGIÊNICO-SANITÁRIAS DA COMERCIALIZAÇÃO EM BOM JARDIM-MA.","modalidade":"Mostra Nacional"},{"id":"NAC-016","titulo":"INIBIÇÃO FÚNGICA E REDUÇÃO DE AFLATOXINAS POR EXTRATOS VEGETAIS NÃO VOLÁTEIS: REVISÃO INTEGRATIVA","modalidade":"Mostra Nacional"},{"id":"NAC-017","titulo":"ABELHAS NATIVAS DOS LENÇÓIS MARANHENSES: DIVERSIDADE DE FONTES FLORAIS E QUALIDADE MICROBIOLÓGICA DO MEL","modalidade":"Mostra Nacional"},{"id":"NAC-018","titulo":"AS CONTRIBUIÇÕES DE FLORENCE NIGHTINGALE PARA A CONSOLIDAÇÃO DA ENFERMAGEM COMO CIÊNCIA: REVISÃO DE ESCOPO","modalidade":"Mostra Nacional"},{"id":"NAC-019","titulo":"AUTOCUIDADO E SAÚDE SEXUAL NA GESTAÇÃO ADOLESCENTE: RELATO DE EXPERIÊNCIA DE UMA OFICINA EDUCATIVA","modalidade":"Mostra Nacional"},{"id":"NAC-020","titulo":"MEDICAL HELP: SISTEMA DIGITAL PICTOGRÁFICO PARA ACESSIBILIDADE DE ORIENTAÇÕES MEDICAMENTOSAS","modalidade":"Mostra Nacional"},{"id":"NAC-021","titulo":"INTELIGÊNCIA ARTIFICIAL GENERATIVA E PRODUTIVIDADE ACADÊMICA: UM ESTUDO SOBRE O USO DE FERRAMENTAS DE IA POR ESTUDANTES DO IFMA","modalidade":"Mostra Nacional"},{"id":"NAC-022","titulo":"A PRÁTICA TEATRAL INCLUSIVA E O PROTAGONISMO DE MENINAS NA CIÊNCIA, TECNOLOGIA E INOVAÇÃO.","modalidade":"Mostra Nacional"},{"id":"NAC-023","titulo":"PLANETA ÁGUA, SENTIR PARA CUIDAR: RELATO DE EXPERIÊNCIA DE UMA INSTALAÇÃO MULTISSENSORIAL","modalidade":"Mostra Nacional"},{"id":"NAC-024","titulo":"CONEXÃO TENETEHARA: TECNOLOGIA E CULTURA NA VALORIZAÇÃO DA LÍNGUA GUAJAJARA","modalidade":"Mostra Nacional"}];
const TAB = { projetos: 'Projetos', codigos: 'Codigos', avaliacoes: 'Avaliacoes', config: 'Configuracao' };
const MINIMO_RANKING = 5;
function setupInicial() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const projetos = CATALOG_JSON;
  ensureSheet_(ss, TAB.projetos, ['id','titulo','modalidade'], projetos.map(p => [p.id,p.titulo,p.modalidade]));
  ensureSheet_(ss, TAB.codigos, ['hash_codigo','habilitado','observacao'], []);
  ensureSheet_(ss, TAB.avaliacoes, ['id_requisicao','hash_codigo','id_projeto','criatividade','clareza','relevancia','demonstracao','nota_ponderada','timestamp','estado'], []);
  ensureSheet_(ss, TAB.config, ['chave','valor'], [['votacao_aberta','true'],['minimo_ranking',String(MINIMO_RANKING)],['catalogo_versao','1.0']]);
  return 'Abas inicializadas. Adicione códigos com adicionarCodigo("CODIGO") no editor.';
}
function ensureSheet_(ss, name, headers, rows) {
  let sh = ss.getSheetByName(name); if (!sh) sh = ss.insertSheet(name);
  if (sh.getLastRow() === 0) { sh.getRange(1,1,1,headers.length).setValues([headers]); if (rows.length) sh.getRange(2,1,rows.length,headers.length).setValues(rows); sh.setFrozenRows(1); }
}
function adicionarCodigo(codigo) {
  if (!codigo || String(codigo).trim().length < 6) throw new Error('O código deve ter pelo menos 6 caracteres.');
  const sh = SpreadsheetApp.getActive().getSheetByName(TAB.codigos);
  const hash = sha256_(String(codigo).trim());
  if (sh.getLastRow() > 1 && sh.getRange(2,1,sh.getLastRow()-1,1).getValues().flat().includes(hash)) throw new Error('Código já cadastrado.');
  sh.appendRow([hash,true,'']); return 'Código habilitado. Guarde-o em local privado.';
}
function doGet(e) {
  if (e && e.parameter && e.parameter.action === 'app') return HtmlService.createHtmlOutputFromFile('App').setTitle('Universo IF Avalia');
  return json_(getPublicRanking());
}
function doPost(e) {
  try { const payload = JSON.parse((e && e.postData && e.postData.contents) || '{}'); return json_(registrarVoto_(payload)); }
  catch (err) { return json_({ok:false,message:String(err.message || err)}); }
}
function submitVoteInternal(payload) { return registrarVoto_(payload); }
function getPublicRanking() {
  const ss=SpreadsheetApp.getActive(); const sh=ss.getSheetByName(TAB.avaliacoes); const ps=ss.getSheetByName(TAB.projetos);
  if (!sh || !ps) return {ok:true,ranking:[]};
  const projects=ps.getDataRange().getValues().slice(1); const valid=sh.getLastRow()>1?sh.getDataRange().getValues().slice(1).filter(r=>r[9]==='VALIDO'):[];
  const grouped={}; valid.forEach(r=>{const id=r[2]; if(!grouped[id])grouped[id]=[];grouped[id].push(Number(r[7]));});
  const min=Number(getConfig_('minimo_ranking')||MINIMO_RANKING);
  const ranking=projects.map(p=>{const votes=grouped[p[0]]||[];return {id_projeto:p[0],titulo:p[1],modalidade:p[2],media:votes.length?Math.round(votes.reduce((a,b)=>a+b,0)/votes.length*100)/100:0,quantidade:votes.length};}).filter(r=>r.quantidade>=min);
  ranking.sort((a,b)=>a.modalidade.localeCompare(b.modalidade)||b.media-a.media||b.quantidade-a.quantidade||a.id_projeto.localeCompare(b.id_projeto));
  return {ok:true,ranking:ranking};
}
function registrarVoto_(p) {
  const notas=p && p.notas || {}; const id=String(p && (p.projetoId||p.id_projeto) || '').trim(); const codigo=String(p && p.codigo || '').trim();
  if (!codigo || !id) throw new Error('Código e projeto são obrigatórios.');
  const projetoIds=CATALOG_JSON.map(x=>x.id); if(!projetoIds.includes(id)) throw new Error('Projeto inexistente.');
  const keys=['criatividade','clareza','relevancia','demonstracao'];
  keys.forEach(k=>{if(!Number.isInteger(notas[k])||notas[k]<1||notas[k]>5)throw new Error('Notas devem ser números inteiros de 1 a 5.');});
  const nota=Math.round((notas.criatividade*.30+notas.clareza*.30+notas.relevancia*.25+notas.demonstracao*.15)*100)/100;
  const lock=LockService.getScriptLock(); lock.waitLock(20000);
  try {
    const ss=SpreadsheetApp.getActive(); const codes=ss.getSheetByName(TAB.codigos); const votes=ss.getSheetByName(TAB.avaliacoes);
    if(getConfig_('votacao_aberta')!=='true')throw new Error('A avaliação está encerrada.');
    if(!codes||!votes)throw new Error('Planilha ainda não inicializada.');
    const hash=sha256_(codigo); const codeRows=codes.getLastRow()>1?codes.getRange(2,1,codes.getLastRow()-1,3).getValues():[];
    const allowed=codeRows.find(r=>r[0]===hash && (r[1]===true || String(r[1]).toLowerCase()==='true'));
    if(!allowed)throw new Error('Código inválido ou desabilitado.');
    const existing=votes.getLastRow()>1?votes.getRange(2,2,votes.getLastRow()-1,2).getValues():[];
    if(existing.some(r=>r[0]===hash && r[1]===id))throw new Error('Este código já avaliou este projeto.');
    const receipt=Utilities.getUuid(); votes.appendRow([receipt,hash,id,notas.criatividade,notas.clareza,notas.relevancia,notas.demonstracao,nota,new Date(),'VALIDO']);
    SpreadsheetApp.flush();
    const last=votes.getLastRow(); const saved=votes.getRange(last,1,1,10).getValues()[0];
    if(saved[0]!==receipt||saved[1]!==hash||saved[2]!==id)throw new Error('Não foi possível confirmar a gravação.');
    return {ok:true,receipt:receipt};
  } finally { lock.releaseLock(); }
}
function getConfig_(key) { const sh=SpreadsheetApp.getActive().getSheetByName(TAB.config); if(!sh)return ''; const rows=sh.getDataRange().getValues().slice(1); const row=rows.find(r=>r[0]===key); return row?String(row[1]):''; }
function sha256_(value) { return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,value,Utilities.Charset.UTF_8).map(b=>(b<0?b+256:b).toString(16).padStart(2,'0')).join(''); }
function json_(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }
function getProjectOptions() { return CATALOG_JSON.map(p=>({id:p.id,titulo:p.titulo})); }