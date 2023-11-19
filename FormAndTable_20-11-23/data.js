export class Book {
  constructor(titolo, genere, trama, autore) {
    this.titolo = titolo;
    this.genere = genere;
    this.trama = trama;
    this.autore = autore;
  }
}

// Create an array of Book objects
export const books = [
  new Book(
    "Il Signore degli Anelli",
    "Fantasy",
    "Un anello per dominarli tutti...",
    "J.R.R. Tolkien"
  ),
  new Book(
    "1984",
    "Dystopian",
    "A totalitarian regime controls everything.",
    "George Orwell"
  ),
  new Book(
    "Orgoglio e Pregiudizio",
    "Romance",
    "Mr. Darcy and Elizabeth Bennet navigate societal expectations.",
    "Jane Austen"
  ),
  new Book(
    "Cronache di Narnia",
    "Fantasy",
    "Children discover a magical world through a wardrobe.",
    "C.S. Lewis"
  ),
];
