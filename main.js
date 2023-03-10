console.log('testing')

/*----- constants -----*/
// 1.1 Define a constant to represent the cards and thier images
const faceArray = [
  { asset: 'assets/asset1.png' },
  { asset: 'assets/asset2.png' },
  { asset: 'assets/asset3.png' },
  { asset: 'assets/asset4.png' },
  { asset: 'assets/asset5.png' },
  { asset: 'assets/asset6.png' },
  { asset: 'assets/asset7.png' },
  { asset: 'assets/asset8.png' },
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
//2.5) a variable that will store first click
let firstClick = ''
//2.6 a variable that will store second click
let secondClick = ''
let matches

let click1
let click2






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
//you can use event.detail
//3.1.6) a counter element that will display the number of matches
const matchCount = document.querySelector('.matchCount')
const guessCountDown = document.querySelector('.clickCount')
//3.1.5) wrong guess message element that will display the message when a user doesnt make a match
//3.1.6) shuffle cards button element that will shuffle cards and restart game
//3.1.7)guess message element that will display the message when a user has a match or doesnt have a matxh
const messageEl = document.getElementById('message')
const tryAgainEl = document.getElementById('restart-game')
//3.1.7) a game winner message element that will display a message when the player wins
//3.1.8)a game loser message element that will display a message when the user loses
//3.1.9) a game winner/loser message element that will display a message when the player wins or loses
const winLoseMessage = document.getElementById('game-title')

/*----- event listeners -----*/
tryAgainEl.addEventListener('click', function () {
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

  matches = null
  guessesLeft = 10
  guessCountDown.innerText = guessesLeft
  cardsMatch = null
  cards = []
  render()
  addCardClickEvent(cardEls)
}
//render functions
function render() {
  console.log('calling render')

  renderBoard()
  renderCards()
}
//function to render board

function renderCards() {
  let cardsArray = []
  let randomCards = []
  for (let i = 0; i < faceArray.length; i++)
    cardsArray.push(faceArray[i].asset)
  for (let i = 0; i < faceArray.length; i++)
    cardsArray.push(faceArray[i].asset)
  return cardsArray

}

function renderBoard() {
  // console.log('rendering board')
  let cardsArray = renderCards()

  cardsArray.forEach(function (img, idx) {
    const cardFaceEl = document.getElementById(`face${idx}`)
    cardFaceEl.innerHTML = `<img src="${cardsArray[idx]}"/>`
  })
}


//function for clicked card
function addCardClickEvent(cardEls) {

  cardEls.forEach((card) => {
    card.addEventListener("click", (event) => {
      if (guessesLeft === 0) {
        // preventDevault(event)
      }
      if (firstClick === '') {
        click1 = event.target.parentElement
        firstClick = card.children[1].innerHTML
        click1.children[0].style.display = "none"
        click1.children[1].style.display = "block"
        console.log(click1)
      } else if (firstClick !== '' && secondClick === '') {
        click2 = event.target.parentElement
        secondClick = card.children[1].innerHTML
        click2.children[0].style.display = "none"
        click2.children[1].style.display = "block"

        if (firstClick === secondClick) {
          messageEl.textContent = "Its a match"
          console.log('its a match')
          firstClick = ''
          secondClick = ''
          matches+=1
          matchCount.innerText = matches
          guessesLeft--
          guessCountDown.innerText = guessesLeft
        if (matches === 8) {
            winLoseMessage.textContent = 'YOU WIN!'
            messageEl.textContent = ''
          }

        } else {
          if(guessesLeft === 1) {
            console.log('loser')
            guessesLeft = 0
            guessCountDown.innerText = guessesLeft
            winLoseMessage.textContent = 'YOU LOSE!'
            messageEl.textContent = ''}
            else{
              setTimeout(() => {
                console.log('its not a match')
                click1.children[0].style.display = "block"
                click1.children[1].style.display = "none"
                //event.target.style.display = "none";
                console.log(click1)
                click2.children[0].style.display = "block"
                click2.children[1].style.display = "none"

                firstClick = ''
                secondClick = ''
                guessesLeft--
                guessCountDown.innerText = guessesLeft
                messageEl.textContent = "You guessed incorrectly, guess again!"
              }, 750)

            }


        }

      }
    })
  })
}
