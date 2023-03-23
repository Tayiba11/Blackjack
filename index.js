// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
let player = {
    name: "Tayiba",
    chips: 145,
    // hi: function(){
    //     console.log("Hellow")
    // }

 }

// player.hi();

let cards = []

let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    
    let randomNumber = Math.floor(Math.random() * 13 ) + 1;
    if(randomNumber > 10){
        return 10;
     }
     else if( randomNumber === 1){
        return 11;
     }
     else{
        return randomNumber;
     }
    
     

}

function startGame(){

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]

    sum = firstCard + secondCard;

    isAlive = true;


    renderGame()

}

function renderGame(){
    cardsEl.textContent = "Cards: " ;

    for(let i = 0; i < cards.length; i++){
       cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20){
        message = "Do you want to draw a new cards?";
    }
    
    else if(sum === 21){
        message = "You have got Blackjack";
        hasBlackJack = true;
    }
    
    else{
        message = "You are out of the game";
        isAlive = false;
    }
    
    
    messageEl.textContent = message;
    

}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard)
    console.log(cards)
    renderGame()

    }
    
}


// function rollDice(){

//     let randomNumber = Math.floor (Math.random() * 6) + 1;
//     return randomNumber;

// }

// console.log(rollDice())

// let floored = Math.floor(random);
// console.log(floored);


// let test = ["RM", "Jin", "Yoongi" , "HObi", "Jimin"]
// for (let i = 0; i < test.length; i++){
//     console.log(test[i])
// }

// let card = [3, 4,  8]
// for(let i = 0 ; i < card.length; i++){
//     console.log(card[i])
// }

// let sentence = ["hi", "be", "world", "bye", "you"]
// greetingEl = document.getElementById("greeting-el");
// // console.log(greetingEl)

// for(let i = 0; i < sentence.length; i++){

//     greetingEl.textContent += sentence[i] + " " ;
//     // console.log(greetingEl)
// }


// let player1 = 103;
// let player2 = 107;

// function totalRaceTime(){
//     return player1 + player2;
//     // console.log(player1 + player2);
// }

// let raceTime = totalRaceTime();
// console.log(raceTime);

// let hasSolvedChallenge = true;
// let hasHintsLeft = false;

// if(hasSolvedChallenge === false || hasHintsLeft === false){
//      showSolution();
// }


// function showSolution(){
//     console.log("Show Solution")
// }

// let likesDocumentaries = true;
// let likesStartups = true;

// if(likesDocumentaries === false || likesStartups === true){
//     recommendMovie();
// }

// function recommendMovie(){
//     console.log("Check out this new movie")
// }

// let castle = {
//     name:"Live like a King",
//     bedrooms: 1,
//     price: 190,
//     isAvailable: true,
//     details:["1 bedroom", "2 beds", "4 guests"]
    

// }

// console.log(castle.isAvailable);
// console.log(castle.price);
// console.log(castle.details);