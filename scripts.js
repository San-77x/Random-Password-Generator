const passwordBOx = document.getElementById("password");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "~!@#$%^&*_+-=?/><";
const allChars = upperCase + lowerCase + numbers + symbols;
const elm = document.getElementById("lengthSelector")





function createPassword() {
    let password = "";
    password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(elm.value > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBOx.value = password
}


const button = document.getElementById("gen");
button.onclick = () => {
  const pass =   createPassword()
}

const copyy =document.getElementById("copyButton")
copyy.onclick = () => {
    var copyText = document.getElementById("password");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

