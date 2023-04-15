let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveButton = document.getElementById("saveButton")

function generatePassword(len) {
const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberic = "0123456789"
const symbol = "!@#$%^&*()_+=-[]{};:,.<>/?'`~"

const data = lowerAlphabet + upperAlphabet + numberic + symbol
let generator = '';
for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
    }
    return generator
// console.log('generator: ', generator);
}
function getPassword() {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    alert('password has been generate!')
}

function savePassword() {
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
    saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
    setTimeout(() => {
        alert('berhasil disimpan')
    }, 1000)
}