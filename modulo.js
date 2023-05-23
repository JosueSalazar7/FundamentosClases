
// login = (username,password)=>{
//     if(!username && !password) return console.log("You are not autorized")
//     console.log(`Welcome ${username}`)
// }

// module.exports = login
login = (username,password)=>{
    if(!username && !password) return console.log("You are not autorized")
    console.log(`Welcome ${username}`)
}

const LIKES = 150

module.exports = {
    login,
    LIKES
}
const login = (username,password)=>{
    if(!username && !password) return console.log("You are not autorized")
    console.log(`Welcome ${username}`)
}

export default login