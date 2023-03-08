console.log('testing')

/*----- constants -----*/
// 1.1 Define a constant to represent the cards and thier images
const faceArray = [
  { asset1: '/assets/asset1.png' },
  { asset1: '/assets/asset1.png' },
  { asset2: '/assets/asset2.png' },
  { asset2: '/assets/asset2.png' },
  { asset3: '/assets/asset3.png' },
  { asset3: '/assets/asset3.png' },
  { asset4: '/assets/asset4.png' },
  { asset4: '/assets/asset4.png' },
  { asset5: '/assets/asset5.png' },
  { asset5: '/assets/asset5.png' },
  { asset6: '/assets/asset6.png' },
  { asset6: '/assets/asset6.png' },
  { asset7: '/assets/asset7.png' },
  { asset7: '/assets/asset7.png' },
  { asset8: '/assets/asset8.png' },
  { asset8: '/assets/asset8.png' },


]







/*-----  app's state variables -----*/

//2.2) a winner variable
//a variable to determine if player is a winner or loser
let gameWinner
//2.3) a guess variable
let guessesLeft
//a variable that will count the number of guesses a player has
//2.4) a variable that will reference the cards
let cards = []
//a variable that represents an array of cards to display when game starts
//2.5) a variable that will reference card positions
let cardsMatch = []







/*----- cached elements  -----*/
//3.1) start game button that will shuffle cards and display the cards on the board
//const startBtnEl = document.getElementById('start-game')
//3.1.2) a card element that will reference each card in the game
const cardEls = document.querySelectorAll('.card')
// console.log(cardEls)
//3.1.3) a card back element that will reference the back of each card
const cardBackEl = document.querySelectorAll('.back')
// console.log(cardBackEl)
//3.1.4) a card face element that will reference the front of each card
const cardFaceEl = document.querySelectorAll('.face')
// console.log(cardFaceEl)
//3.1.5) a counter elemnt that will refernce the number of guesses the player has after each guess?
const guessCountDown = document.getElementById('guess-count')
//3.1.5) wrong guess message element that will display the message when a user doesnt make a match
//3.1.6) shuffle cards button element that will shuffle cards and restart game
const tryAgainEl = document.getElementById('restart-game')
//3.1.7) a game winner message element that will display a message when the player wins
//3.1.8)a game loser message element that will display a message when the user loses


/*----- event listeners -----*/
//creat event listener for start game button
//this should intialize the board and the game counter
tryAgainEl.addEventListener('click', function(){
  window.location.reload()
  return
})


//create event listener for when a card is clicked
//this should only allow you to flip two cards at a time
//if the cards match the remain shown
//if the cards do not match they are hidden


//create event listener for restart game button
//this should include an animation for shuffling the cards on screen



/*----- functions -----*/
//Function to start game
init()
function init() {
  board = [
    [0, 0, 0, 0], //row
    [0, 0, 0, 0], //row 1
    [0, 0, 0, 0], // row 2
    [0, 0, 0, 0] //row 4

  ]

  gameWin = null
  guessLeft = 18
  cardsMatch= null
  cards = []
  render()
}
//function for clicked card

cardEls.forEach(card => {
  card.addEventListener('click', (event) => {

    // console.log(event.target)
    // console.log(card.children

    if (event.target.classList.contains('back')) {
      event.target.classList.toggle('face')
      event.target.classList.toggle('back')
    }
    if (card.children[1].classList.contains('face')) {
      card.children[1].classList.toggle('back')
      card.children[1].classList.toggle('face')
    }

  })
})


//function for guess counter


//function for diasbleing click in game play




//function for incorrect guesses



//function for game winner




//function to shuffle cards


//render functions
function render() {
  // console.log('calling render')
  renderBoard()
}
function renderBoard(){
  // cardFaceEl.forEach(function(face, fIndex){
  // const faceId = `face${fIndex}`
faceArray.forEach(function(img, idx){
      const cardFaceEl = document.getElementById(`face${idx}`)
      cardFaceEl.innerHTML = `<img src="assets/asset${idx+1}.png"/>`
console.log(cardFaceEl)

      console.log(img.asset1)
      console.log(idx+1)




    })
  }
    // faceImg.style.backgroundImage = faceArray[face]



    // console.log()
