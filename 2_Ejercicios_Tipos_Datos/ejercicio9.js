/*
9. Objetos Propios: Uso de Math
Ejercicio: Utiliza el objeto integrado Math para generar un número entero aleatorio entre un valor mínimo y un valor máximo (incluyendo ambos).

Herramientas: Necesitarás Math.random(), Math.floor() y una fórmula para ajustar el rango.
*/

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeroAleatorio(1, 10));