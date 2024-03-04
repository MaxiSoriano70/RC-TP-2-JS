/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)
1
12
123
1234
12345
123456
……*/

let limite=parseInt(prompt("Ingrese un numero del 1 al 50:"));

if(limite>=1 && limite<=50){
    for (let i=1;i<=limite;i++) {
        let linea='';
        for (let j=1;j<=i;j++) {
            linea += i;
        }
        document.write("<br>");
        document.write(linea);
    }
}else{
    document.write("<br>");
    document.write("El valor ingresado no es valido.");
}

