/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1*/

let cadena=prompt("Ingrese una cadena de texto:").toLocaleLowerCase();
let contador=0;
let bandera=true;
while (contador<cadena.length && bandera==true) {
    if (cadena[contador]=="a" || cadena[contador]=="e" || cadena[contador]=="i" || cadena[contador]=="o" || cadena[contador]=="u") {
        document.write("La primera vocal esta en la posición ", (contador+1));
        bandera=false;
    }
    contador++;
}


