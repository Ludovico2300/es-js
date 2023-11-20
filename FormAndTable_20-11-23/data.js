export class Book {
  constructor(titolo, genere, trama, autore) {
    this.titolo = titolo;
    this.genere = genere;
    this.trama = trama;
    this.autore = autore;
  }
}

export const books = [
  new Book(
    "Il Signore degli Anelli",
    "Fantasy",
    "Un anello per dominarli tutti...",
    "J.R.R. Tolkien"
  ),
  new Book(
    "1984",
    "Distopico",
    "Un regime totalitario controlla ogni cosa.",
    "George Orwell"
  ),
  new Book("Dico Tutto", "Biografia", "Questa è una biografia", "A. Cassano"),
  new Book(
    "Cronache di Narnia",
    "Fantasy",
    "Un magico mondo dentro un 'comune' armadio.",
    "C.S. Lewis"
  ),
];
