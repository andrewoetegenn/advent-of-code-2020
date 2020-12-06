const fs = require('fs');

const data = fs.readFileSync('./Day 2/input.txt', 'utf8');
const policies = data.split('\r\n');

var validPasswords = 0;

policies.forEach(policy => {
    const groups = policy.match(/(\d*)-(\d*) ([a-z]): ([a-z]*)/);

    const firstPosition = parseInt(groups[1]);
    const secondPosition = parseInt(groups[2]);
    const character = groups[3];
    const password = groups[4];

    if (password[firstPosition - 1] === character ^ password[secondPosition - 1] === character) {
        validPasswords++;
    }
});

console.log(validPasswords);