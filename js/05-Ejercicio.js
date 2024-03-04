/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo:
Input:  40773821
Output: ‘L’*/

let numeroDNI;
let letra;
let letrasDNI='TRWAGMYFPDXBNJZSQVHLCKE';
let bandera=true;

while (bandera) {
    numeroDNI=prompt("Ingresa un número de DNI (0 a 99999999):");
    if (numeroDNI===null || numeroDNI==="") {
        alert("Operación cancelada. Hasta luego.");
        bandera = false;
    } else if (!isNaN(numeroDNI) && numeroDNI >= 0 && numeroDNI <= 99999999) {
        numeroDNI=parseInt(numeroDNI);
        let resto=numeroDNI % 23;
        letra=letrasDNI.charAt(resto);
        alert(`La letra del DNI ${numeroDNI} es: ${letra}`);
        bandera=false;
    } else {
        alert("Por favor, ingresa un número de DNI válido.");
    }
}
