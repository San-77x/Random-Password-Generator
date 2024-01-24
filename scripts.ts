const passwordBOx = document.getElementById("password") as HTMLInputElement | null;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "~!@#$%^&*_+-=?/><";
const allChars = upperCase + lowerCase + numbers + symbols;
const elm = document.getElementById("lengthSelector") as HTMLInputElement | null;

function createPassword() {
    let password = "";
    password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(Number(elm?.value) > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    if(passwordBOx)
    passwordBOx.value = password
}



const button = document.getElementById("gen");
if(button)
button.onclick = () => {
   createPassword()
}

const copyy =document.getElementById("copyButton")
if(copyy)
copyy.onclick = () => {
    let copyText = document.getElementById("password") as HTMLInputElement | null;
    if(copyText){
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
    }
}

