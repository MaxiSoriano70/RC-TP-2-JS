/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

let numeros=[];
let bandera=true;
while (bandera) {
    let entrada=prompt("Ingresa un valor numerico:");
    if (entrada===null) {
        bandera=false;
    } else {
        let valorNumerico=parseFloat(entrada);
        if (!isNaN(valorNumerico)) {
            numeros.push(valorNumerico);
        } else {
            alert("El valor no es numerico. Ingresa otro valor.");
        }
    }
}
let resultado=numeros.join(' - ');

document.write("<br>");
document.write(resultado);