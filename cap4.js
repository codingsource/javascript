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

console.log("MUTABILIDADE");

var object1 = {
    value: 10
};
var object2 = object1;
var object3 = {
    value: 10
};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

var journal = [];

function addEntry(squirrel) {
    var entry = {events: [], squirrel: squirrel};
    for (var i = 0; i < arguments.length; i++)
        entry.events.push(arguments[i]);
    journal.push(entry);
}

addEntry(true, "work", "thouched tree", "pizza", "running", "television");

addEntry(["work", "thouched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasanga", "touched tree", " brushed teeth", false]);
addEntry(["weekend", "cycling", "break", "peanuts", "beer", true]);

var JOURNAL = require("./04_data.js");

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));

function hasEvent(event, entry) {
    return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
    var table = [0, 0, 0, 0];
    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i],
            index = 0;
        if (hasEvent(event, entry)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}
console.log("Aqui");
console.log(tableFor("pizza", JOURNAL));

var map = {};

function storePhi(event, phi) {
    map[event] = phi;
}
storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
console.log("touched tree");

for (var event in map)
    console.log("The correlation for '" + event + "' is " + map[event]);

function gatherCorrelations(journal) {
    var phis = {};
    for (var entry = 0; entry < journal.length; entry++) {
        var events = journal[entry].events;
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (!(event in phis)) {
                phis[event] = phi(tableFor(event, journal));
            }
        }
    }
    return phis;
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);

for (var event in correlations)
    console.log(event + ": " + correlations[event]);

console.log("");

for (var event in correlations) {
    var correlation = correlations[event];
    if (correlation > 0.1 || correlation < -0.1)
        console.log(event + ": " + correlation);
}

console.log("");

for (var i = 0; i < JOURNAL.length; i++) {
    var entry = JOURNAL[i];
    if (hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry))
        entry.events.push("peanut teeth");
}

console.log(phi(tableFor("peanut teeth", JOURNAL)));
console.log("");

var todoList = [];
function rememberTo(task) {
    todoList.push(task);
}
function whatIsNext() {
    return todoList.shift();
}
function urgentlyRememberTo(task) {
    todoList.unshift(task);
}

rememberTo("eat");

console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

console.log("");

console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));

function remove(array, index) {
    return array.slice(0, index)
        .concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));

var myString = "Fibo";
myString.myProperty = "value";
console.log(myString.myProperty);

console.log("coconuts".slice(4, 7));
console.log("coconut".indexOf("u"));
console.log("one two three".indexOf("ee"));
console.log(" okay \n ".trim());
console.log("");

var string = "abc";
console.log(string.charAt(0));
console.log(string[1]);

console.log("");
console.log("O Objeto Arguments");

function noArguments() {}
noArguments(1, 2, 3);
function threeArguments(a, b, c) {}
threeArguments();

function argumentCunter() {
    console.log("You gave me", arguments.length, "arguments.");
}
argumentCunter("Straw man", "Tautology", "Ad hominem");