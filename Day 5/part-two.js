const fs = require('fs');

const data = fs.readFileSync('./Day 5/input.txt', 'utf8');
const passes = data.split('\r\n');

const rowChars = 7;
const columnChars = 3;

var passIds = [];

passes.forEach(pass => {
    let rowData = pass.substring(0, rowChars);
    let columnData = pass.substring(rowChars, rowChars + columnChars);

    const row = calculateRow(rowData);
    const column = calculateColumn(columnData);

    const seatId = row * 8 + column;

    passIds.push(seatId);
});

function calculateRow(rowData) {
    let rows = [...Array(Math.pow(2, rowChars)).keys()];

    for (let i = 0; i < rowChars; i++) {
        const char = rowData[i];

        if (char === 'F') {
            rows.splice(rows.length / 2, rows.length - 1);
        }
        else if (char === 'B') {
            rows.splice(0, rows.length / 2);
        }
    }

    return rows[0];
}

function calculateColumn(columnData) {
    let columns = [...Array(Math.pow(2, columnChars)).keys()];

    for (let i = 0; i < columnChars; i++) {
        const char = columnData[i];

        if (char === 'L') {
            columns.splice(columns.length / 2, columns.length - 1);
        }
        else if (char === 'R') {
            columns.splice(0, columns.length / 2);
        }
    }

    return columns[0];
}

passIds.sort((a, b) => a - b);

for (let i = 0; i < passIds.length; i++) {
    let seatId = passIds[i];
    let nextSeatId = passIds[i + 1];

    if (nextSeatId != seatId + 1) {
        console.log(seatId + 1);
        return;
    }
}