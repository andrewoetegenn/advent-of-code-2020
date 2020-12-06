const fs = require('fs');

const data = fs.readFileSync('./Day 4/input.txt', 'utf8');
const passports = data.split('\r\n\r\n');

const requiredFields = [ 'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid' ]

var validPassports = 0;

passports.forEach(passport => {
    const fields = passport
        .split(/[ \r\n]+/)
        .map(field => field.substring(0, 3));

    const valid = requiredFields.every(field => fields.includes(field));

    if (valid) {
        validPassports++;
    }
});

console.log(validPassports);