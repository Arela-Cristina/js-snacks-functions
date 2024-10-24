/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
//primo parametro = array
//secondo parametro = purpose
function oneByOne(array, purpose) { //codice  parlante: getElementsFirstChar()
    //ciclo ogni elemento del mio array
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        console.log(`${i} - ${element}`);
        //ogni elemento del mio array svolge un compito-purpose
        let result = purpose(element);
        console.log(result)
    }

}

//funzione arrow function implicita que ci prende solo la prima lettera di una stringa
const firstLetter = (word) => word.charAt(0)

// Invoca la funzione qui e stampa il risultato in console
console.log(oneByOne(names, firstLetter))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
