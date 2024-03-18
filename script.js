let min = 1;
let max = 6;
let number = Math.floor(Math.random() * (max - min + 1)) + min;
let number2 = Math.floor(Math.random() * (max - min + 1)) + min;
pickImg1(number);
pickImg2(number2);
winner(number, number2);

function pickImg1(number1){
    switch (number1) {
        case 1:
            document.querySelector(".img1").src = "/images/dice1.png";
            break;
        case 2:
            document.querySelector(".img1").src = "/images/dice2.png";
            break;
        case 3:
            document.querySelector(".img1").src = "/images/dice3.png";
            break;
        case 4:
            document.querySelector(".img1").src = "/images/dice4.png";
            break;
        case 5:
            document.querySelector(".img1").src = "/images/dice5.png";
            break;
        case 6:
            document.querySelector(".img1").src = "/images/dice6.png";
            break;
    }
}

function pickImg2(number2){
    switch (number2) {
        case 1:
            document.querySelector(".img2").src = "/images/dice1.png";
            break;
        case 2:
            document.querySelector(".img2").src = "/images/dice2.png";
            break;
        case 3:
            document.querySelector(".img2").src = "/images/dice3.png";
            break;
        case 4:
            document.querySelector(".img2").src = "/images/dice4.png";
            break;
        case 5:
            document.querySelector(".img2").src = "/images/dice5.png";
            break;
        case 6:
            document.querySelector(".img2").src = "/images/dice6.png";
            break;
    }
}

function winner(number1, number2){
    if (number1 > number2) {
        document.querySelector("h1").textContent = "Player Number 1 Wins!"
    } else if (number2 > number1){
        document.querySelector("h1").textContent = "Player Number 2 Wins!"
    } else if (number1 == number2){
        document.querySelector("h1").textContent = "It's a Draw!"
    }
}