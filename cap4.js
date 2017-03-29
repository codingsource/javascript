/**
 * Capítulo 3
 * Funções
 */

// 1 Parameter
var square = function (x) {
    return x * x;
}
console.log(square(12));

// Sem Parameter
var makeNoise = function () {
    console.log("Pling!");
}
makeNoise();

var power = function (base, exponent) {
    if (exponent == undefined)
        exponent = 2;
    var result = 1;
    for (var i = 0; i < exponent; i++)
        result *= base;
    return result;
}
console.log(power(4));

console.log(power(4, 3));

// ESCOPO ANINHADO
var landscape = function () {
    var result = "";
    var flat = function (size) {
        for (var i = 0; i < size; i++)
            result += "_";
    };
    var mountain = function (size) {
        result += "/";
        for (var i = 0; i < size; i++)
            result += "'";
        result += "\\";
    };

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
}
console.log(landscape());


//Bloco livre
var something = 1; {
    var something = 2;
}

function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

// Closure
function wrapValue(n) {
    var localVariable = n;
    return function () {
        return localVariable;
    };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

var twice = multiplier(2);
console.log(twice(5));

// Recursão
function power(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}

console.log(power(2, 3));

function findSolution(target) {
    function find(start, history) {
        if (start == target) {
            return history;
        } else if (start > target) {
            return null;
        } else {
            return find(start + 5, "(" + history + " + 5)") ||
                find(start * 3, "(" + history + " * 3)");
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));


// Função Crescente
function zeroPad(number, width) {
    var string = String(number);
    while (string.length < width)
        string = "0" + string;
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(zeroPad(cows, 3) + " Cows");
    console.log(zeroPad(chickens, 3) + " Chickens");
    console.log(zeroPad(pigs, 3) + " Pigs");
}

printFarmInventory(7, 11, 3);