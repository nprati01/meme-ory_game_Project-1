console.log('testing')

  /*----- constants -----*/
  //1.1 Define a constant to represent the cards and thier images
//   const cardObjects = [
//     {id:1 imagePath:'/assets/asset1.png'},
//     {id:2, imagePath:'/assets/asset2.png'},
//     {id:3, imagePath:'/assets/asset3.png'},
//     {id:4, imagePath:'/assets/asset4.png'},
//     {id:5, imagePath:'/assets/asset5.png'},
//     {id:6, imagePath:'/assets/asset6.png'},
//     {id:7, imagePath:'/assets/asset7.png'},
//     {id:8, imagePath:'/assets/asset8.png'},
//     {id:9, imagePath:'/assets/asset1.png'},
//     {id:10, imagePath:'/assets/asset2.png'},
//     {id:11, imagePath:'/assets/asset3.png'},
//     {id:12, imagePath:'/assets/asset4.png'},
//     {id:13, imagePath:'/assets/asset5.png'},
//     {id:14, imagePath:'/assets/asset6.png'},
//     {id:15, imagePath:'/assets/asset7.png'},
//     {id:16, imagePath:'/assets/asset8.png'},

// ]




  /*-----  app's state variables -----*/

  //2.2) a winner variable
        //a variable to determine if player is a winner or loser
        let gameWin
  //2.3) a guess variable
  let guess
    //a variable that will count the number of guesses a player has
    //2.4) a variable that will reference the cards
    let cards= []
    //a variable that represents an array of cards to display when game starts
    //2.5) a variable that will reference card positions
    let cardPositions = []




  /*----- cached elements  -----*/
  //3.1) start game button that will shuffle cards and display the cards on the board
  const startBtnEl =document.getElementById('start-game')
  //3.1.2)


  //3.1.3) a card element that will reference each card in the game
  const cardEls = document.querySelectorAll('.card')
  console.log(cardEls)
  //3.1.4) a counter elemnt that will refernce the number of guesses the player has after each guess?
  const guessCountDown =document.getElementById('guess-count')
  //3.1.5) wrong guess message element that will display the message when a user doesnt make a match
  //3.1.6) shuffle cards button element that will shuffle cards and restart game
  const tryAgainEl =document.getElementById('restart-game')
  //3.1.7) a game winner message element that will display a message when the player wins
  //3.1.8)a game loser message element that will display a message when the user loses


  /*----- event listeners -----*/
  //creat event listener for start game button
    //this should intialize the board and the game counter
    startBtnEl.addEventListener('click', renderBoard)


  //create event listener for when a card is clicked
        //-this should include an animation for flippling card
        //should only allow the user to click two cards at a time

        cardEls.forEach(function(evt){
            addEventListener('click', flipCard)
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
        // [0, 0, 0, 0], //row 1
        // [0, 0, 0, 0], // row 2
        // [0, 0, 0, 0] //row 4

    ]

gameWin = null
guess = 0
render()
}
//function for card flip
function flipCard(evt){
    evt.target.classList.toggle('flipCard')
        console.log('flipCard')

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
let cardsArray = Array.from(cardEls)
    cardEls.forEach(function(card, idx) {
        //card.innerHTML ="random image will go here"
        console.log(card)

})
    }
