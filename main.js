let saldo = prompt("Ingrese su presupuesto");

if (saldo > 10000) {
    console.log("Puede hacer la compra");
} else if (saldo < 10000) {
    console.log("Saldo insuficiente");
}


let tiempoLimite = prompt("Ingrese en cuantos minutos suena el temporizador")
tiempoLimite = parseInt(tiempoLimite)
console.log("Tiempo del minuto 1 al " + tiempoLimite + ":")

for (i = 0; i <= tiempoLimite; i += 1) {

    console.log(i);

}
console.log("sonar alarma");




function calcularComision(ventas) {
    const tasaComision = 0.01;

    const comision = ventas * tasaComision;

    return comision;

}
function simular() {

    let ventas = prompt("ingrese las ventas mensuales:");

if (isNaN(ventas)){
    alert("por favor, ingrese un numero valido");
    return;
}

ventas = parseInt(ventas);

const comision =  calcularComision(ventas);
alert("Monto de ventas: $" + ventas + " Comision: $" + comision);
}
simular();