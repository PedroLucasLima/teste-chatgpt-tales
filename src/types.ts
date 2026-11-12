export type Modalidade = 'Mostra Nacional' | 'Mostra de Extensão';
export interface Projeto { id: string; titulo: string; modalidade: Modalidade; area_tematica: string; data: string; inicio: string; fim: string; formato: string; local: string; fontes: { arquivo: string; pagina: number }[]; }
export interface Notas { criatividade: number; clareza: number; relevancia: number; demonstracao: number; }
export interface ResultadoRanking { id_projeto: string; titulo: string; modalidade: Modalidade; media: number; quantidade: number; posicao: number; }