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

// Create a function value f
var f = function (a) {
    console.log(a + 2);
}

// Declare g to be a function
function g(a, b) {
    return a * b * 3.5;
}

// Exercicio
console.log("Exercícios \n Retorna o menor valor");

function min(n1, n2) {
    return Math.min(n1, n2);
}
console.log(min(10, 2));

console.log("\n Retorna o maior valor");

function max(n1, n2) {
    return Math.max(n1, n2);
}
console.log(max(0, -10));

console.log("Recursão para definir se valor passado e par ou impar");

function isEven(valor) {
    function even(valor) {
        if (valor == 0) {
            return true;
        } else if (valor == 1) {
            return false;
        } else {
            return even(valor = valor - 2);
        }
    }
    return even(valor);
}

console.log(isEven(50));
console.log(isEven(75));
// console.log(isEven(-1));

console.log("CountBs 'B' from string");

function countBs(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === "B") {
            count++;
        }
    }
    return count;
}
console.log(countBs("BBC"));

function countChart(string, char) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

console.log(countChart("kakkerlak", "k"));

console.log("Conjunto de dados!");
var listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[1]);
console.log(listOfNumbers[1 - 1]);

var doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

var mack = [];
mack.push("Mack");
mack.push("the", "knife");
console.log(mack);
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack);

var day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running", "television"]
};

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

var descripitions = {
    work: "Went to work",
    "touched tree": "Thouched a tree"
}

var anObject = {
    left: 1,
    right: 2
};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

var journal = [{
        events: ["work", "thouched tree", "pizza", "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower", "lasanga", "touched tree", " brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts", "beer"],
        squirrel: true
    }
];