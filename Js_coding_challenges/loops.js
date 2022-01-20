const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for(let i = 0; i < vacationSpots.length[i]; i++ ){
console.log(console.log(`I would love to visit ${vacationSpots.length[i]}`))
}


//  NESTED LOOPS

let bobsFollowers = ['ike','joe','anna','mike']
let tinasFollowers = ['John','anna','mike']
let mutualFollowers = []

for(let i = 0; i < bobsFollowers.length; i++ ){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j] ){
      mutualFollowers.push(bobsFollowers[i]);
    }
  };
};


// WHILE LOOP 1

let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

// WHILE LOOP 2

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while(currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
};


// do...while loop

let cupsOfSugarNeeded = 0;
let cupsAdded = 0

do {
  cupsAdded++;
  console.log(cupsAdded + ' cup of sugar was added' );
}while(cupsAdded <  cupsOfSugarNeeded)
