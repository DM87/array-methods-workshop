//Excersise 1: print positives
var numbers = [1, 0, 2, 3, -4, -5, 6];
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
var positiveArray = numbers.filter(getPositives)
//console.log(positiveArray)


//excersise 3
function pos(number) {if (number) { return number}}

function filterArray (array, x) {
    return array.filter(x);
}

var newPosArray = filterArray(numbers, pos);
//console.log(newPosArray);


//excercise 4
function longestWord(string){
    var array = string.split(' ')

   return array.reduce(function (prev,curr){
        if (prev.length > curr.length){
            return prev
        }
        else {return curr}
    });
}
//console.log(longestWord('tester test testing'))