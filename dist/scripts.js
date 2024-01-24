"use strict";
const passwordBOx = document.getElementById("password");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "~!@#$%^&*_+-=?/><";
const allChars = upperCase + lowerCase + numbers + symbols;
const elm = document.getElementById("lengthSelector");
function createPassword() {
    let password = "";
    password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    while (Number(elm === null || elm === void 0 ? void 0 : elm.value) > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    if (passwordBOx)
        passwordBOx.value = password;
}
console.log("Hello");
const button = document.getElementById("gen");
if (button)
    button.onclick = () => {
        createPassword();
    };
const copyy = document.getElementById("copyButton");
if (copyy)
    copyy.onclick = () => {
        let copyText = document.getElementById("password");
        if (copyText) {
            copyText.select();
            navigator.clipboard.writeText(copyText.value);
            alert("Copied the text: " + copyText.value);
        }
    };
//# sourceMappingURL=scripts.js.map