/*
VARIABLES
Hay 3 formas de declarar una variable en JS
var - let - const

var => Ya no se suele usar porque tenia muchos problemas de contexto 
let => Solo se usa cuando una varible va a cambiar de valor
const => Aunque su uso deberia ser solo para constantes, en JS se suele usar para todo
*/

var n = 0
let i = 0
const j = 0

/*
TIPOS DE ASIGNACION VARIABLES
En JS existen en general las mismos tipos de variables que en la mayoria de lenguajes PERO hay dos formas en las
que el lenguaje guarda en memoria su valor

Asignación: Se usa para tipos de datos naturales como string, number, boolean esto permite que se puede 
afectar su valor directamente
string => Se declara dentro de comillas dobles o simples
number => Puede ser entero o flotante
boolean => Verdadero o false

Referencia: Es utlizada para arrays, objets y funciones lo que hace JS es guardar una referencia en memoria del valor,
esto puede ser un problema a la hora de copiar o modificar estos valores porque al ser una referencia podriamos estar
afectando el valor original

array => Es una matriz, que puede contener cualquier tipo de dato
objet => Es similar a un mapa donde tiene dos propiedades key y value

*/

const s1 = 'string'
const s2 = "string"

const n1 = 1 // Numero entero
const n2 = 1.6 //Numer flotante puede aqui se trabaja con el (.) punto para decir que es un decimal

const b1 = true
const b2 = false

const arr1 = [s1, s2] // esto es un array que contiene dos string
const arr2 = [n1, n2] // esto es un array de numeros
const arr3 = [b1, b2] // esto es un array de boleanos
const arr4 = [s1, n1, b1] // este es un array mixto donde tenemos string, number y boolean

//los objetos son una estrutura similar al un Json que contiene dos propiedades {key : value}
//los valores pueden ser cualquier tipo de dato permitido incluyendo otros objetos

const obj = {
 name: 'Diego',
 age: 28,
 isActive: true,
 socialNetwork:{
    facebook: true,
    instagram: true,
    tikTok: false
 }
}

/*
FUNCIONES
Hay 2 formas de declarar funciones en Js

Funciones de toda la vida se declaran con la palabra reservada:  function ()
Y las arrow functions o funciones de flecha que se declaran con la siguiente estructura: () =>
*/

//FUNCION
//Se escribe en primera instancia la palabra function seguido el nombre de la funcion, los parentesis que nos 
//van a permitir recibir los valores que recibe la funcion y finalmente las llaves que nos van a permitir
//abrir un nuevo bloque de codigo en donde vamos a escribir nuestro programa


// Vamos a crear una funcion suma que va a recibir 2 numeros y debe devolver el resultado
//el return lo que hace es devolver el valor calculado de la suma para que al momento de invocar esa funcion
//obtengamos el resultado
function suma(n1,n2){
return n1 + n1
}

//Las invocacion de una funcion de hace de la siguiente manera, llamamos la funcion y le enviamos sus parametros
suma(4, 5)
//en este caso a la funcion suma le vamos a enviar los dos numero el 4 y el 5 el resultado de esta operación
//deberia ser un 9

//Para obtener el resultado basta con almacenar ese valor en una constante

const resultado = suma(4, 5)
//ahora la constante resultado tiene almacenado el valor de nueve para verlo podemos hacer uso del console.log
//que nos permite imprimir un valor en consola

console.log(resultado) //9


//ARROW FUNCTION O FUNCIONES DE FLECHA
//Esta estructura se creo para ahorrar un par de problemas que nos generaban las funciones en usos mas especiales
//LUEGO LO VEMOS CON MAS DETALLE pero tambien es una forma mas corta de escribir nuestras funciones
//Muy utilizada en los frameworks en su mayoria 

//Veamos el mismo ejemplo de la suma solo que vamos a crearlo con una suma1

const suma1 = (n1, n2) => {
    return n1 + n2
}

// Aqui primero creamos una constante donde le asignamos la function luego declaramos la function de flecha
//y la estructura interna es la misma

//Al igual que en el ejemplo anterior valomos a capturar el resultado en otra constante

const resultado1 = suma(4, 5)
console.log(resultado1) //9