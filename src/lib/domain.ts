import type { Notas, Projeto, ResultadoRanking } from '../types';
export const PESOS = { criatividade: 0.30, clareza: 0.30, relevancia: 0.25, demonstracao: 0.15 } as const;
export function calcularNota(n: Notas): number {
  const values = Object.values(n);
  if (values.length !== 4 || values.some(v => !Number.isInteger(v) || v < 1 || v > 5)) throw new Error('Cada critério deve receber uma nota inteira de 1 a 5.');
  return Math.round((n.criatividade * PESOS.criatividade + n.clareza * PESOS.clareza + n.relevancia * PESOS.relevancia + n.demonstracao * PESOS.demonstracao) * 100) / 100;
}
export function normalizarBusca(value: string): string { return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').trim(); }
export function filtrarProjetos(projetos: Projeto[], query: string, modalidade: string, area: string, data: string): Projeto[] {
  const q = normalizarBusca(query);
  return projetos.filter(p => (!q || normalizarBusca(p.titulo).includes(q) || normalizarBusca(p.id).includes(q)) && (!modalidade || p.modalidade === modalidade) && (!area || p.area_tematica === area) && (!data || p.data === data));
}
export function montarRanking(rows: ResultadoRanking[], modalidade: Projeto['modalidade'], minimo = 5): ResultadoRanking[] {
  return rows.filter(r => r.modalidade === modalidade && r.quantidade >= minimo).sort((a,b) => b.media-a.media || b.quantidade-a.quantidade || a.id_projeto.localeCompare(b.id_projeto)).map((r,i)=>({...r,posicao:i+1}));
}