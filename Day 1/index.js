const fs = require('fs');

const data = fs.readFileSync('./Day 1/input.txt', 'utf8');
const entries = data.split('\r\n').map(e => parseInt(e));

for (let i = 0; i < entries.length; i++) {
    const firstEntry = entries[i];

    for (let j = 0; j < entries.length; j++) {
        const secondEntry = entries[j];

        for (let k = 0; k < entries.length; k++) {
            const thirdEntry = entries[k];

            if (firstEntry + secondEntry + thirdEntry === 2020 ) {
                console.log(firstEntry * secondEntry * thirdEntry);
                return;
            }
        }
    }
}