let btn = document.querySelector(".submit");
let input = document.querySelector(".input")
let text = document.querySelector(".text")

btn.addEventListener("click", function(e){
    input.textContent= text.value
    e.preventDefault()
})