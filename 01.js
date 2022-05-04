const line = "___________________";
const next = () => console.log(`${line}${line}\n`);
const jump = () => console.log("\n")

next();

// 1.  Ejercicios destructuring
// Dado el siguiente objeto:

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

// Extrae la empleada Ana con todos sus datos personales:
// {"name":"Ana", "email":"Ana@gmail.com"}

const [target1, target2] = empleados;
console.log(target2);
next();

// Extrae el email del empleado Luis --> Luis@gmail.com

const { email: emailLuis } = target1;
console.log(emailLuis);
next();

// Usa la desestructuración para intercambiar los valores de a y b

// Inicialmente
let a = 5;
let b = 3;

// Al final
// let a = 3;
// let b = 5;

[a, b] = [b, a]

console.log(a);
console.log(b);

next()

// 2. Ejercicios spread/rest
// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

const sumEveryOther = (...valor) => {
    return console.log(valor.reduce((a, b) => a + b))
}

sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26 

next();

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

const addOnlyNums = (...valor) => console.log(valor.filter(dato => typeof(dato) == "number"))

addOnlyNums(1, 'perro', 2, 4); //7

next();

// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...valor) => console.log(valor.length)

countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

next();

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

const tstr1 = [1, 2, 3, 4, 5];
const tstr2 = [6, 7, 8, 9, 10];

const combineTwoArrays = (arr1, arr2) => console.log([...arr1, ...arr2])

combineTwoArrays(tstr1, tstr2);

console.log(`\n${line}¡¡¡EXTRA!!!${line}\n`);


// 3. Extras
// Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana
const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES
console.log(maximaHoy)
console.log(maximaManana)

next();

// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

// Version larga
// const onlyUniques = (...value) => {
//     let dataArr = new Set(value);
//     let result = [...dataArr];
//     return console.log(result)
// }

// Version corta
const onlyUniques = (...value) => console.log([...new Set(value)])

onlyUniques('gato', 'pollo', 'cerdo', 'cerdo');
['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

next();

// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

const combineAllArrays = (...value) => {
    console.log(value)
    let result = [].concat(...value)
    console.log(result)
}

combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]) //[3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); //[2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

next();

// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

const sumAndSquare = (...value) => console.log(value.map(elemento => elemento ** 2).reduce((a, b) => a + b))

sumAndSquare(1, 2, 3, 4, 5, 6, 7, 8, 9)