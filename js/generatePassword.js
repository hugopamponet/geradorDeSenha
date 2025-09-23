function generatePassword() {
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789!@#$%¨&*()_=-+/*."

    let password = ""

    for (let i = 0; i < 8; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    const element = document.querySelector("#password")
    element.value = password

}

generatePassword()