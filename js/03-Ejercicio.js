/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

let cadenas=[];
let bandera=true;
while (bandera) {
    let entrada=prompt("Ingresa una cadena de texto (o escribe 'cancelar' para salir):");
    if (entrada === null) {
        bandera=false;
    } else {
        cadenas.push(entrada);
    }
}
let resultado=cadenas.join(' - ');

document.write("<br>");
document.write(resultado);
