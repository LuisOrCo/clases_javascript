const Jaula = require('../Modelo/Jaula');
const Ave = require('../Modelo/Ave');
const Mamifero = require('../Modelo/Mamifero');
const Cuidador = require('../Modelo/Cuidador');

const Leon = new Mamifero("Leon kennedy", 4,"León","Camuflaje-Sabana");
const tigre = new Mamifero("Tigresa", 14, "Tigre", "Camuflaje-Selva");
const Periquito = new Ave("Piolín", 2, "Periquito", 20);

const Cuidador1 = new Cuidador("Luis",20);

const Jaula1 = new Jaula("102578", 5, Cuidador1);

Jaula1.agregarAnimal(Leon);
Jaula1.agregarAnimal(tigre);
Jaula1.agregarAnimal(Periquito);

console.log(Leon.hacerSonido())
console.log(Periquito.hacerSonido())

const mensajes = Jaula1.alimentarTodosLosAnimales();

mensajes.forEach(mensaje =>{
    console.log(mensaje);
})

console.log(Jaula1.obtenerInfo());

