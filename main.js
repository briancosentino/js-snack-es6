/* Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.


Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */
const bikeEl = document.getElementById('bike')
const bikes = [
    {
        name : 'BMX',
        weight : 15
        
    },
    {
        name : 'Mountain bike',
        weight : 17
        
    },
    {
        name : 'BMX',
        weight : 14
        
    },
]

bikes.sort((a, b)=> a.weight - b.weight);
console.log(bikes);

const minorWeight = bikes[0].weight
bikeEl.innerText = minorWeight;

//Second snack
const footballTeam = [
    {
        name : 'Inter',
        points : 0,
        penalty : 0
    },
    {
        name : 'Juventus',
        points : 0,
        penalty : 0
    },
    {
        name : 'Milan',
        points : 0,
        penalty : 0
    },
    {
        name : 'Real Madrid',
        points : 0,
        penalty : 0
    },
]
const newList = []
function generateRandomNumber () {
    return Math.floor(Math.random() * (15 - 1)) + 1
   };

for (let i = 0; i< footballTeam.length; i++){
    const thisTeam = footballTeam[i];
    thisTeam.points = generateRandomNumber();
    thisTeam.penalty = generateRandomNumber();
    newList.push(`{${thisTeam.name}, ${thisTeam.penalty}}`)
   }
   console.log(footballTeam);
   console.log(newList);
   
   