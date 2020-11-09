// generarGrillaCuadrada(tamanio)
// Crear una función generarGrillaCuadrada que tome como argumentos 
// un número entero y devuelva una matriz de filas y columnas con la longitud tamanio, 
// donde cada ítem de la matriz es un string cualquiera (por ejemplo "hola").

// generarGrillaCuadrada(3) /* 
//   [
//     ["hola", "hola", hola"], 
//     ["hola", "hola", hola"],
//     ["hola", "hola", hola"]
//   ]

// const generarGrillaCuadrada = (num) => {
//     const matriz = []
//     for (let i = 0; i < num; i++) {
//         matriz[i] = []
//         for (let j = 0; j < num; j++) {
//             matriz[i].push('hola')
//         }

//     }
//     return matriz
// }

// console.log(generarGrillaCuadrada(5))

// generarGrillaSimple(filas, columnas)
// Crear una función generarGrillaSimple que tome como argumentos un número entero filas, 
// un número entero columnas, y devuelva una matriz de filas filas y columnas columnas, 
// donde cada ítem de la matriz es un string cualquiera (por ejemplo, "hola").

// generarGrillaSimple(2, 3) /* 
//   [
//     ["hola", "hola", hola"],
//     ["hola", "hola", hola"],
//   ]
// */
// generarGrillaSimple(3, 2) /* 
//   [
//     ["hola", "hola"],
//     ["hola", "hola"],
//     ["hola", "hola"],
//   ]
// */

// const generarGrillaSimple=(filas, columnas)=>{
//     const matriz = []
//         for (let i = 0; i < filas; i++) {
//             matriz[i] = []
//             for (let j = 0; j < columnas; j++) {
//                 matriz[i].push('hola')
//             }

//         }
//         return matriz

// }

// console.log(generarGrillaSimple(2, 3)) /* 
//   [
//     ["hola", "hola", hola"],
//     ["hola", "hola", hola"],
//   ]
// */
// console.log(generarGrillaSimple(3, 2)) /* 
//   [
//     ["hola", "hola"],
//     ["hola", "hola"],
//     ["hola", "hola"],
//   ]
// */

// generarGrilla(filas, columnas, items)
// Crear una función generarGrilla que tome como argumentos un número entero filas,
// un número entero columnas y un array de valores items, y devuelva una matriz de filas filas
// y columnas columnas, donde cada ítem de la matriz es un ítem aleatorio de items.

// Como todos los problemas complejos, comenza por dividirlo en problemas mas pequeños:
// por ejemplo, comenza por una funcion que devuelva un numero aleatorio. 
// Una vez que la tengas, hacé una función que reciba un array y devuelva un número aleatorio
// en cada posición de ese array. Luego, mejorala para hacer que devuelva un array cuyos 
// elementos sean elementos aleatorios del array recibido como parametro.
// Solo entonces, hace la funcion generarGrilla.

// generarGrilla(2, 3, [1, 2]) /* 
//   [
//     [1, 1, 2], 
//     [2, 1, 1]
//   ]
// */

// generarGrilla(3, 3, ['a', 'b', 'c']) /* 
//   [
//     ['c', 'c', 'a'], 
//     ['c', 'a', 'a'], 
//     ['b', 'a', 'b']
//   ]
// */

const obtenerNumeroAlAzar = (items) => {
    return Math.floor((Math.random() * items.length))
}

//   console.log(devolverEnArray(6))

const generarGrilla = (filas, columnas, items) => {

    let grilla = []
    for (let i =0; i < filas; i++) {
        grilla[i] = []
        for (let j = 0; j < columnas; j++) {
            grilla[i][j] = items[obtenerNumeroAlAzar(items)]

        }

    }
    return grilla
}

console.log(generarGrilla(2,3,["a", "b", "c"]))