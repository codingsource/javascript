/**
 * Capítulo 5
 * Funções-de-ordem-superior
 */
require('./cap4.js');

var total = 0,
    count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}

console.log(total);

console.log("");

console.log(sum(range(0, 9, 2)));
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
