// alert("JS is working");

let randomNumber1 = Math.floor(Math.random()*6) + 1;
let randomNumber2 = Math.floor(Math.random()*6) + 1;

let randomImage1 = "images/dice" + randomNumber1 + ".png";
let randomImage2 = "images/dice" + randomNumber2 + ".png";

console.log(randomImage1);
console.log(randomImage2);

// First Image
// getElementsByClassName("img1") returns an array of all elements with the classa name of img1
document.getElementsByClassName("img1")[0].setAttribute("src",randomImage1);

// Second Image
// getElementsByClassName("img2") returns an array of all elements with the classa name of img2
document.getElementsByClassName("img2")[0].setAttribute("src",randomImage2);

let newH1Text = "";
if (randomNumber1 > randomNumber2){
    newH1Text = "🚩Player 1 Wins! 🚩";
}
else if (randomNumber1 < randomNumber2){
    newH1Text = "🏁Player 2 Wins! 🏁";
}
else if (randomNumber1 == randomNumber2){
    newH1Text = "🏴‍☠️ Draw! 🏴‍☠️";
}

document.querySelector("h1").textContent = newH1Text;

