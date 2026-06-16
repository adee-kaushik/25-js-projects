let h3= document.querySelector("h3")
let h2= document.querySelector("h2")
let btn= document.querySelector(".btn")

let quotes = {
    ' ~Oscar Wilde': '“Be yourself; everyone else is already taken.”',
    ' ~Marilyn Monroe'  : '“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.”',
    '~Frank Zappa' : '“So many books, so little time.”',
    '~Albert Einstein' : '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”'
}



btn.addEventListener("click", function (){
    let Author = Object.keys(quotes);
let quote = Object.values(quotes);
    for(i=0;i<4; i++){
        let random = Math.floor(Math.random()* 4)

    h2.textContent = quote[random]
    h3.textContent = Author[random]
    }
});
