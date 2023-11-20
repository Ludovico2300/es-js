import { Book, books } from "../data.js";
var queryParams = new URLSearchParams(location.search); // "?campo1=valore&campo2=calore"
// { campo1 : "valore"}
console.log(location.search, queryParams.toString());
let newBook = new Book();
queryParams.forEach((value, key) => {
  newBook[key] = value;
});
// aggiungo il nuovo libro all'array
books.push(newBook);
console.log("hai inserito un libro", newBook);

function deleteBook(bookTitle) {
  const index = books.findIndex((book) => book.titolo === bookTitle);
  if (index !== -1) {
    books.splice(index, 1); // Rimuovi il libro dall'array
  }
}

function displayBooks() {
  console.log(books);
  const tableBody = document.querySelector("#booksTable tbody");

  // resetto la tabella
  tableBody.innerHTML = "";

  // popolo la tabella
  for (const book of books) {
    const row = tableBody.insertRow();

    // aggiungo un listener per visualizzare l'alert con Autore e Trama al click sul titolo
    const rowTitleInfo = document.createElement("div");
    rowTitleInfo.textContent = book.titolo;
    rowTitleInfo.addEventListener("click", function () {
      alert(`Autore: ${book.autore}\nTrama: ${book.trama}`);
    });
    row.insertCell(0).appendChild(rowTitleInfo);
    row.insertCell(1).textContent = book.genere;
    row.insertCell(2).textContent = book.autore;

    // Bottone di eliminazione
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Elimina";
    deleteButton.addEventListener("click", function () {
      deleteBook(book.titolo);
      displayBooks(); // Aggiorna la visualizzazione dopo l'eliminazione
    });
    row.insertCell(3).appendChild(deleteButton);
  }
}

// visualizzo i libri nel DOM
displayBooks();
