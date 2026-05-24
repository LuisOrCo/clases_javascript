
/**
 * EJERCICIOS DE JAVASCRIPT: FUNCIONES E ITERADORES
 * 
 * Instrucciones: Resuelve cada ejercicio debajo del comentario correspondiente.
 */

// 1. Funciones Básicas:
// Crea una función declarada llamada 'saludar' que reciba un nombre como parámetro 
// y devuelva el mensaje "Hola, " seguido del nombre.
// Tu código aquí:


function Saludar(nombre){
    return "Hola "+nombre
}
console.log(Saludar("Lucho Maligno"))


// 2. Funciones Flecha (Arrow Functions):
// Convierte la siguiente función tradicional en una función flecha compacta:
// function duplicar(numero) { return numero * 2; }.
// Tu código aquí:

let duplicar = (numero) => numero * 2

console.log(duplicar(8))


// 3. Parámetros Predeterminados:
// Crea una función llamada 'configurarPerfil' que reciba 'usuario' y 'tema'. 
// Si el 'tema' no se proporciona, debe tener el valor "claro" por defecto.
// Tu código aquí:

function configurarPerfil(usuario, tema = "claro"){
    return usuario, tema
}

console.log(configurarPerfil("Lucho", "Oscuro"))

// 4. Iteradores (forEach):
// Dado el array: const lenguajes = ["JS", "Python", "Java"];
// Usa el método .forEach() para imprimir en consola cada lenguaje seguido de la frase " es genial".
// Tu código aquí:

const lenguajes = ["JS", "Python", "Java"];

lenguajes.forEach(element => {
    console.log(element+" Es genial")
}); 


// 5. Iteradores (map):
// Dado el array: const numeros =;
// Usa .map() para crear un nuevo array llamado 'cuadrados' que contenga el cuadrado de cada número.
// Tu código aquí:

const numeros = [1,2,3,4,5,6,20]

let cuadrados = numeros.map((numero) => {
    return numero*numero
})

console.log(cuadrados)

// 6. Funciones IIFE:
// Crea una Expresión de Función Invocada Inmediatamente (IIFE) que imprima 
// "Conexión segura establecida" en la consola para evitar contaminar el scope global.
// Tu código aquí:

(function (){
    console.log("Conexión segura establecida")
}())

// 7. El Objeto arguments:
// Crea una función tradicional (no flecha) llamada 'sumarTodo' que no declare parámetros, 
// pero que use el objeto 'arguments' para sumar cualquier cantidad de números pasados como argumentos.
// Tu código aquí:

function sumarTodo() {

    let total = 0;

    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;
}

console.log(sumarTodo(1, 2, 3, 4));

// 8. Funciones Built-in (Strings):
// Usa un método integrado de los Strings para convertir la frase "aprendiendo javascript" 
// completamente a mayúsculas.
// Tu código aquí:

const texto = "aprendiendo javascript"

console.log(texto.toUpperCase())

// 9. Parámetros Rest (...):
// Crea una función llamada 'listarInvitados' que use parámetros rest para recibir 
// un número indefinido de nombres y los devuelva como un solo array.
// Tu código aquí:

function listarInvitados (...nombres){
    let resultado=""
    for(let i = 0;i<nombres.length;i++){
        resultado += nombres[i]
    }
    return resultado
}
const invitados = ["Mauricio", "Luis", "Angel", "Breiner", "Matias"]
console.log(listarInvitados(invitados))


function listarInvitados(...nombres){
    return nombres;
}

const invitados = ["Mauricio", "Luis", "Angel", "Breiner", "Matias"];

console.log(listarInvitados(...invitados));

// 10. Funciones Built-in (Math):
// Usa el objeto 'Math' para redondear el número 4.7 al entero más cercano 
// y luego genera un número aleatorio entre 0 y 1.
// Tu código aquí:


console.log(Math.round(4.7))

let numero = Math.floor(Math.random() * 10) + 1;

console.log(numero); 
