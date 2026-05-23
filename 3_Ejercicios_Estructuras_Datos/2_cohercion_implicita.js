// ─────────────────────────────────────────────────────────────────────────────
// EJERCICIO 2 — Conversión Explícita de Tipos
// ─────────────────────────────────────────────────────────────────────────────
// Objetivo: Forzar el cambio de tipo de dato manualmente.
// Tarea: Crea una variable con la cadena "123.45" y conviértela a:
//   1. Número entero  → parseInt()
//   2. Número decimal → parseFloat()
//   3. Booleano       → Boolean()

let numero = "123.45"

console.log(parseInt(numero))
console.log(parseFloat(numero))
console.log(Boolean(numero))