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
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(2, 10));

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