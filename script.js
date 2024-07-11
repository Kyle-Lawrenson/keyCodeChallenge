console.log("Hello")

// this tells it to look for the id
const code = document.getElementById("code")
const which = document.getElementById("which")
const key = document.getElementById("key")

// this changes it in real time
document.addEventListener("keydown", (event) => {
    code.textContent = event.code
    which.textContent = event.which

    console.log(event.key);

    if (event.key == " ") {
        key.textContent = "n/a"
    } else {
        key.textContent = event.key
    } // this tells it that nothing is displayed within the box then it displays "n/a"
}) 
