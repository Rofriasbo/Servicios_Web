// 1. Conteo de caracteres
function contarCaracteres(cadena) {
    // Eliminar espacios y caracteres especiales antes de contar
    const cadenaLimpia = cadena.replace(/[^a-zA-Z0-9]/g, '');
    return cadenaLimpia.length;
}
console.log(contarCaracteres("Finlandia!")); // Output: 9

// 2. Reversión de cadena
function revertirFrase(frase) {
    // Dividir la frase en palabras, revertir el orden y también invertir cada palabra
    return frase.split(" ").map(palabra => palabra.split("").reverse().join("")).reverse().join(" ");
}
console.log(revertirFrase("Donde esta la gotera señora")); // Salida: "aroñes ategot al adnerD"

// 3. Palíndromo
function esPalindromo(palabra) {
    // Convertir la palabra a minúsculas y eliminar caracteres no alfabéticos
    const palabraLimpia = palabra.toLowerCase().replace(/[^a-z]/g, '');
    const palabraRevertida = palabraLimpia.split("").reverse().join("");
    return palabraLimpia === palabraRevertida;
}
console.log(esPalindromo("A man, a plan, a canal, Panama")); // Salida: true
console.log(esPalindromo("palindromo")); // Salida: false

// 4. Ordenamiento de un arreglo
function ordenarArreglo(arr) {
    // Ordenar el arreglo en orden ascendente y descendente
    return {
        ascendente: arr.slice().sort((a, b) => a - b),
        descendente: arr.slice().sort((a, b) => b - a)
    };
}
console.log(ordenarArreglo([5, 2, 9, 1, 5, 6])); 
// Salida: { ascendente: [1, 2, 5, 5, 6, 9], descendente: [9, 6, 5, 5, 2, 1] }

// 5. Suma de elementos de un arreglo
function sumarElementos(arr) {
    // Calcular la suma y devolver el resultado junto con el promedio
    const suma = arr.reduce((a, b) => a + b, 0);
    const promedio = suma / arr.length;
    return { suma, promedio };
}
console.log(sumarElementos([8, 2, 6, 4, 5])); // Salida: { suma: 25, promedio: 5 }

// 6. Filtrado de elementos en un arreglo
function filtrarMayoresQue(arr, valor) {
    // Filtrar y contar los elementos que son mayores que el valor dado
    const filtrado = arr.filter(num => num > valor);
    return {
        filtrado,
        cantidad: filtrado.length
    };
}
console.log(filtrarMayoresQue([2, 6, 8, 3, 9, 7], 4)); // Salida: { filtrado: [ 6, 8, 9, 7 ], cantidad: 4 }

// 7. Concatenación de arreglos
function concatenarArreglos(arr1, arr2) {
    // Concatenar y eliminar duplicados
    return [...new Set(arr1.concat(arr2))];
}
console.log(concatenarArreglos(["Hola", "Mundo"], ["Esto", "es", "Hola", "JavaScript"])); 
// Salida: ["Hola", "Mundo", "Esto", "es", "JavaScript"]

// 8. Búsqueda de elementos en un arreglo
function buscarElemento(arr, nombre) {
    // Buscar el elemento y devolver un mensaje personalizado con el índice
    const index = arr.indexOf(nombre);
    return index !== -1 
        ? `${nombre} está en el arreglo en la posición ${index}.` 
        : `${nombre} no está en el arreglo.`;
}
console.log(buscarElemento(["Ana", "Juan", "Carlos", "Thorfin"], "Thorfin")); // salida: "Thorfin está en el arreglo en la posición 3."
console.log(buscarElemento(["Ana", "Juan", "Carlos", "Thorfin"], "Pedro")); // Salida: "Pedro no está en el arreglo."
