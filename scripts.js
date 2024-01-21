const passwordBOx = document.getElementById("password");
const lengths = 6;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "~!@#$%^&*_+-=?/><";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCaseCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(lengths > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    return "password"
}
function copyPassword(){
    var textArea = document.createElement('textarea');
    textArea.value = passwordBOx.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    alert("Copied to clipboard!");
}