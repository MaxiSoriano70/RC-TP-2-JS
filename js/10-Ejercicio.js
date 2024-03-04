/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

const filas=parseInt(prompt("Ingrese una cantidad de filas: "));
const columnas=parseInt(prompt("Ingrese una cantidad de columnas: "));

let totalCeldas=filas*columnas;

document.write(`<table><tbody>`);
for(let i=1;i<=filas;i++){
    document.write(`<tr>`);
    for(let j=1;j<=columnas;j++){
        document.write(`<td>`);
        document.write(totalCeldas);
        totalCeldas=totalCeldas-1;
        document.write('</td>');
    }
    document.write(`</tr>`);
}
document.write(`</tbody></table>`);