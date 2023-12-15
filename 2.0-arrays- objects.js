/*
Desestructuración y acceso a objeto y arrays

En JS hay muchas formas de acceder a los datos de un array y un objeto, aqui vas a poder las mas usadadas 
*/

//ACCERDER A LOS DATOS DE UN ARRAY

const arr1 = ['manzana', 'fresa', 'pera']

// puedes acceder por el indice del valor, teniendo en cuenta que siempre empezamos con el 0

arr1[0]  // Esto te trae el primer valor del array que es la "manzana"
arr1[1] //fresa
arr2[2] //pera

arr1[arr1.length - 1] // para acceder al ultimos valor debemos tener la longitud del array - 1 esto no da el valor de "Pera"

//OTRA FORMA DE ACCEDER A LOS ARRAYS ES UTILIZANDO UNA DE LAS UNTIMAS FUNCIONALIDAES DE JS EL METODO AT()

arr1.at(0)  // Esto te trae el primer valor del array que es la "manzana"
arr1.at(1) //fresa
arr2.at(2) //pera
arr1.at(-1) // cuando usamos el valor de -1 siempre vamos a traer ultimo valor del array en este caso "pera" 

//LA ULTIMA FORMA ES POR DESESTRUCTURACION
// La desestructuración es muy sencilla consiste en asignarle un nombre al valor que deseamos obtener
//Esta es muy util a la hora de trabajar con arrays pequeños los cuales sabemos su longitud
//y los valores que tenemos

//Debemos crear una constante con un array le asigamos un nombre a cada valos que deseamos extaer del array
const [manzana, fresa, pera] = arr1 //['manzana', 'fresa', 'pera']
//manzana = manzana
//fresa = fresa
//pera = pera

//ALERT: Hay que tener en cuenta que el nombre se asiga por la posición del array y no por el valor que lo contiene
//estos siguientes ejemplos son validos
const [a, b, c] = arr1 //['manzana', 'fresa', 'pera']
//a = manzana
//b = fresa
//c = pera

const [fre, manza, per] = arr1 //['manzana', 'fresa', 'pera']
//fre = manzana
//manza = fresa
//per = pera

//La desestruturación suele ser muy poderosa caundo la mezclamos con el operarodor rest LO VEREMOS MAS ADELANTE

//ACEEDER A DATOS DE UN OBJETO

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

//ACCESO POR EL NOMBRE DE LA PROPIEDAD
// De esta manera podemos simplemente acceder a los valores que tiene cada una de las propiedas del objeto
user.mame // Diego
user.age // 28
user.socialNetwork.facebook // true

//ACCESO DINAMICO
//En muchos casos no sabemos el nombre de la propiedad a la que queremos aceeder porque vienen desde una fuente externa
//cuando este es el caso podemos usar una sintaxis muy similar a la que usamos con los arrays

user['name'] // Diego
user['age'] // 28

//PERO TAMBIEN PODEMOS COMBINAR LAS DOS MANERA DE ACCEDER A LAS PROPIEDADS
user['socialNetwork'].facebook
user.socialNetwork['tiktok']

//Al igual que con los array podemos hacer una desestructuración pero aqui no importa la posicion si no el nombre

const { name, socialNetwork, age } = user

//name = Diego
//socialNetwork = socialNetwork:{ facebook: true, instagram: true, tikTok: false }
//age = 28