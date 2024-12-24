// Otteniamo gli elementi dal DOM (Document Object Model), posso interagire con la struttura della pagina web per modificarla dinamicamente.
const estraiButton = document.getElementById('estrai');
const numeroEstratto = document.getElementById('numero_estratto');
const gridItems = document.querySelectorAll('.grid-item');
const risultatiDiv = document.getElementById('risultati');
const terminaButton = document.getElementById('termina');

// Griglia con numeri e array per tenere traccia dei numeri estratti (costante)
const gridArray = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45],
    [46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55],
    [56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65],
    [66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75],
    [76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85],
    [86, 87, 88, 89, 90]
];

// Array per tenere traccia dei numeri estratti (variabile)
let numeriEstratti = [];  

// Funzione per estrarre un numero casuale
function estraiNumero() {

    // Genera un numero casuale tra 1 e 90
    const numeroCasuale = Math.floor(Math.random() * 90) + 1;

    // Verifica che il numero non sia già stato estratto
    if (numeriEstratti.includes(numeroCasuale)) {
        estraiNumero();
        return;
    }

    // Aggiungi il numero estratto all'array dei numeri estratti
    numeriEstratti.push(numeroCasuale);

    // Mostra il numero estratto nella casella
    numeroEstratto.textContent = numeroCasuale;

    // Trova e colora il numero corrispondente nella griglia
    const numeroSelezionato = Array.from(gridItems).find(item => item.textContent == numeroCasuale);
    if (numeroSelezionato) {
        numeroSelezionato.style.backgroundColor = 'red';
        numeroSelezionato.style.color = 'white';
    }

    // Verifica se una combinazione è stata raggiunta
    controllaCombinazioni();

}

// Funzione per controllare le combinazioni
function controllaCombinazioni() {

    // Controlla Ambo, Terno, Quaterna, Cinquina, Tombola
    gridArray.forEach((riga, index) => {
        const numeriRiga = riga;
        const numeriEstrattiRiga = numeriEstratti.filter(num => numeriRiga.includes(num));

        // Verifica se una delle combinazioni è stata raggiunta
        if (numeriEstrattiRiga.length === 2) {
            mostraMessaggio('Hai fatto Ambo!');
        } else if (numeriEstrattiRiga.length === 3) {
            mostraMessaggio('Hai fatto Terno!');
        } else if (numeriEstrattiRiga.length === 4) {
            mostraMessaggio('Hai fatto Quaterna!');
        } else if (numeriEstrattiRiga.length === 5) {
            mostraMessaggio('Hai fatto Cinquina!');
        }
        
    });

    // Controlla se la Tombola è stata raggiunta
    if (numeriEstratti.length === 90) {
        mostraMessaggio('Hai fatto Tombola!');
    }
}

// Funzione per mostrare il messaggio della combinazione vinta
function mostraMessaggio(messaggio) {

    // Rimuovi eventuali messaggi precedenti
    const messaggioPrecedente = risultatiDiv.querySelector('h2');
    if (messaggioPrecedente) {
        messaggioPrecedente.remove();
    }

    // regole del messaggio
    const messaggioDiv = document.createElement('h2');
    messaggioDiv.textContent = messaggio;
    messaggioDiv.style.color = 'white';
    messaggioDiv.style.fontSize = '2vw';
    messaggioDiv.style.textAlign = 'center';
    messaggioDiv.style.justifyContent = 'flex-end';
    messaggioDiv.style.marginTop = '40px';
    messaggioDiv.style.backgroundColor = '#f7a001';
    messaggioDiv.style.padding = '10px';
    messaggioDiv.style.borderRadius = '10px';

    // Aggiungi il messaggio al div dei risultati
    risultatiDiv.appendChild(messaggioDiv);   
}

// Funzione per resettare il gioco
function resettaGioco() {
    // Ripristina la griglia (rimuovi i colori)
    gridItems.forEach(item => {
        item.style.backgroundColor = '';
        item.style.color = '';
    });

    // Svuota l'array dei numeri estratti
    numeriEstratti = [];

    // Rimuovi il numero estratto dalla casella
    numeroEstratto.textContent = '';

    // Rimuovi eventuali messaggi di vittoria
    const messaggiPrecedenti = risultatiDiv.querySelectorAll('h2');
    messaggiPrecedenti.forEach(messaggio => messaggio.remove());
}

// Aggiungi l'evento al bottone "Estrai"
estraiButton.addEventListener('click', estraiNumero);

// Aggiungi l'evento al bottone "Termina"
terminaButton.addEventListener('click', resettaGioco);