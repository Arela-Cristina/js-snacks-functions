/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// Dichiara la funzione qui.
//dobbiamo fare una funzione con due parametri, un array ed un propossito
//parametro 1 = array
//parametro 2 = lettera
function oneByOne(array, letter) {
    //array vuoto per pushare i risultati
    let newArray = [];
    //cicliamo ogni elemento del array
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        console.log(element);
        //proposito, solo parole che iniziano con la stessa lettera
        let firstChar = element.charAt(0);
        //..saranno pushate nel newArray
        if (firstChar.toLowerCase() === letter.toLowerCase() ) {
            newArray.push(element);
        }
    }
    console.log(newArray);//ritorna un nuovo array
    return newArray
}

// Invoca la funzione qui e stampa il risultato in console
console.log(oneByOne(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

//consigli
//megliorare il naiming.
//la funzione sempre deve ritornare qualcosa, se no uscira undefined