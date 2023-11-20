// ES1 Crea un oggetto "persona" con le proprietà "nome" e "età".

const persona = {
  nome: "Ludovico",
  eta: "22",
};

class Persona {
  constructor(nome, eta) {
    this.nome = nome;
    this.eta = eta;
  }
}

const persona1 = new Persona("Ludovico", 22);

console.log("ES.1-->", persona);
console.log("ES.1-->", persona1);

// ES2 Accedi alle proprietà "nome" e "età" dell'oggetto "persona" e stampale in console.

console.log("ES.2-->", persona.nome, persona.eta);

// ES3 Modifica la proprietà "eta" dell'oggetto "persona" e stampa l'oggetto aggiornato in console

persona.eta = 23;
console.log("ES.3-->", persona);

// ES8 Crea una copia dell'oggetto "persona" in un nuovo oggetto "personaCopia" e stampa entrambi gli oggetti in console

const personaCopia = { ...persona };

console.log("ES.8-->", personaCopia, persona);

// ES9 Conta il numero di proprietà presenti nell'oggetto "persona" e stampa il conteggio in console

const numeroProprietà = Object.keys(persona).length;

console.log("ES.9-->", numeroProprietà);

// ES10 Crea un oggetto "libro" con proprietà come "titolo", "autore" e un oggetto annidato "editore" con le proprietà "nome" e "anno".

const libro = {
  titolo: "Il mio libro",
  autore: "Ludovico",
  editore: {
    nome: "Editore",
    anno: "2022",
  },
};

console.log("ES.10-->", libro);
