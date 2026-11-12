// Validador de integridade do catálogo do MVP (Node.js 20+, sem dependências).
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const data=JSON.parse(readFileSync(resolve(root,'src/data/catalogo.json'),'utf8'));
const projects=data.projetos;
const count=mode=>projects.filter(p=>p.modalidade===mode).length;
assert.equal(data.schema,'universo-if-catalogo-v1.0');
assert.equal(projects.length,46);
assert.equal(count('Mostra Nacional'),24);
assert.equal(count('Mostra de Extensão'),22);
assert.equal(new Set(projects.map(p=>p.id)).size,46);
for(const p of projects){
 for(const k of ['id','titulo','modalidade','area_tematica','data','inicio','fim','formato','local']) assert.ok(typeof p[k]==='string'&&p[k].trim(),`${p.id}: ${k}`);
 assert.ok(Array.isArray(p.fontes)&&p.fontes.length>0,`${p.id}: referência PDF ausente`);
 for(const fonte of p.fontes){assert.match(fonte.arquivo,/\.pdf$/);assert.ok(Number.isInteger(fonte.pagina)&&fonte.pagina>=1&&fonte.pagina<=5);}
}
assert.ok(projects.some(p=>p.id==='NAC-004'&&p.titulo.startsWith('AGROSENTINELA:')));
assert.ok(projects.some(p=>p.id==='NAC-005'&&p.titulo.startsWith('TRAÇO VIVO:')));
console.log('PASS — 46 projetos únicos (24 Mostra Nacional, 22 Mostra de Extensão).');
console.log('PASS — Campos, áreas, datas, local, formato e referências PDF validados.');