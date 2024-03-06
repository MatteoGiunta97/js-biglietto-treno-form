// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

/*
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
*/




// Quando l'utente clicca sul bottone leggo i valori delle input
const calcButton = document.querySelector('#calc-btn');
calcButton.addEventListener('click', function() {

    // Leggo i valori
    const customerKms = parseInt(document.querySelector('#customer-Kms').value);
    const customerAge = parseInt(document.querySelector('#customer-Age').value);

    //Calcolo il prezzo standard del biglietto
    const pricePerKm = 0.21;
    const ticketBasePrice = customerKms * pricePerKm;

    //Calcolo il prezzo scontato in base all'età
    let ticketDiscount;
    let ticketDiscountPrice;
    
    if (customerAge < 18) {
        ticketDiscount = (ticketBasePrice / 100) * 20;
        ticketDiscountPrice = (ticketBasePrice - ticketDiscount);
    } else if (customerAge > 65) {
        ticketDiscount = (ticketBasePrice / 100) * 40;
        ticketDiscountPrice = ticketBasePrice - ticketDiscount;
    } else {
        ticketDiscountPrice = ticketBasePrice;
    }
    
    //Riduco a massimo 2 cifre decimali il prezzo finale e lo ritorno al cliente
    const finalPrice = Math.round(ticketDiscountPrice * 100) / 100;
    document.getElementById('final-price').innerHTML = "Totale: €" + finalPrice;
    });
    
    
    
    