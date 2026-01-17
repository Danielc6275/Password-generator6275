const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "a","b","c","d","e","f","g","h","i","j","k", "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7","8", "9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const characters2 = characters.slice(0,52)
let pwd1El = document.querySelector("#pwd-el-1")
let pwd2El = document.querySelector("#pwd-el-2")
let setPwdLengthEl = document.querySelector("#set-pwd-length-el")
let randomIndex1
let randomIndex2
let pwd1 = ""
let pwd2 = ""
let updatedChars = []
let toggleClicks = 1
let toggOn = 1
let toggOff = 0

let pwdLength = 15

function genPwds() {
    pwdLength = setPwdLengthEl.value
    for (i = 0; i <= pwdLength; i++) {
        if (toggleClicks === toggOn) {
            randomIndex1 = Math.floor(Math.random() * characters.length);
            randomIndex2 = Math.floor(Math.random() * characters.length);
            pwd1 += characters[randomIndex1];
            pwd2 += characters[randomIndex2];
        }
        else {
            randomIndex1 = Math.floor(Math.random() * characters2.length);
            randomIndex2 = Math.floor(Math.random() * characters2.length);
            pwd1 += characters2[randomIndex1];
            pwd2 += characters2[randomIndex2];
        }
    }
    pwd1El.textContent = pwd1;
    pwd2El.textContent = pwd2;
    console.log("Passwords generated");
    pwd1 = ""
    pwd2 = ""
}

function toggleOn() {
    toggleClicks = toggOn
}

function toggleOff() {
    toggleClicks = toggOff
}

