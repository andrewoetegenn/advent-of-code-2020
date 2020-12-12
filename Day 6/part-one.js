const fs = require('fs');

const data = fs.readFileSync('./Day 6/input.txt', 'utf8');
const groups = data.split('\r\n\r\n').slice(10);

let questionsTotal = 0;

groups.forEach(group => {
    const questions = group
        .split(/[ \r\n]+/)
        .join('')
        .split('');

    const distinctQuestions = [...new Set(questions)];

    questionsTotal += distinctQuestions.length;
});

console.log(questionsTotal);