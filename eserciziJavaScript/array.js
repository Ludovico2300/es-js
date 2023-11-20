// ES1 Scrivi un programma che prenda un array di numeri e calcoli la somma di tutti gli elementi

const numbers = [23, 4, 8, 3, 20, 11, 0, 12, 7, 9];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("ES.1-->", sum);

// ES2 Scrivi un programma che prenda un array di numeri e trovi il valore massimo

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("ES.2-->", max);

// ES3 Scrivi un programma che prenda un array di numeri e trovi il valore minimo

let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("ES.3-->", min);

// ES8 Scrivi un programma che prenda un array e inverta l'ordine degli elementi

let reverse = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  reverse.push(numbers[i]);
}

let reverse2 = numbers.reverse();

console.log("ES.8-->", reverse);
console.log("ES.8-->", reverse2);

// ES9 Scrivi un programma che prenda un array di stringhe e calcoli la lunghezza media delle stringhe presentI

const strings = ["ciao", "come", "va"];

let average = 0;

for (let i = 0; i < strings.length; i++) {
  average += strings[i].length;
}

average = average / strings.length;

console.log("ES.9-->", average);

// ES10 Scrivi un programma che prenda un array di parole e unisca tutti gli elementi in una singola stringa separati da uno spazio.

let sentence = "";

for (let i = 0; i < strings.length; i++) {
  sentence += strings[i] + " ";
}

let sentence2 = strings.join(" ");

console.log("ES.10-->", sentence);
console.log("ES.10-->", sentence2);
