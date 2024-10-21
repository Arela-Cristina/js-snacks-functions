/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numOfVowels(word) {
    //nuovo array per pushare le vocali
    const vowels = [];
    //ciclo ogni lettera della parola
    for (let i = 0; i < word.length; i++) {
        let element = word[i];
        console.log(element);
        //cerco le vocali che si includono nella cadena de testo 'aeiou' 
        if ("aeiou".includes(element)) {
            //pusho i risultati//
            vowels.push(element);
        }
    }
    //mi faccio ritornare il output richiesto
    return console.log(`${word} : ${vowels.length} (${vowels})`);
}

// Invoca la funzione qui e stampa il risultato in console
numOfVowels('javascript')


//Risultato atteso se si passa 'javascript': 3 (a, a, i)