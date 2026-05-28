// HTML DOM: extensión del DOM con características específicas para HTML
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("cambiar");

let activado = false

boton.addEventListener("click", () => {

    if (!activado){
        document.body.style.backgroundColor = "lightblue";
        mensaje.textContent = "El HTML DOM permite cambiar estilos y contenido en tiempo real.";
        activado = true
    }else{
        document.body.style.backgroundColor = "white";
        mensaje.textContent = "";

        activado = false;
    }
    });
    