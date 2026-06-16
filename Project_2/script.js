// let body = document.querySelector("body");
// let hex_code = document.querySelector("#hex-code");
// let btn = document.querySelector(".btn");

// let hex_color= ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]




//     btn.addEventListener('click', function(){
//         let color= '';
//         for(i=0;i<6; i++){
//     let randomindex= Math.floor(Math.random() * hex_color.length);
//     color += hex_color[randomindex];
//        body.style.backgroundColor = '#'+ color
//           hex_code.textContent = '#'+ color
//     }
       
       
//     })


let body = document.querySelector("body");
let hex_code = document.querySelector("#hex-code");
let btn = document.querySelector(".btn");

let hex_color= ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]

btn.addEventListener("click", function(){
    let color= "";
    for(i=0;i<6; i++){
        random= Math.floor(Math.random() * hex_color.length);
        color += hex_color[random];
        body.style.backgroundColor= "#"+ color;
        hex_code.textContent ="#" + color;
    }
})