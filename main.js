alert("Bienvenido al mercado de la moneda");

const DOLAR_TASA_CAMBIO = 735;
const EURO_TASA_CAMBIO = 401;

function convertir() {
    while (true) {
        let valore = parseInt(document.getElementById("valor").value);

        if (isNaN(valore)) {
            alert("Por favor, ingrese un valor numérico válido.");
            return;
        }

        let resultado = 0;

        if (document.getElementById("uno").checked) {
            resultado = valore / DOLAR_TASA_CAMBIO;
            alert("El cambio de peso argentino a dólares es: $" + resultado.toFixed(2));
        } else if (document.getElementById("dos").checked) {
            resultado = valore / EURO_TASA_CAMBIO;
            alert("El cambio de peso argentino a euros es: " + resultado.toFixed(2));
        } else {
            alert("Debe seleccionar una opción de conversión.");
        }

        const continuar = confirm("¿Desea realizar otra conversión?");

        if (!continuar) {
            alert("Gracias por usar nuestro servicio de conversión.");
            break;
        }
    }
}