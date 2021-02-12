const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = ['Who was the first American woman in space? ','True or false: 5000 meters = 5 kilometers. ','(5 + 3)/2 * 10 = ? ',"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",'What is the minimum crew size for the International Space Station (ISS)? '];
let correctAnswers = ["Sally Ride","True","40","Trajectory","3"];
let candidateAnswers = [];

function askForName() {
  return candidateName = input.question('What is your name? ');

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(i=0;i<questions.length;i++){
    canidateAnswers = candidateAnswers.push(input.question(questions[i]));
  } 
  
  return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

correctCanidateAnswers = 0
numOfQuizQuestions = 0

  for (i=0;i<candidateAnswers.length;i++){

     if(candidateAnswers[i].toLocaleLowerCase() === correctAnswers[i].toLocaleLowerCase()){
      correctCanidateAnswers += 1;
      numOfQuizQuestions += 1;
     } else {
      numOfQuizQuestions += 1
     }
    
  }

console.log(
`\nAnswer 1: ${candidateAnswers[0]}
Correct Answer: ${correctAnswers[0]}\n
Answer 2: ${candidateAnswers[1]}
Correct Answer: ${correctAnswers[1]}\n
Answer 3: ${candidateAnswers[2]}
Correct Answer: ${correctAnswers[2]}\n
Answer 4: ${candidateAnswers[3]}
Correct Answer: ${correctAnswers[3]}\n
Answer 5: ${candidateAnswers[4]}
Correct Answer: ${correctAnswers[4]}\n`);

let grade = (correctCanidateAnswers/numOfQuizQuestions)*100;

console.log('>>> Overall Grade: ' + grade + ' %');
if (grade >= 80){
  console.log('>>> PASSED');
} else{
  console.log('>>> FAILED');
}
return grade; 
}

function runProgram() {
  askForName();

  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello ${candidateName}! `);

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};