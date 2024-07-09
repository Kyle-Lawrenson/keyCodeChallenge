console.log("Hello")

const code = document.getElementById("code")
const which = document.getElementById("which")
const key = document.getElementById("key")

document.addEventListener("keydown", (event) => {
    code.textContent = event.code
    which.textContent = event.which
    key.textContent = event.key
} )