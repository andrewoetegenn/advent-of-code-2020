const fs = require('fs');

const data = fs.readFileSync('./Day 3/input.txt', 'utf8');

const map = data.split('\r\n');

let totalNumberOfTrees = 0;

totalNumberOfTrees += countTrees(map, 1, 1);
totalNumberOfTrees *= countTrees(map, 3, 1);
totalNumberOfTrees *= countTrees(map, 5, 1);
totalNumberOfTrees *= countTrees(map, 7, 1);
totalNumberOfTrees *= countTrees(map, 1, 2);

console.log(totalNumberOfTrees);

function countTrees(map, horizontalMovement, verticalMovement) {
    const mapHeight = map.length;
    const mapWidth = map[0].length;

    var totalHorizontalMovement = 0;
    var numberOfTrees = 0;

    for (let verticalPosition = 0; verticalPosition < mapHeight; verticalPosition += verticalMovement) {
        let horizontalPosition = (totalHorizontalMovement) % mapWidth;

        if (isTree(map[verticalPosition][horizontalPosition])) {
            numberOfTrees++;
        }

        totalHorizontalMovement += horizontalMovement;
    }
    
    return numberOfTrees;
}

function isTree(character) {
    return character === '#';
}