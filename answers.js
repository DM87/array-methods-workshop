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

//excercise 5
function countVowels(string){
    var vowels = ['a','e','i','o','u'];
    var array = string.split('');

    
    return array.reduce(function match(acc, letter) {
        if (vowels.indexOf(letter) > 0) {
        acc++
        }
        return acc;
    },0);
}

//console.log(countVowels('testing this sentence'));

//excercise 6
var numbersArray = [1, 0, 2, 3, -4, -5, 6];

function limits(array){
    var lowes = array.reduce(function(acc, num){
        if (acc < num) {
            return acc;
        } else {
            return num;
        }
    })
    var highes = array.reduce(function(acc, num){
        if (acc > num) {
            return acc;
        } else {
            return num;
        }
    })
    var result = {
        lowest: lowes,
        highest: highes
    }
    return result
}
//console.log(limits(numbersArray))

/*function limitsExp(array){
    var lowest = array.reduce(function(acc, num){
        if (acc < num) {
            return acc;
        } else {
            return num;
        }
    })
    var slowest = array.reduce(function(acc, num){
        if (acc > lowest && acc < num) {
            return acc;
        } else {
            return num;
        }
    })
    var highest = array.reduce(function(acc, num){
        if (acc > num) {
            return acc;
        } else {
            return num;
        }
    })
    var shighest = array.reduce(function(acc, num){
        if (acc < highest && acc > num) {
            return acc;
        } else {
            return num;
        }
    })
    var result = {
        lowest: lowest,
        secondLow: slowest,
        highest: highest,
        secondhighest: shighest
    }
    return result
}*/

//excercise 7 unable to complete/ get comprehendable help
var numbersArray = [1, 0, 2, 3, -4, -5, 6];

function limits2(array){
    
    var results = {
        highest: -Infinity,
        secondhighest: -Infinity,
        lowest: Infinity,
        secondLow: Infinity
    };
    
    return array.reduce(function (acc, val){
        if (val > acc.highest){
            acc.secondhighest = acc.highest;
            acc.highest = val;
        } else if (val > acc.secondhighest) {
            acc.secondhighest = val;
        };
        if (val < acc.lowest) {
            acc.secondLow = acc.lowest;
            acc.lowest = val;
        } else if (val > acc.secondLow) {
            acc.secondLow = val;    
        }
    }, results)}

console.log(limits2(numbersArray))