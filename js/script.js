//console.log('ciao belli');
//SNACK 1
// A partire da un array di stringhe, crea un secondo array formattando le
// stringhe del primo array in minuscolo e con l'iniziale maiuscola.
// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

// 1 primo arr
const arrayStringa = ['sergio' , 'MARIO', 'RiCCardo', 'MiRko'];
console.table(arrayStringa);

// 2 crea un secondo array mettendo apposto tutte le scritte dle primo array | map per crerare nuovo arr
const newStringa = arrayStringa.map(element => 
    // charAt restituisce una nuova stringa che consiste nella singola unità di codice UTF-16 situata nell'offset specificato nella stringa.
    // `The character at index ${index} is ${sentence.charAt(index)}`    => .toLocaleUpperCase() + arrayStringa[index].toLocaleLowerCase()

    `${element[0].toUpperCase()}${element.slice(1).toLowerCase()}`);
console.log(newStringa);













































//Pome

//SNACK 1
// Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, 
// una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.
/*

const animali = [
    {
        nome: 'leone', 
        famiglia: 'falidi',
        classe: 'mammiferi',
    },
    {
        nome: 'cane', 
        famiglia: 'canidi', 
        classe: 'mammiferi'
    },
    {
        nome: 'gallina',
         famiglia: 'fasianidi', 
         classe: 'uccelli'
    },
    
]
const listaMammiferi = animali.filter((mammiferi) =>{
  return mammiferi.classe === 'mammiferi'
});
console.log(animali);
console.log(listaMammiferi)
*/

// SNACK 2
// Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome,
//un cognome e un'età.
// Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome 
//e l'indicazione se può guidare, in base all'età.
/*
const persone = [
  
    persona1 = {
        nome: 'pippo',
        cognome:'rossi',
        eta: 25,
    },
    persona2 = {
        nome: 'pippo',
        cognome:'rossi',
        eta: 25,
    },
    persona3 = {
        nome: 'pippo',
        cognome:'rossi',
        eta: 13,
    },
    persona4 = {
        nome: 'pippo',
        cognome:'rossi',
        eta: 18,
    },
    persona5 = {
        nome: 'pippo',
        cognome:'rossi',
        eta: 15,
    },
]
console.log(persone);

const guidare = persone.map((element) =>{

    if(element.eta >= 18) {
        return `${element.nome} ${element.cognome} puo guidare`
    } else {
        return `${element.nome} ${element.cognome} non puo guidare`
    }

});
console.log(guidare); 

*/
  /*            
// con il map e piu lungo

// con forEach 
const guidare = [];

persone.forEach((element) => {
    if(element.eta >=  18) {
        guidare.push({
            frase: `${element.nome} ${element.cognome} puo guidare`
        })

    } 
});
console.log(guidare);

*/
/*


const newBrand = brands.map((oggetti) => {
    // se vuoi puoi fare una var di appoggio
    // return 
    let newOggetti = {
        nome: oggetti.name.toLowerCase(),
        foundationYear :'',
    }
    return newOggetti;

});
console.log(newBrand);
*/

// SNACK 3
// Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio
//: ogni pc ha un nome, una marca, un booleano 
// che indica se esce con Windows come OS di fabbrica 
//(hasWindows: true oppure hasWindows: false), il prezzo originale ed un prezzo scontato
// Creiamo un nuovo array che indichi i pc che hanno Windows 
//e di questi andiamo a tirar fuori la differenza tra prezzo originale e scontato.
/*
const pc = [

    {
        nome:'pippo',
        marca:'Hp',
        hasWindows: true,
        prezzoOriginale: 1000,
        prezzoScontato: 650,
    },
    {
        nome:'pluto',
        marca:'Samsung',
        hasWindows: false,
        prezzoOriginale: 2000,
        prezzoScontato: 150,
    },
    {
        nome:'mela',
        marca:'Apple',
        hasWindows: true,
        prezzoOriginale: 800,
        prezzoScontato: 650,
    },
    {
        nome:'rosso',
        marca:'Hauwei',
        hasWindows: false,
        prezzoOriginale: 900,
        prezzoScontato: 620,
    },
    {
        nome:'verde',
        marca:'Sony',
        hasWindows: true,
        prezzoOriginale: 500,
        prezzoScontato: 220,
    },
];
console.log(pc);

const newPc = pc.map((element) => {
   
   return {
       ...element,
       risparmio: element.prezzoOriginale - element.prezzoScontato,
    }
    
    
})
console.table(newPc);


/**
 * // Snack 1
 Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana). 
- Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere 
  "normalizzati" (le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà
  gucci) e aggiungere, sempre in questo contesto di "clonazione", una nuova proprietà denominata "foundationYear".
   Quest'ultima proprietà conterrà l'anno (mettete un valore voi,
  è necessario inserire valore reale) in cui l'azienda è stata fondata. 
 * 
 */ 
/*
// 1 array
const brands = [
    {
        nome :'Gucci',
    },
    {
        nome: 'Fiorucci',
    },
    {
        nome:'Armani'
    },
    {
        nome:'Versace',
    },
    {
        nome: 'Valentino'
    },
    {
        nome:'Prada',
    },
    {
        nome:'Ferragamo',
    },
    {
        nome: 'Dolce e Gabbana',
    },
    {
        nome:'Benetton',
    },
    {
        nome:'Trussardi',
    },

];
console.log(brand);

// 2 fare secondo array però deve esseere normalizzato

const newBrand = brands.map((oggetti) => {
    // se vuoi puoi fare una var di appoggio
    // return 
    let newOggetti = {
        nome: oggetti.name.toLowerCase(),
        foundationYear :'',
    }
    return newOggetti;

});
console.log(newBrand);

*/

