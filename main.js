let saldo = prompt("Ingrese su presupuesto");

if (saldo > 10000) {
    console.log("Puede hacer la compra");
} else if (saldo < 10000) {
    console.log("Saldo insuficiente");
}


let tiempoLimite = prompt("Ingrese en cuantos minutos suena el temporizador")
tiempoLimite = parseInt(tiempoLimite)
console.log("Tiempo del minuto 1 al " + tiempoLimite + ":")

for (i = 0; i <= tiempoLimite; i +=1){
    console.log(i);
    
    
} 
console.log("sonar alarma");
