/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/

let edad=parseInt(prompt("Ingrese su edad por favor: "));

if(edad<0){
    document.write("<br>");
    document.write(`La edad ${edad} no es valida.`);
}else if(edad<18){
    document.write("<br>");
    document.write(`Su edad es ${edad}, usted es menor de edad.`);
}else{
    document.write("<br>");
    document.write(`Su edad es ${edad}, usted es mayor de edad.`);
}