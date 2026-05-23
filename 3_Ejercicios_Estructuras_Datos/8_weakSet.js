// ─────────────────────────────────────────────────────────────────────────────
// EJERCICIO 8 — Registro de Mensajes Leídos (WeakSet)
// ─────────────────────────────────────────────────────────────────────────────
// Objetivo: Almacenar hechos sobre objetos sin impedir su eliminación de memoria.
// Tarea: Crea un array de objetos de mensajes.
//        Usa un WeakSet para marcar algunos como "leídos".
//        Crea una función que verifique si un mensaje está leído.

let mensajes = [
    {texto: "Hola"},
    {texto: "¿Cómo estás?"},
    {texto: "Nos vemos"}
];

let mensajesLeidos = new WeakSet();

mensajesLeidos.add(mensajes[0]);
mensajesLeidos.add(mensajes[2]);

function estaLeido(mensaje){
    return mensajesLeidos.has(mensaje);
}

console.log(estaLeido(mensajes[0]));
console.log(estaLeido(mensajes[1]));