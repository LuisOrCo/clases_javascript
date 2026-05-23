/*
2. Suma de Números desde el usuario
Ejercicio: Crea un script que pida al usuario dos números usando prompt() y muestre la suma de ambos.

Desafío: Asegúrate de convertir las entradas de texto a tipo Number antes de sumar, de lo contrario se concatenarán como texto.

*/ 

let n1 = Number(prompt("Ingrese el número 1: "))
let n2 = Number(prompt("Ingrese el número 2: "))

alert("El resultado es: " + (n1+n2))