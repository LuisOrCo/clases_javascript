const numero = "45";
function validar(valor) {
    if (typeof valor !== "number") {
        throw new TypeError("El parámetro no es un número");
    }
    return valor * 2;
}

validar(numero);