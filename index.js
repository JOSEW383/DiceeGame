var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var path = "images\\dice";
var src1 =path+randomNumber1+".png";
var src2 =path+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", src1);
document.querySelector(".img2").setAttribute("src", src2);

winner = ""
if (randomNumber1>randomNumber2){
    winner = "⭐ Player 1 win"
}else if (randomNumber1<randomNumber2){
    winner = "Player 2 win ⭐"
}else{
    winner = "Draw!"
}

document.querySelector("h1").innerHTML = winner;