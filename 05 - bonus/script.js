/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const salute = (nombre) => {
    //il oggetto date ci ritorna diversi metodi per manipolare date, ore, etc
    const now = new Date();

    // ora attuale
    const hour = now.getHours();

    //dichiaro la variabile messaggio come una stringa vuota
    let message = '';
    //buongiorno se è mattina (fino alle 13),
    if (hour < 13) {
        message = `Buongiorno  ${nombre}`;
    } else if (hour < 17) {
        //buon pomeriggio se è pomeriggio (fino alle 17)
        message = `Buon Pomeriggio  ${nombre}`;
    } else if (hour >= 17) {
        //buonasera se è sera (oltre le 17)
        message = `Buona sera  ${nombre}`;
    }
    console.log(message);
}


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.