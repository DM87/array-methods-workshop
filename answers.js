//Excersise 1: print positives
var numbers = [1, -1, 2, 3, -4, -5, 6];
var positives = [];

function printPositives(number){
    if (number > 0) {
        positives.push(number);
    }
}

numbers.forEach(printPositives);

//console.log(positives);

function getPositives(number) {
    return number > 0;
}
var positiveArray = numbers.filter(getPositives);
console.log(positiveArray)
