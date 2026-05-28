// SVG DOM: el círculo es un SVGCircleElement (extiende SVGElement -> Element -> Node)
const circulo = document.querySelector("circle");
const boton = document.getElementById("cambiar-color");

<<<<<<< HEAD
const colores = ["tomato", "green", "royalblue", "orange", "purple","blue"];
=======
const colores = ["tomato", "green", "royalblue", "orange", "purple", "Yellow", "Black"];
>>>>>>> d7be780a85e2fdace634982d8f651d83fd8eee15
let i = 0;

boton.addEventListener("click", () => {
    i = (i + 1) % colores.length;
    circulo.setAttribute("fill", colores[i]);
});
