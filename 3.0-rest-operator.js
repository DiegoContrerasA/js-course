/*
REST AND SPREAD o operador de 3 puntos (...)
Es el mismo operardor solo que se diferencia del nombre dependiendo de como se utilice 
*/

//REST

//Hay muchos casos en donde solo queremos extraer uno o dos datos de un arreglo u objeto
//y mantener un arreglo con los demas datos, en ese caso este operador entra en juego

const arr1 = ['manzana', 'fresa', 'pera']

//Con esta asignación lo que queremos es extraer solo la manzana del array y crear un nuevo array con las demas frutas
const [manzana, ...restoDeFrutas] = arr1

//manzana = manzana
//restoDeFrutas = ['fresa', 'pera']

//ESTA misma funcion es aplicada para los objetos


const user = {
    name: 'Diego',
    age: 28,
    isActive: true,
    socialNetwork: {
        facebook: true,
        instagram: true,
        tikTok: false
    }
}

//Si solo queremos extraer 1 o 2 propiedades del usuario y crear un nuevo objeto con las
//demas propiedades podemos usar el mismo operador

const { age, ...restoDelUsuario } = user

//age = 28
//restoDelUsuario = {name: 'Diego',isActive: true,socialNetwork: {facebook: true,instagram: true, tikTok: false} }


//SPREAD 
//Este es muy usado cuando queremos crear nuevo objetos o arrays a partir de uno existente
// y nos permite extender las propiedades que ya teniamos antes

const arr2 = [...arr1, 'lulo', 'piña']

//ahora tenemos un nuevo array2 con los datos del primer y le agregamos nuevas propiedades

// arr2 =  ['manzana', 'fresa', 'pera',  'lulo', 'piña']

//IMPORTANTE el orden del spread no importa, se puede hacer al inicio, al final, entre datos

const arr3 = ['uva', ...arr2]

// arr3 =  ['uva', 'manzana', 'fresa', 'pera',  'lulo', 'piña']

const arr4 = ['maracuya', ...arr3, 'kiwi']

// arr4 =  ['maracuya', 'uva', 'manzana', 'fresa', 'pera',  'lulo', 'piña', 'kiwi']

//APLICACIÓN EN OBJETOS suele ser mas interesante porque no solo me permite agregar nuevas propiedades
//si no que a su vez me permite modificar las que existe

//Aqui vamos a crear un nuevo usurio partiendo de usuario 1 y le vamos solo a cambiar el nombre y la edad
const user2 = { ...user, name: 'Juan', age: 33 }

//user2 =  {name: 'Juan',age: 33 , isActive: true,socialNetwork: {facebook: true,instagram: true, tikTok: false} }

//ESTO TIENE UN IMPACTO IMPORTANTE A LA HORA DE EVITAR MUTACIONES Y CLONACIONES DE DATOS LUEGO LO VEMOS MAS A FONDO
//ESTOS OPERADORES TAMBIEN SUELEN SER USADOS PARA LAS FUNCIONES