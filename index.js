const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "a","b","c","d","e","f","g","h","i","j","k", "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7","8", "9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let pwd1El = document.querySelector("#pwd-el-1")
let pwd2El = document.querySelector("#pwd-el-2")
let pwd1 = ""
let pwd2 = ""
let pwdLength = 15
console.log(characters.length)

function genPwds() {
    for (let i = 0; i < pwdLength; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length)
        let randomIndex2 = Math.floor(Math.random() * characters.length)
        pwd1 += characters[randomIndex1]
        pwd2 += characters[randomIndex2]
    }
    pwd1El.textContent = pwd1
    pwd2El.textContent = pwd2
    console.log("Passwords generated")
    pwd1 = ""
    pwd2 = ""
}