/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

let cadena=prompt("Ingrese una cadena de texto:");
let cadenaAlReves=cadena.split('').reverse().join('');
document.write("Cadena al revés: ",cadenaAlReves);