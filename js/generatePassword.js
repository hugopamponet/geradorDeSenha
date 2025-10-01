document.querySelector("#toUpdate").addEventListener("click", toUpdate);
document.querySelector("#copy").addEventListener("click", copy);
document.querySelector("#copyPassword").addEventListener("click", copy);

const element = document.querySelector("#password");
const upperCaseCharsElement = document.querySelector("#uppercase-check");
const numberCharsElement = document.querySelector("#number-check");
const symbolCharsElement = document.querySelector("#symbol-check");

let passwordLength = 16

function generatePassword() {
    let chars = "abcdefghjkmnpqrstuvwxyz";

    const upperCaseChars = "ABCDEFGHJKMNPQRSTUVWXYZ";
    const numberChars = "123456789";
    const symbolChars = "!@#$%¨&*(){}[]_=-+/*.";

    if (upperCaseCharsElement.checked) {
        chars += upperCaseChars;
    } else if(numberCharsElement.checked) {
        chars += numberChars;
    } else if(symbolCharsElement.checked) {
        chars += symbolChars;
    }

    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    element.value = password;
}

const passwordLengthElement = document.querySelector("#password-lenght");
passwordLengthElement.addEventListener("input", function () {
    passwordLength = passwordLengthElement.value;

    generatePassword();
})

function copy() {
    navigator.clipboard.writeText(element.value);
}

function toUpdate() {
    const toUpdateElement = document.querySelector("#password");
    toUpdateElement.value = ""

    return generatePassword();
}

upperCaseCharsElement.addEventListener("click", generatePassword)
numberCharsElement.addEventListener("click", generatePassword)
symbolCharsElement.addEventListener("click", generatePassword)

generatePassword()