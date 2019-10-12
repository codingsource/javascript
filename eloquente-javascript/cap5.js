/**
 * Capítulo 5
 * Funções-de-ordem-superior
 */
// var cap4 =  require('./cap4.js');

var SCRIPTS = require("./scripts.js");
var ANCESTRY_FILE = require("./ancestry.js");

var total = 0,
    count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}

console.log(total);
console.log("");

// console.log(sum(range(0, 9, 2)));
// nao consegui importar a funcao para utilizalas
console.log("");

//ARRAY DE TESTE
var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
    var current = array[i];
    console.log(current);
}
console.log("");

function logEach(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
console.log("");

var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
console.log(JSON.parse(string).born);

// var scripts = JSON.stringify(SCRIPTS);
var ancestry = JSON.parse(ANCESTRY_FILE);

// logEach(ancestry);

console.log("");
console.log(ancestry.length);

console.log("");

function filter(array, test){
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i])) {
            passed.push(array[i]);
        }
    }
    return passed;
}

console.log(filter(ancestry, function(person) {
    return person.born > 1900 && person.born < 1925;
}));