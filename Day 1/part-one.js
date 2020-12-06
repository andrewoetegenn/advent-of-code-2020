const fs = require('fs');

const data = fs.readFileSync('./Day 1/input.txt', 'utf8');
const entries = data.split('\r\n').map(e => parseInt(e));

for (let i = 0; i < entries.length; i++) {
    const firstEntry = entries[i];

    for (let j = 0; j < entries.length; j++) {
        const secondEntry = entries[j];

        if (firstEntry + secondEntry === 2020 ) {
            console.log(firstEntry * secondEntry);
            return;
        }
    }
}