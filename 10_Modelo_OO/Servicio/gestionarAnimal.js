const Mamifero = require('../Modelo/Mamifero');
const Ave = require('../Modelo/Ave');

const animal1 = new Mamifero("Leon Kennedy",4,"León")
const animal2 = new Mamifero("Lobo Estepario",7,"Lobo")
const animal3 = new Mamifero("Tigresa",15,"Tigre")
const animal4 = new Ave("Piolín",2,"Periquito")

console.log(animal1.obtenerInfo())
console.log(animal2.obtenerInfo())
console.log(animal3.obtenerInfo())
console.log(animal4.obtenerInfo())

