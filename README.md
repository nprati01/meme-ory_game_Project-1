Game Title: How good is your memory?

Game Description:
The game will be composed of 16 cards, there will be 8 pairs.
The player will have 10 guesses ( 20 total clicks)
If the player successfully matches all 8 pairs in 10 guesses they will win otherwise they lose
If the player makes a match the cards remain flipped face side  up, if they do not match the cards will flip back over

Game play:
See Game Play folder in Assets
![Memory Game](./assets/game%20play/startgame.png)

Technologies used:
JavaScript, HTML, CSS, Adobe Illustrator

Getting Started
https://nprati01.github.io/meme-ory_game_Project-1/


Next Steps:
Future Enhancemnets:
Cards will have a flip animation
Cards will have a shuffle animation
The board will be hidden until user clicks play game button
When the game is over the board will be hidden, the win/lose message will display, and the shuffle cards and play again button will display
Clean up code, so all code isnt within the click event listener













Pseudo code
1) Define required Constants:
    1.1)Define a faceArray object that contains the images for each cars


2 Define Required variables used to track the state of the game
2.1 a matches variable-a variable to determine the number of matches
  let matches
2.2 a guess variable will count the number of guesses a player has
  let guessesLeft
2.3 a variable that will reference the cards-represents an array of cards to display when game starts
let cards = []
2.4 a variable that will store first click
let firstClick = ''
2.5 a variable that will store second click
let secondClick = ''
2.6 Variables to store each click event
let click1
let click2



3) Store elements on the page that will be accessed in the code more than once
    3.1)

4) Upon loading the app should:
    4.1)Initialize the state variables:
        4.1.1)Initialize the board
            upon intialization the board should diplay the cards shuffling across the board
            the board should have 16 squares that act as cards
            each card will have 2 sides, one side will have the name of the game on it and the other side will have an image
    4.1.2) Intialize the number of guesses the player has
        the player will have 10 guesses
    4.1.3) Intialize winner
        -the player will win or lose based on their ability to guess all of the matches in the alloted amount of guesses
        -if they do not get the all 8 matches they lose- a losing message will appear
        -if the get all 8 matches a winneing message will appear



5 Handle a player clicking a card
5.2 the card should flip over when clicked
5.1.2 the player should not be able to select more than two cards a turn
5.1.3 if the two cards clicked match the cards remain clicked
5.1.4 if the two cards clicked do not match the cards flip over
5.1.5 after two cards have been clicked the number of guesses remianing is decreased by 1



3.1.1 a card element that will reference each card in the game
const cardEls = document.querySelectorAll('.card')
3.1.2 a card back element that will reference the back of each card
const cardBackEl = document.querySelectorAll('.back')
3.1.3 a card face element that will reference the front of each card
const cardFaceEl = document.querySelectorAll('.face')
3.1.4 a counter elemnt that will refernce the number of guesses the player has after each guess?
const guessCountDown = document.querySelector('.clickCount')
3.1.5 a counter element that will display the number of matches
const matchCount = document.querySelector('.matchCount')
3.1.6  message element that will display the message when a user does or doesnt make a match
const messageEl = document.getElementById('message')
3.1.7 a game winner/loser message element that will display a message when the player wins or loses
const winLoseMessage = document.getElementById('game-title')
3.1.8 a restart button to play again
const tryAgainEl = document.getElementById('restart-game')
