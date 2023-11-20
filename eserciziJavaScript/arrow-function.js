// ES1 Scrivi una arrow function che prenda due parametri numerici e restituisca la loro somma

const sum = (a, b) => a + b;

console.log("ES.1-->", sum(5, 9));

// ES2 Scrivi una arrow function che prenda un parametro numerico e restituisca il quadrato del numero.

const quadrato = (n) => n * n;

console.log("ES.2-->", quadrato(5));

// ES3 Scrivi una arrow function che prenda un parametro numerico e restituisca true se il numero è positivo, altrimenti restituisca false

const positivo = (n) => n > 0;

console.log("ES.3-->", positivo(5));
console.log("ES.3-->", positivo(-5));

// ES8 Scrivi una arrow function che prenda due parametri numerici, minimo e massimo, e restituisca un numero casuale compreso tra il valore minimo e il valore massimo.

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log("ES.8-->", random(1, 10));

// ES9 Scrivi una arrow function che prenda un array di stringhe come parametro e restituisca la concatenazione di tutti gli elementi dell'array.

const concat = (array) => array.join("");

console.log("ES.9-->", concat(["ciao", "come", "va"]));

// ES10 Scrivi una arrow function che prenda due parametri, una parola e una lunghezza, e restituisca true se la parola è più lunga della lunghezza specificata, altrimenti restituisca false.

const isLonger = (word, length) => word.length > length;

console.log("ES.10-->", isLonger("ciao", 2)); // true
console.log("ES.10-->", isLonger("ciao", 4)); // false
