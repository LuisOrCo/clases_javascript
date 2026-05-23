// ─────────────────────────────────────────────────────────────────────────────
// EJERCICIO 5 — El Club de los Nombres Únicos (Sets)
// ─────────────────────────────────────────────────────────────────────────────
// Objetivo: Eliminar duplicados automáticamente usando Set.
// Tarea: Dada la lista ["Ana","Luis","Ana","Jose","Luis","Maria"],
//        usa un Set para conservar solo los nombres únicos y
//        conviértelo de nuevo a Array.

const nombres = ["Ana","Luis","Ana","Jose","Luis","Maria"]

let nuevoArreglo = [...new Set(nombres)]

// los corchetes y los puntos es para que el Set() sea un arreglo y no un objeto

console.log(nuevoArreglo)