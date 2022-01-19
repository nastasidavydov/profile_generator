const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = ['What\'s your name? Nicknames are also acceptable :)  ', 'What\'s an activity you like doing?)  ', "Which meal is your favourite (eg: dinner, brunch, etc.)  ", "What's your favourite thing to eat for that meal?  ", "Which sport is your absolute favourite?  "]

let answers = [];

const generateProfile = (questions) => {
  
  if(questions.length) {
    
      rl.question(`${questions[0]}`, (answer) => {
        answers.push(answer);
        let slicedArr = questions.slice(1);
        generateProfile(slicedArr);
    });
  
 } else {
    process.stdout.write(`${answers[0]} loves ${answers[1]}, devouring ${answers[3]} for ${answers[2]}, prefers ${answers[4]} over any other sport \n`);

    rl.close();
    
 }
}


generateProfile(questions);






