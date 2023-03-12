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

//2.1) a matches variable
//a variable to determine the number of matches
let matches
//2.2) a guess variable
//a variable that will count the number of guesses a player has
let guessesLeft
//2.3) a variable that will reference the cards
let cards = []
//a variable that represents an array of cards to display when game starts
//2.4) a variable that will store first click
let firstClick = ''
//2.5)a variable that will store second click
let secondClick = ''
//2.6) Variables to store each click event
let click1
let click2






/*----- cached elements  -----*/
//3.1.1) a card element that will reference each card in the game
const cardEls = document.querySelectorAll('.card')
//3.1.2) a card back element that will reference the back of each card
const cardBackEl = document.querySelectorAll('.back')
//3.1.3) a card face element that will reference the front of each card
const cardFaceEl = document.querySelectorAll('.face')
//3.1.4) a counter elemnt that will refernce the number of guesses the player has after each guess?
const guessCountDown = document.querySelector('.clickCount')
//3.1.5) a counter element that will display the number of matches
const matchCount = document.querySelector('.matchCount')
//3.1.6)  message element that will display the message when a user does or doesnt make a match
const messageEl = document.getElementById('message')
//3.1.7) a game winner/loser message element that will display a message when the player wins or loses
const winLoseMessage = document.getElementById('game-title')
//3.1.8) a restart button to play again
const tryAgainEl = document.getElementById('restart-game')

/*----- event listeners -----*/

//An event listener to replay game
//eventually this button will also shuffle the cards
tryAgainEl.addEventListener('click', function () {
  window.location.reload()
  return
})




/*----- functions -----*/
//Function to start game
init()
function init() {
  board = [
    [0, 0, 0, 0], //row 0
    [0, 0, 0, 0], //row 1
    [0, 0, 0, 0], // row 2
    [0, 0, 0, 0] //row 3

  ]

  matches = null // there are no matches
  guessesLeft = 10 // max number of guesses allowed
  guessCountDown.innerText = guessesLeft// sets the counter for guesses
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
  // this function loops through the faceArray object at the top and places an image to each card on the board
  //Looping twice so each card has a matching image
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
  //renders the cards and ties each image to each card
  //want to add a function so that the card images are shuffled
  let cardsArray = renderCards()

  cardsArray.forEach(function (img, idx) {
    const cardFaceEl = document.getElementById(`face${idx}`)
    cardFaceEl.innerHTML = `<img src="${cardsArray[idx]}"/>`
  })
}


//function for clicked card
//create event listener for when a card is clicked
//this should only allow you to flip two cards at a time
//if the cards match the remain shown
//if the cards do not match they are hidden
function addCardClickEvent(cardEls) {

  cardEls.forEach((card) => {
    card.addEventListener("click", (event) => {
      // prevents user from making more than 10 guesses
      if (guessesLeft === 0) {
        preventDevault(event)
      }
      if (firstClick === '') {
        //if firstClick is empty then click 1 modifies the display style of card so that the image is revealed
        //firstClick then stores the image that is revealed for comparison later
        click1 = event.target.parentElement
        firstClick = card.children[1].innerHTML
        click1.children[0].style.display = "none"
        click1.children[1].style.display = "block"
        console.log(click1)
        //if first click is not empty (there has been a click, and second click is empty then click2 modifies the second click event object so that the face image is displayed and the back of the card is set to none)
      } else if (firstClick !== '' && secondClick === '') {
        click2 = event.target.parentElement
        secondClick = card.children[1].innerHTML
        click2.children[0].style.display = "none"
        click2.children[1].style.display = "block"

        //Card match logic
        if (firstClick === secondClick) {
          //if the cards do match the text content changes it its a match
          //number of matches increas and the number of guesses decrease
          messageEl.textContent = "Its a match"
          console.log('its a match')
          firstClick = ''
          secondClick = ''
          matches+=1
          matchCount.innerText = matches
          guessesLeft--
          guessCountDown.innerText = guessesLeft
        if (matches === 8) {
          //if you make 8 matches in 10 guesses or under you win
            winLoseMessage.textContent = 'YOU WIN!'
            messageEl.textContent = ''
          }

        } else {
          //if you run out of guesses you loose
          if(guessesLeft === 1) {
            console.log('loser')
            guessesLeft = 0
            guessCountDown.innerText = guessesLeft
            winLoseMessage.textContent = 'YOU LOSE!'
            messageEl.textContent = ''}
            else{
              //if the cards do not match the screen displays a no match message and the cards flip over
              setTimeout(() => {
                console.log('its not a match!')
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
