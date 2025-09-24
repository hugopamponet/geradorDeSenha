let passwordLength = 16

function generatePassword() {
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789!@#$%¨&*(){}[]_=-+/*."

    let password = ""

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    const element = document.querySelector("#password")
    element.value = password

}

const passwordLengthElement = document.querySelector("#password-lenght")
passwordLengthElement.addEventListener("input", function () {
    passwordLength = passwordLengthElement.value

    generatePassword()
})

generatePassword()