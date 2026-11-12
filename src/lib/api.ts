import type { Notas, ResultadoRanking } from '../types';
const endpoint = import.meta.env.VITE_APPS_SCRIPT_URL as string | undefined;
export const apiConfigurada = Boolean(endpoint && endpoint.startsWith('https://script.google.com/macros/s/'));
export async function buscarRanking(): Promise<ResultadoRanking[]> {
  if (!apiConfigurada) return [];
  const response = await fetch(`${endpoint}?action=ranking`, { method: 'GET', redirect: 'follow' });
  if (!response.ok) throw new Error('Não foi possível carregar o ranking.');
  const data = await response.json();
  if (!data.ok || !Array.isArray(data.ranking)) throw new Error(data.message || 'Resposta inválida do serviço.');
  return data.ranking;
}
export async function enviarAvaliacao(payload: { codigo: string; projetoId: string; notas: Notas }): Promise<{ recibo: string }> {
  if (!apiConfigurada) throw new Error('Avaliação indisponível: o serviço Google ainda não foi configurado.');
  const response = await fetch(endpoint!, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action: 'vote', ...payload }), redirect: 'follow' });
  if (!response.ok) throw new Error('Falha de comunicação com o serviço de avaliação.');
  const data = await response.json();
  if (!data.ok || !data.receipt) throw new Error(data.message || 'O servidor não confirmou a avaliação.');
  return { recibo: data.receipt };
}