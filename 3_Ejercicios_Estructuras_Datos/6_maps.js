// ─────────────────────────────────────────────────────────────────────────────
// EJERCICIO 6 — Diccionario de Usuarios (Maps)
// ─────────────────────────────────────────────────────────────────────────────
// Objetivo: Usar objetos como claves en un Map.
// Tarea: Crea user1 = {id:1} y user2 = {id:2}.
//        Guarda en un Map el rol de cada usuario ("admin" / "editor").
//        Recupera el rol de user1 con .get().

const user1 = {id: 1}
const user2 = {id:2}

let users = new Map()

users.set(user1, "admin")
users.set(user2, "editor")

console.log(users.get(user1))

console.log(user1)