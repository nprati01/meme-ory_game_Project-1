console.log('testing')

  /*----- constants -----*/
  // 1.1 Define a constant to represent the cards and thier images
  // const CARDOBJECTS = [
  //   {src ='/assets/asset1.png'},
  //   ([src ='/assets/asset3.png']),
  //   ([src ='/assets/asset4.png']),
  //   ([src ='/assets/asset5.png']),
  //   ([src ='/assets/asset6.png']),
  //   ([src ='/assets/asset7.png']),
  //   ([src ='/assets/asset8.png']),
  //   ([src ='/assets/asset1.png']),
  //   ([src ='/assets/asset2.png']),
  //   ([src ='/assets/asset3.png']),
  //   ([src ='/assets/asset4.png']),
  //   ([src ='/assets/asset5.png']),
  //   ([src ='/assets/asset6.png']),
  //   ([src ='/assets/asset7.png']),
  //   ([src ='/assets/asset8.png']),









  /*-----  app's state variables -----*/

  //2.2) a winner variable
        //a variable to determine if player is a winner or loser
        let gameWin
  //2.3) a guess variable
  let guessesLeft
    //a variable that will count the number of guesses a player has
    //2.4) a variable that will reference the cards
    let cards= []
    //a variable that represents an array of cards to display when game starts
    //2.5) a variable that will reference card positions
    let cardPositions = []






  /*----- cached elements  -----*/
  //3.1) start game button that will shuffle cards and display the cards on the board
  const startBtnEl =document.getElementById('start-game')
  //3.1.2) a card element that will reference each card in the game
  const cardEls = document.querySelectorAll('.card')
  console.log(cardEls)
  //3.1.3) a card back element that will reference the back of each card
  const cardBackEl = document.querySelectorAll('.back')
  console.log(cardBackEl)
  //3.1.4) a card face element that will reference the front of each card
  const cardFaceEl = document.querySelectorAll('.face')
console.log(cardFaceEl)
  //3.1.5) a counter elemnt that will refernce the number of guesses the player has after each guess?
  const guessCountDown =document.getElementById('guess-count')
  //3.1.5) wrong guess message element that will display the message when a user doesnt make a match
  //3.1.6) shuffle cards button element that will shuffle cards and restart game
  const tryAgainEl =document.getElementById('restart-game')
  //3.1.7) a game winner message element that will display a message when the player wins
  //3.1.8)a game loser message element that will display a message when the user loses


  /*----- event listeners -----*/
  //creat event listener for start game button
    //this should intialize the board and the game counter
    //startBtnEl.addEventListener('click', renderBoard)


  //create event listener for when a card is clicked
        cardBackEl.forEach(function(back, idx){
          addEventListener('click', handleClick)
        })








  //create event listener for when 2 cards match
    //this should keep the two mattching cards flipped with thier face visible to the user


  //create event listener for when 2 cards dont match
    //-should make cards dissaper and populate with incorrect guess image/message
    //this should include animation for flipping card back over

  //create event listener for restart game button
    //this should include an animation for shuffling the cards on screen



  /*----- functions -----*/
//Function to start game
init()
function init(){
    board = [
        [0, 0, 0, 0], //row
        [0, 0, 0, 0], //row 1
        [0, 0, 0, 0], // row 2
        [0, 0, 0, 0] //row 4

    ]

gameWin = null
guessLeft = 18
render()
}
//function for clicked card
function handleClick(evt){
if 
  }






//function for guess counter


//function for correct guesses



//function for incorrect guesses



//function for game winner




//function to shuffle cards


//render functions
function render(){
    console.log('calling render')
    renderBoard()
}
function renderBoard(){

// let backFaceArray = Array.from(CARDOBJECTS)
// CARDOBJECTS.forEach(function(src,idx){

// })


// console.log(backFaceArray)


let cardsArray = Array.from(cardEls)
    cardEls.forEach(function(card, idx) {




        //card.innerHTML ="random image will go here"



})
    }


    // cardEls.forEach(function(cardsArray, rowIdx) {
    //   cardsArray.forEach(function(cardValue, columnIdx){
    //     const cardId = `gamecard${rowIdx}${columnIdx}`
    //     const cardEl =document.getElementById(cardId)
    //     cardEl.style.backgroundImage= CARDOBJECTS[cardValue]
