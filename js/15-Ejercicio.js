/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

let cadena=prompt("Ingrese una cadena de texto:").toLocaleLowerCase();
let resultado=0;

for (let i=0;i<cadena.length;i++) {
    if (cadena[i]=="a" || cadena[i]=="e" || cadena[i]=="i" || cadena[i]=="o" || cadena[i]=="u") {
        resultado++;
    }
}

document.write("Cantidad de vocales: ", resultado);