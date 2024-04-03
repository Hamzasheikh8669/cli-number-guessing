#! /usr/bin/env node

import inquirer from "inquirer";
//1) Computer will generate a random number

//2)user input for guessing number

//3)compare user input with computer generate number and result
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
  {
    message: "please Guess a Number between 1-5: ",
    type: "number",
    name: "userGuessedNumber",
  },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulations you guessed Right number")
}else{
    console.log("you guessed wrong number")
} 

