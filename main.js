console.log('testing')

/*----- constants -----*/
// 1.1 Define a constant to represent the cards and thier images
const faceArray = [
  { asset: '/assets/asset1.png'},
  { asset: '/assets/asset2.png'},
  { asset: '/assets/asset3.png'},
  { asset: '/assets/asset4.png'},
  { asset: '/assets/asset5.png'},
  { asset: '/assets/asset6.png'},
  { asset: '/assets/asset7.png'},
  { asset: '/assets/asset8.png'},
  // { asset9: '/assets/asset9.png' },
  // { asset10: '/assets/asset10.png' },
  // { asset11: '/assets/asset11.png' },
  // { asset12: '/assets/asset12.png' },
  // { asset13: '/assets/asset13.png' },
  // { asset14: '/assets/asset14.png' },
  // { asset15: '/assets/asset15.png' },
  // { asset16: '/assets/asset16.png' },


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
  addCardClickEvent(cardEls)
}
//render functions
function render() {
  console.log('calling render')

  renderBoard()
}
//function to render board

function renderCards(){
  let cardsArray = []
  let randomCards =[]
  for(let i =0; i < faceArray.length; i++ )
  cardsArray.push(faceArray[i].asset)
  for(let i =0; i < faceArray.length; i++ )
  cardsArray.push(faceArray[i].asset)
return cardsArray

}

function renderBoard(){
  // console.log('rendering board')
  let cardsArray = renderCards()

  cardsArray.forEach(function(img, idx){
    const cardFaceEl = document.getElementById(`face${idx}`)
    cardFaceEl.innerHTML = `<img class="img" src= "${cardsArray[idx]}"/>`

    //console.log(cardFaceEl)
  })
 //console.log(cardsArray)
}


//function for clicked card
function addCardClickEvent(cardEls) {

  cardEls.forEach((card) => {
    card.addEventListener("click", (event) => {
    if(firstClick === ''  || secondClick === ''){
      if (event.target.classList.contains('img')) {
        const parentEl = event.target.parentElement.parentElement
        const backEl = parentEl.children[0]
        console.log(parentEl)
        console.log(backEl)
        backEl.style.display = "block";
      } else if (event.target.classList.contains("back")) {
        event.target.style.display = "none";
      }console.log(event.target)
    }
    });
  })



  //if first click is empty store click
    if(firstClick === ''){

    firstClick =
    console.log(firstClick)
//if first click is not empty store second click
  }else if(firstClick !== '' && secondClick === ''){
    secondClick = card.children[1].innerHTML
    console.log(secondClick)

  }//if first card click does not equal second card click then toggle display of face to none and back to block
  // if(secondClick !== firstClick){
  //   console.log('does not match')

  // }
  if( firstClick === secondClick){
    console.log('matches')
  }else if(Boolean(secondClick) === false){
    return
  }else{console.log(event.target.nextElementSibling)

  }

  }


//function for guess counter


//function for incorrect guesses



//function for game winner




//function to shuffle cards
