var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + num1 + ".png";
var randomImageSource2 = "images/dice" + num2 + ".png";

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);
if (num1 > num2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if(num1 < num2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}
console.log(num1);