const fs = require('fs');

const data = fs.readFileSync('./Day 2/input.txt', 'utf8');
const policies = data.split('\r\n');

var validPasswords = 0;

policies.forEach(policy => {
    const groups = policy.match(/(\d*)-(\d*) ([a-z]): ([a-z]*)/);

    const min = groups[1];
    const max = groups[2];
    const character = groups[3];
    const password = groups[4];

    const instances = (password.match(new RegExp(`${character}`, 'g')) || []).length;

    if (instances >= min && instances <= max) {
        validPasswords++;
    }
});

console.log(validPasswords);