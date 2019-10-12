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

var scripts = JSON.stringify(SCRIPTS);
var scpts = JSON.parse(scripts);
var ancestry = JSON.parse(ANCESTRY_FILE);

logEach(scpts);

console.log("");
console.log(ancestry.length);

console.log("");

/* Para encontrar as pessoas no conjunto de dados
 dos ancestrais que eram jovens em 1924, a seguinte 
 função pode ser útil. Ele filtra os elementos em 
 uma matriz que não passa pelo teste. */

function filter(array, test){
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i])) {
            passed.push(array[i]);
        }
    }
    return passed;
}
/**
* Este utiliza um argumento chamado de test,
* com um valor de função, para preencher uma 
* lacuna na computação. A função test é chamada 
* para cada elemento, e o seu valor de retorno 
* determina se um elemento é incluído no array 
* retornado.
*/
console.log(filter(ancestry, function(person) {
    return person.born > 1900 && person.born < 1925;
}));

/**
 * Assim como forEach, 
 * filter é um método 
 * padrão de arrays. 
 * O exemplo define uma 
 * função só para mostrar o 
 * que ela faz internamente. 
 * A partir de agora vamos usá-lo assim:
*/
console.log("___");
console.log(ancestry.filter(function(person) {
    return person.father == "Carel Haverbeke";
}));

console.log("");