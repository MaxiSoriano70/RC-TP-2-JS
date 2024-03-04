/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

let edades=[];
let nombres=[];

for (let i = 1; i <= 3; i++) {
    let nombre = prompt(`Ingrese el nombre ${i}:`);
    let edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));

    nombres.push(nombre);
    edades.push(edad);
}

let indiceEdadMaxima = edades.indexOf(Math.max(...edades));

document.write(`El mayor es: ${nombres[indiceEdadMaxima]} con ${edades[indiceEdadMaxima]} años.`);
