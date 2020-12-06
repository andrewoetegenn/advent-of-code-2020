const fs = require('fs');

const data = fs.readFileSync('./Day 3/input.txt', 'utf8');

const map = data.split('\r\n');
const mapHeight = map.length;
const mapWidth = map[0].length;

const horizontalMovement = 3;
const verticalMovement = 1;

var totalHorizontalMovement = 0;
var numberOfTrees = 0;

for (let verticalPosition = 0; verticalPosition < mapHeight; verticalPosition += verticalMovement) {
    let horizontalPosition = (totalHorizontalMovement) % mapWidth;

    if (isTree(map[verticalPosition][horizontalPosition])) {
        numberOfTrees++;
    }

    totalHorizontalMovement += horizontalMovement;
}

console.log(numberOfTrees);

function isTree(character) {
    return character === '#';
}