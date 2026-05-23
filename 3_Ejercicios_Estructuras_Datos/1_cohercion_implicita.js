// =============================================================================
//  ESTRUCTURAS DE DATOS EN JAVASCRIPT — 10 Ejercicios Prácticos
//  Ejecuta este archivo con: node ejercicios_js.js
// =============================================================================


// ─────────────────────────────────────────────────────────────────────────────
// EJERCICIO 1 — El Misterio de la Coerción
// ─────────────────────────────────────────────────────────────────────────────
// Objetivo: Comprender cómo JavaScript convierte tipos de forma implícita.
// Tarea: Predice el resultado de las siguientes operaciones y compruébalas.
//
//   "10" + 2       → ¿cadena o número?
//   "10" - 2       → ¿cadena o número?
//   true + 1       → ¿qué vale true como número?
//   100 / "50"     → ¿se puede dividir una cadena?
//   !!0            → doble negación lógica sobre 0
//   100 + null     → ¿qué vale null como número?

console.log("10" + 2) // Esto da 102, lo convierte en una cadena
console.log("10" - 2) // Esto da 8, en la resta convierte la cadena a number
console.log(true + 1) // Esto da 2, el true en operaciones de este estilo actua como un 1
console.log(100/"50") // Esto da 2, aquí la coherción implícita fuerza al 50 a convertirse en un número
console.log(!!0) // Aquí el cero actúa como un false, y la negación de false es true pero la doble negación de false es false
console.log(100+null) // Aquí el null actúa como un 0 
