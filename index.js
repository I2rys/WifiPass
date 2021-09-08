//Dependencies
const Wifi_Password = require("wifi-password")
const Fs = require("fs")

//Main
Wifi_Password().then((password) =>{
    console.log(`The password of the wifi your using is ${password}`)
}).catch((err)=>{
    console.log("Unable to get the wifi password, make sure this computer is wireless.")
})

setInterval(function(){}, 1000) //To avoid the program closing, unless you exit it.
