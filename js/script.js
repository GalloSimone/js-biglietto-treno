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

//CREAZIONE OUTPUT
let output;

//CREAZIONE PREZZO TOTALE
let totPrice;

//!ELABORAZIONE

//VALIDITÀ IMPUT ETÀ E KM
const isDistanceValid = !isNaN(distance) && distance > 0;


const isAgeValid = !isNaN(age) && age > 0;

if(isDistanceValid && isAgeValid) {

totPrice = distance * priceForKm;  

output = totPrice;


if(age<18) {
    totPrice = totPrice - totPrice * (discountPercentageUnder18/100)

    output = totPrice
}


if(age>= 65){
    totPrice = totPrice - totPrice * (discountPercentageOver65/100)  
    
    output = totPrice
}

//!OUTPUT

alert(`Il prezzo del biglietto è di: ${output.toFixed(2)}€`);
}

else{
    alert("i dati inseriti non sono corretti")
}