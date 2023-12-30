var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

console.log(numeroAleatorio);

let intentos = 0;
const maxIntentos = 5;

while (intentos < maxIntentos) {
    let num = prompt("Elige un numero:");

    if (num == numeroAleatorio) {
        alert("¡Has ganado!");
        break;
    } else if (num > numeroAleatorio) {
        alert("Ese número es mayor");
    } else if (num < numeroAleatorio) {
        alert("Ese número es menor");
    }

    intentos++;
    console.log("Num de intentos : "+intentos)
    if (intentos === maxIntentos) {
        alert("Has perdido. El número correcto era " + numeroAleatorio);
    }
}
