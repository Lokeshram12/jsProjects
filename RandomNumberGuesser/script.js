const prompt=require("prompt-sync")();

const target=10+Math.round(Math.random()*90)

let guesses=5;
while(guesses!=0){
const guess=Number(prompt("Guess the number(0-100): "))

if(guess>target){
    console.log("your guess is too high");
    guesses--;
} else if(guess<target){
    console.log("your guess is too low");
    guesses--;
}
else{
    console.log("your guess is correct");
    guesses=0
}
if(guesses==0){
    console.log("number of guesses done");
    console.log("correct answer is: ",target);
}

}