// ES1 Scrivi una funzione che prenda due parametri, base e altezza, e restituisca l'area del rettangolo corrispondente

const areaRettangolo = (base, altezza) => {
  return base * altezza;
};

console.log("ES.1-->", areaRettangolo(5, 6));

// ES2 Scrivi una funzione che prenda un parametro numero e restituisca true se il numero è pari, altrimenti restituisca false

const isEven = (numero) => {
  return numero % 2 === 0;
};

console.log("ES.2-->", isEven(5));
console.log("ES.2-->", isEven(4));

// ES3 Scrivi una funzione che prenda due parametri di tipo stringa e restituisca la loro concatenazione

const concatString = (stringa1, stringa2) => {
  return stringa1 + stringa2;
};

console.log("ES.3-->", concatString("Ciao a tutti,", "sono Ludovico"));

// ES8 Scrivi una funzione che prenda un array di numeri come parametro e restituisca un oggetto con le proprietà "massimo" e "minimo" che rappresentano rispettivamente il valore massimo e il valore minimo dell'array

const arrayMinMax = (array) => {
  return {
    massimo: Math.max(...array),
    minimo: Math.min(...array),
  };
};

console.log("ES.8-->", arrayMinMax([1, 2, 3, 4, 5]));

// ES9 Scrivi una funzione che prenda una stringa come parametro e restituisca il numero di vocali presenti nella stringa

const vocali = (stringa) => {
  return stringa.match(/[aeiou]/gi).length;
};

const vocali2 = (stringa) => {
  let contatore = 0;
  for (let i = 0; i < stringa.length; i++) {
    if (
      stringa[i] === "a" ||
      stringa[i] === "e" ||
      stringa[i] === "i" ||
      stringa[i] === "o" ||
      stringa[i] === "u"
    ) {
      contatore++;
    }
  }
  return contatore;
};

console.log("ES.9-->", vocali("Ciao a tutti, sono Ludovico"));
console.log("ES.9-->", vocali2("Ciao a tutti, sono Ludovico"));

// ES10Scrivi una funzione che prenda un array di numeri come parametro e restituisca la media di tutti gli elementi

const media = (array) => {
  return array.reduce((acc, curr) => acc + curr, 0) / array.length;
};

console.log("ES.10-->", media([1, 2, 3, 4, 5]));
