// ─────────────────────────────────────────────────────────────────────────────
// EJERCICIO 10 — Filtrado y Transformación
// ─────────────────────────────────────────────────────────────────────────────
// Objetivo: Usar métodos iterativos avanzados: filter() y map().
// Tarea: Dado el array [10, 25, 50, 75, 30, 90, 15]:
//   1. filter() → solo los números mayores a 40.
//   2. map()    → multiplicar cada resultado por 2.


const arreglo = [10, 25, 50, 75, 30, 90, 15];

const resultado = arreglo
    .filter(x => x > 40)
    .map(x => x * 2);

console.log(resultado);
