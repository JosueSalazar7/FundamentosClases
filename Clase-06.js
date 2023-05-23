// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(respuesta => console.log(respuesta))
// .catch((error)=>console.log(error))

// const obtenerData = async (nombrePokemon)=>{
//     try{
//     const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
//     const response = await peticion.json()
//     console.log(response);
//     console.log(response.name, response.sprites.front_default);
//     }catch(error){
//         console.log(error);
//     }
// }
// obtenerData('pikachu')


//LCOAL ESTORAGE

// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => response.json())
//     .then(data => {
//         {
//             let usuario ={
//                 name:data.name,
//                 username:data.username,
//                 email:data.email
//             }
//             guardarLocalStorage(usuario)
//         }
//     })

//  const guardarLocalStorage = (data)=>{
//      localStorage.setItem('user',JSON.stringify(data))
// }

// const obtenerLocalStorage = () =>
// {
//     const respuesta = localStorage.getItem("user") ? JSON.parse
//     (localStorage.getItem("user")) : "No hay data"
//     console.log(respuesta);
// }
// obtenerLocalStorage()

// const eliminarLocalStorage = ()=>
// {
//     localStorage.key("user") ? console.log("No hay clave") : 
//     localStorage.removeItem("user")
// }
// eliminarLocalStorage()


// const login = require('./modulo')
// login()
// const {login, LIKES} = require('./modulo')

// login()
// console.log(LIKES);
import login from "./module.js";

login()