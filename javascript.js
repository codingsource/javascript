prompt("teste", "....");

confirm("Hello JavaScript");

var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
    alert("Seu número é a raiz quadrada de " + theNumber * theNumber);
else
    alert("Ei! Por que você não me deu um número?");

var num = Number(prompt("Digite um nuúmero", " "));
if (num < 0)
    alert("Pequeno");
else if (num < 100)
    alert("Médio");
else
    alert("Grande");

var number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

var result = 1;
var counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result)

do {
    var name = prompt("Who are you");
} while (!name) {
    console.log(name);
}

var number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

do {
    var name = prompt("Who are you");
} while (!name) {
    console.log(name);
}

for (var i = 0; i < 10; i++) {
    console.log("valor do i " + i);
}

var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
    console.log(result);
}
/**
 * Verifica se número e maior que 20 e se é divisivel por 7
 */
for (var current = 20;; current++) {
    if (current % 7 == 0)
        break;
}
console.log(current);

switch (prompt("Como está  tempo")) {
    case "chuvoso":
        console.log("Lembre-se de trazer um guarda-chuva!")
        break;
    case "ensolarado":
        console.log("Vista roupa leves!");
    case "nublado":
        console.log("Vá lá fora!");
        break;
    default:
        console.log("Tempo desconhecido");
        break;
}

var result = ""
for (var i = 0; i <= 7; i++) {
	result += "#";
	console.log(result);
}

for (var i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)){
		console.log("FizzBuzz");
	} else if (i % 3 == 0) {
    	console.log("Fizz");
    } else if (i % 5 == 0) {
		console.log("Buzz");
	}
    console.log(i);
}