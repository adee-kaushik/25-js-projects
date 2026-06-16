let h1 = document.querySelector("h1");
let h2= document.querySelector("h2");
let increase= document.querySelector(".increase")
let decrease = document.querySelector(".decrease")
let reset= document.querySelector(".reset")

let inc= 0
increase.addEventListener("click", function(){
    inc++;
    h1.textContent= inc

})
decrease.addEventListener("click", function(){
    inc--;
    h1.textContent= inc;
})
reset.addEventListener("click", function(){
    inc=0
    h1.textContent= inc;
})