/**
 * // Snack 2
Crea un array composto da 10 automobili. 
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, 
alimentazione (benzina, diesel, gpl, elettrico, metano).
- Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina,
 nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
- Infine stampa separatamente i 3 array.
 */
/*

// step 1
const auto = [
    auto1 = {
        marca:'Mercedes',
        modello: 'classe a',
        alimentazione: 'Benzina',
    },
    auto2 = {
        marca:'Fiat',
        modello: 'Panda',
        alimentazione: 'Benzina',
    },
    auto3 = {
        marca:'Fiat',
        modello: 'Punto',
        alimentazione: 'Gpl',
    },
    auto4 = {
        marca:'BMW',
        modello: 'X5',
        alimentazione: 'Disel',
    },
    auto5 = {
        marca:'BMW',
        modello: 'Serie 1',
        alimentazione: 'Disel',
    },
    auto6 = {
        marca:'Mercedes',
        modello: 'classe',
        alimentazione: 'Metano',
    },
    auto7 = {
        marca:'Toyota',
        modello: 'Yaris',
        alimentazione: 'Eletricca',
    },
    auto8 = {
        marca:'Fiat',
        modello: '500',
        alimentazione: 'Eletricca',
    },
    auto9 = {
        marca:'Mercedes',
        modello: 'classe A',
        alimentazione: 'Disel',
    },
    auto10 = {
        marca:'Mercedes',
        modello: 'classe A',
        alimentazione: 'Metano',
    },

];
*/
/*
// SET 2 dividere in 3 arryy separati e per gruppo
// filter
const autoBenzina = auto.filter(( autoB) => {
   return autoB.alimentazione === 'Benzina'
}) 
 
const autoDisel = auto.filter((autoD) => {
    return autoD.alimentazione === 'Disel'
})

const autoTutto = auto.filter((autoT) => {
    return autoT.alimentazione !== 'Benzina' && autoT.alimentazione !== 'Disel';
})

console.log(autoBenzina);
console.log(autoDisel);
console.log(autoTutto);
*/

// Mattina
/*
Snack 1
A:
Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
- Codice giocatore
Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- l'età deve essere compresa tra 18 e 40
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali (array di lettere) e 3 cifre casuali
Stampare poi Codice giocatore, Media punti e percentuale tiri da 3 punti.
*/
/*
// 1 creare l'obj 
const giocatoreBas = {
    eta: getRandomNumber (18,40),
    mediaPunti: getRandomNumber(0,50),
    parcentualeSuccesso: getRandomNumber(0,100),
    codGiocatore: codiceGiocatore (0,6),
};

console.log(giocatoreBas);

*/

// 2 generare tramite le fun le statistiche di giocatore
// funzione numeriRandom
/*
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max - min + 1 ) + min;
}
// 3 fare arr per le lettere del giocatore
function codiceGiocatore() {
    const letGiocatore = ['C','D','E','A','N', 'B'];

    // lettere
    let lettere = '';
    let numero = '';

    // loop
    for(let i = 0; i < 3; i++ ) {
        lettere += [getRandomNumber( 0 , letGiocatore.length - 1)];
        numero += getRandomNumber(0, 9)
    }

    return lettere + numero;
}*/

/*
B:
Creare un array di 10 giocatori di basket, con le regole sopra indicate
Dopo aver creato l'array, stampa codice giocatore e media punti per ogni giocatore.

*/
/*
const giocatori = [];
 // farlo con loop non scritto a mano come hai fatto tu

for( let i = 0; i < 10; i++ ) {
    
    // si puo fare anche cosi guarda video

    giocatori.push({ 
        eta: getRandomNumber (18,40),
        mediaPunti: getRandomNumber(0,50),
        parcentualeSuccesso: getRandomNumber(0,100),
        codGiocatore: codiceGiocatore (0,6),
    });
}

console.table(giocatori);

//           arrow function   sotto per stampare i giocatori con ( `` ) loro due e poi ${ e poi dentro l'interpolazione }
giocatori.forEach((element) => {
    console.log(`Codice giocatore: ${element.codGiocatore} | Media punti: ${element.mediaPunti}` );
});
*/
/**
 * C:
   Creare un nuovo array con i giocatori che hanno una media di punti superiore a 25 e
   la percentuale di successo per i tiri da 3 punti superiore all’50%.
 */
/* con filter non con map
   // 1 creare un nuovo array
const newGiocatori = giocatori.map((element, index) => {
    
     

const newGiocatori = giocatori.filter( (element) => {
    return element.mediaPunti < 25 && element.parcentualeSuccesso > 50;
})
*/ 
/*
console.table(newGiocatori); 
*/
/**
 * Snack
  A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
  Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
 */
// 1 ar
/*
const numeri = [1, 2, 3, 4, 5];
console.log(numeri);

// 2 arr che pero i numeri cambiano
const newNumeri = numeri.map( (element) => {

    //decisione 
    
    return element * element;
})
console.log(newNumeri);
*/
/**
 * SCRITTO PIU CORTO ESSENDO INPLICITO 
 * const newNumeri = numeri.map( element => element * element );
 */
