var btn = document.querySelector(".click")
var colors= ['blue', 'yellow', 'green', 'orange', 'purple']
var i= 0;

btn.addEventListener("click", function(){
    document.body.style.backgroundColor = colors[i]
    i++;
    if(i>=colors.length){
        i=0
    }
})