# web-tombola

TOOMBOLA:

Ricostruire il tabellone e le funzionalità della tombola, con l’estrazione dei numeri e conseguente illuminazione dei numeri estratti.

🎯 **Obiettivo**

Ricostruire il tabellone e le funzionalità della tombola, con l’estrazione dei numeri e conseguente illuminazione dei numeri estratti!


**************************************************************************************************************************************

LOGICA JS:

<!-- input -->
-Generare un numero casuale: quando il pulsante "Estrai" viene cliccato genera un numero casuale e va a salvarlo (lo stesso numero non potrà uscire più di una volta).

<!-- elaborazione -->
-Mostrare il numero estratto: visualizza il numero nella casella "numero_estratto".
-Se il numero non era presente nei numeri estratti vado a fare un push altrimenti return.
-Trovare e colorare nel tabellone il numero corrispondente: cerca il numero nella griglia e coloralo di rosso.

<!-- output -->
-Dopo ogni estrazione, bisogna controllare se una delle combinazioni vincenti si attua:
Ambo: coprire due numeri sulla stessa riga.
Terno: coprire tre numeri sulla stessa riga.
Quaterna: coprire quattro numeri sulla stessa riga.
Cinquina: coprire cinque numeri sulla stessa riga.
Tombola: coprire tutti i numeri sulla cartella.
Se si fai apparire un messaggio di vittoria (es se tre numeri sulla stessa riga fai apparire "Hai fatto Terno" e così via).

-Con il pulsante "termina" resetto il gioco.