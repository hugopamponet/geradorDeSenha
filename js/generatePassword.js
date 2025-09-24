const element = document.querySelector("#password")
let passwordLength = 16

function generatePassword() {
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789!@#$%¨&*(){}[]_=-+/*."

    let password = ""

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    element.value = password
}

const passwordLengthElement = document.querySelector("#password-lenght")
passwordLengthElement.addEventListener("input", function () {
    passwordLength = passwordLengthElement.value

    generatePassword()
})

function copy() {
    navigator.clipboard.writeText(element.value)
}

document.querySelector("#copy").addEventListener("click", copy)
document.querySelector("#copyPassword").addEventListener("click", copy)

generatePassword()