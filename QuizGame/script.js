const prompt=require("prompt-sync")()

console.log("Welcome to IPL Quiz");

var score=0;
const total=2;

const ans1=prompt("When is the IPL started?");
const correct_ans1="2008";

if(ans1.toString() === correct_ans1){
    console.log("You got it correct");
    score++;
}

else{
    console.log("incorrect")
}


const ans2=prompt("What is the highest individual score in IPL by a batsman?");
const correct_ans2="175";

if(ans2.toString() === correct_ans2){
    console.log("You got it correct");
    score++;
}
else{
    console.log("incorrect")
}

console.log("Quiz Score:", (score/total *100).toString()+"%");
