import { describe, expect, it } from 'vitest';
import { calcularNota, filtrarProjetos, montarRanking } from '../src/lib/domain';
import catalogo from '../src/data/catalogo.json';
import type { Projeto } from '../src/types';
const projetos = catalogo.projetos as Projeto[];
describe('catálogo',()=>{
 it('contém 46 projetos únicos: 24 nacionais e 22 de extensão',()=>{expect(projetos).toHaveLength(46);expect(new Set(projetos.map(p=>p.id)).size).toBe(46);expect(projetos.filter(p=>p.modalidade==='Mostra Nacional')).toHaveLength(24);expect(projetos.filter(p=>p.modalidade==='Mostra de Extensão')).toHaveLength(22);});
 it('preserva os campos obrigatórios',()=>{for(const p of projetos)for(const k of ['id','titulo','modalidade','area_tematica','data','inicio','fim','formato','local','fontes'] as const)expect(p[k]).toBeTruthy();});
 it('busca sem diferenciar acentos',()=>{expect(filtrarProjetos(projetos,'consciencia','','','').some(p=>p.id==='EXT-003')).toBe(true);});
});
describe('regras de avaliação',()=>{
 it('calcula a média ponderada do caso de referência como 4,15',()=>{expect(calcularNota({criatividade:4,clareza:5,relevancia:4,demonstracao:3})).toBe(4.15);});
 it('rejeita nota vazia, decimal e fora da escala',()=>{expect(()=>calcularNota({criatividade:0,clareza:5,relevancia:4,demonstracao:3})).toThrow();expect(()=>calcularNota({criatividade:4.5,clareza:5,relevancia:4,demonstracao:3})).toThrow();expect(()=>calcularNota({criatividade:6,clareza:5,relevancia:4,demonstracao:3})).toThrow();});
 it('isola ranking por modalidade e aplica mínimo de cinco votos',()=>{const rows=[{id_projeto:'NAC-001',titulo:'N',modalidade:'Mostra Nacional' as const,media:4.8,quantidade:5,posicao:0},{id_projeto:'EXT-001',titulo:'E',modalidade:'Mostra de Extensão' as const,media:5,quantidade:8,posicao:0},{id_projeto:'NAC-002',titulo:'M',modalidade:'Mostra Nacional' as const,media:5,quantidade:4,posicao:0}];expect(montarRanking(rows,'Mostra Nacional')).toHaveLength(1);expect(montarRanking(rows,'Mostra Nacional')[0].id_projeto).toBe('NAC-001');});
})