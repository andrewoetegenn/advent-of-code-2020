const fs = require('fs');

const data = fs.readFileSync('./Day 4/input.txt', 'utf8');
const passports = data.split('\r\n\r\n');

const requiredFields = [
    { name: 'byr', isValid: (value) => value >= 1920 && value <= 2002 },
    { name: 'iyr', isValid: (value) => value >= 2010 && value <= 2020 },
    { name: 'eyr', isValid: (value) => value >= 2020 && value <= 2030 },
    { name: 'hgt', isValid: (value) => new RegExp('^(?:1[5-8][0-9]cm|19[0-3]cm|59in|6[0-9]in|7[0-6]in)$').test(value) },
    { name: 'hcl', isValid: (value) => new RegExp('^#[0-9a-f]{6}$').test(value) },
    { name: 'ecl', isValid: (value) => [ 'amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth' ].includes(value) },
    { name: 'pid', isValid: (value) => new RegExp('^[0-9]{9}$').test(value) }
]

var validPassports = 0;

passports.forEach(passport => {
    const fields = passport
        .split(/[ \r\n]+/)
        .map(function(field) {
            return {
                name: field.substring(0, 3),
                value: field.substring(4)
            };
        });

    let valid = true;

    requiredFields.forEach(requiredField => {
        var field = fields.find(field => field.name === requiredField.name);

        if (!field) {
            valid = false;
            return;
        }

        if (!requiredField.isValid(field.value)) {
            valid = false;
            return;
        }
    });

    if (valid) {
        validPassports++;
    }
});

console.log(validPassports);