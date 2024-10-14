                                        //TRACCIA
//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
//- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)

//!RACCOLTA DATI
//CHIEDO DISTANZA E ETÀ
const distance = parseInt(
    prompt("Inserisci il numero di km che vuoi percorrere")
);
const age = parseInt(
    prompt("inserire età del passeggiero")
);
//INSERISCO PREZZO PER IL SINGOLO KM
const priceForKm = 0.21;

//INSERISCO GLI SCONTI UNDER 18 E OVER 65
const discountPercentageUnder18 = 20

const discountPercentageOver65 = 40



//ELABORAZIONE






//OUTPUT