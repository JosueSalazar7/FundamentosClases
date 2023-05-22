// function solicitar(tipo) {

//     for (let index = 0; index < 10000000000; index++) 
//     {
//     }
//     return `¡Hola, ya regresé con el ${tipo}!`
// }
// console.log("Comenzar a escribir en la pizarra")
// console.log("No hay marcador azul")
// console.log("Solicitar ayuda")
// const name = 'Ralph'
// const respuestaEstudiante = solicitar("Marcador-azul")
// console.log(respuestaEstudiante)
// console.log("Continuar escribiendo en la pizarra");
// function solicitar(tipo) {
//     console.log(`¡Hola, ya regresé con el ${tipo}!`)
// }

// console.log("Comenzar a escribir en la pizarra")
// console.log("No hay marcador azul")
// console.log("Solicitar ayuda")
// const name = 'Ralph'
// const data = setTimeout(()=>solicitar("Marcador-azul"),5000)
// console.log("Continuar escribiendo en la pizarra")

// //PROMESA

// const conexionBDDExterna = (datosConexion)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
//         },3000)
//     })
// }

// const obtenerProductos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// conexionBDDExterna(true)
//     .then(respuesta => console.log(respuesta))
//     .catch(error=>console.log(error))



// obtenerProductos
//     .then(peticion=>peticion.json())
//     .then(respuesta=>console.log(respuesta[0].name))
//     .catch(error=>console.log(error))

//OBTENER UNA API 

const obtenerProductos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
obtenerProductos
.then((respuesta)=>respuesta.json())
//capturamos respuesta
.then((data)=>console.log(data))
.catch((error)=>console.log(error))


