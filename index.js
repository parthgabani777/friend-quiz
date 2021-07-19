const readLineSync = require('readline-sync');
const chalk = require('chalk');

let score = 0;

let highscore =[
      {
        name:"parth",
        score:7
      },
      {
        name:"gopal",
        score:2
      }
];

let questinos = [
      {
            que : "In which city I was born?",
            ans : "surat"
      },
      {
            que : "What is my favorite food?",
            ans : "pizza"
      },
      {
            que : "What is my favorite color?",
            ans : "blue"
      },
      {
            que : "What is my surname?",
            ans : "gabani"
      },
      {
            que : "What is my birth year?",
            ans : "2000"
      },
      {
            que : "In which city i am currently studying?",
            ans : "ahmedabad"
      },
      {
            que : "What is my favorite programming languaage?",
            ans : "javascript"
      }
];

console.log(chalk.bold.italic.hex("16BAC5")("QUIZZ TO KNOW ABOUT ME"));

let username = readLineSync.question(chalk.hex("5FBFF9")("Enter your name:"));

console.log(chalk.hex("16BAC5")("Welcome to quizz "+username));

console.log("\n==============================================\n");

function checker(correctAnswer,selectedAnswer) {
      if(correctAnswer.toLowerCase() == selectedAnswer.toLowerCase()){
            score++;
            console.log(chalk.greenBright("Right answer"));
      }
      else{
            console.log(chalk.redBright("Wrong answer"));
            console.log(chalk.greenBright("Right answer is: "+correctAnswer));
      }
      console.log(chalk.hex("5FBFF9")("Current Score: "+score));
      console.log("\n==============================================\n");
}


for(let i=0;i<questinos.length;i++){
      let ans = readLineSync.question(chalk.hex("5FBFF9")(questinos[i].que+" "));
      checker(questinos[i].ans,ans);
}

console.log(chalk.hex("16BAC5")("Your score is: "+chalk.bold.greenBright(score)+" out of "+chalk.bold.greenBright(questinos.length)));
console.log(chalk.hex("16BAC5")("Thank you for taking quiz"));

isHighScore(score);

function isHighScore(currentScore){
      highscore.forEach((value)=>{
            if(currentScore>value.score){
                  console.log(chalk.greenBright("You have beat High Score."));
                  highscore.push({name:username,score:currentScore});
                  return;
            }
      })
}