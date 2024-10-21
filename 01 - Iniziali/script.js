/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
//primo parametro = array
//secondo parametro = purpose
function oneByOne(array, purpose) {
    //ciclo ogni elemento del mio array
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        console.log(`${i} - ${element}`);
    }

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]