// Declarar variables globales


function calcular() {
    // Traigo los valores del footer
    let gramos = Number(document.getElementById("gramos").value);
    let horas = Number(document.getElementById("horas").value);
    let minutos = Number(document.getElementById("minutos").value);
    let cantidad = Number(document.getElementById("cantidad").value);
    // Declaro variables locales
    let tiempo = (horas * 60) + minutos ;
    let costoMaterial = (datos[0].valorPLA/1000) * gramos;
    let consumoElectrico = (((datos[0].kWh/1000) * datos[0].consumoElec) / 60) * tiempo;
    let desgaste = ((datos[0].valorImpresora / (3000 * 60)) * tiempo) * datos[0].dolar;
    let subtotal = (costoMaterial + consumoElectrico + desgaste);
    let total = Math.round(((subtotal + (subtotal * datos[0].margenError)) * datos[0].margenGanancia * cantidad) / 100) * 100;
    console.clear();
    // Verifico los datos asignados
    console.log("Tiempo:" + tiempo.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + " minutos.");
    console.log("El coste de material es: $" + costoMaterial.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    console.log("El consumo electrico por el trabajo es de: $" + consumoElectrico.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    console.log("El desgaste es de: $" + desgaste.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    console.log("El subtotal es de: $" + subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    console.log("El TOTAL DE LA COMPRA ES DE: $" + total.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));

}







// Arranque de la pagina
document.addEventListener("DOMContentLoaded", function () {
    // Primero cargás el JSON
    fetch('./data/calculadora.json')
        .then(res => res.json())
        .then(data => {
            datos = data.Datos;
            // console.log(document.getElementById("jason1"));

        })
        .catch(err => console.error("Error al cargar archivo:", err));
    });