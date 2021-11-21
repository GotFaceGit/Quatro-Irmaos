// Connect to the Board

// let gridColumns = document.querySelectorAll('.columns')
let gridCircles = document.querySelectorAll('.circles')
let phantoms = document.querySelectorAll('.taken')

/* 1 */
for (let i = 0; i < gridCircles.length; i++) {
    gridCircles[i].addEventListener('click', () => {
        console.log(gridCircles[i + 1])
        console.log(gridCircles[i + 2])
        console.log(gridCircles[i + 3])
        console.log(gridCircles[i + 4])
    })
}







// let redSlugs = document. querySelector('.redCoins')
// let greenSlugs = document.querySelector('.greenCoins')
let greenPile = document.querySelector('.greenCache')
let redPile = document.querySelector('.redCache')

// Player toggler switcher
let nowPlaying = false

// Who is playing. These don't play although they switch turns
const playerRed = document.querySelector('.redPlayer')
const playerGreen = document.querySelector('.grnPlayer')
const startOver = document.querySelector('.resetBtn')

// document.querySelectorAll()


