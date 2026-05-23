/*
6. Detectar si un objeto está vacío
Ejercicio: Escribe una función isEmpty(obj) que devuelva true si el objeto no tiene propiedades, y false si tiene al menos una.

Técnica: Puedes usar un bucle for..in para verificar la existencia de claves.
*/

function isEmpty(obj){
    let x = 0
    for(let propiedad in obj){
        x++
    }if(x >= 1){
        return false
    }else{
        return true
    }
}

const usuario1 = {
    nombre: "Luis",
    edad: 20,
    ciudad: "Medellín"
}
const usuario2 = {

}

console.log(isEmpty(usuario1))
console.log(isEmpty(usuario2))