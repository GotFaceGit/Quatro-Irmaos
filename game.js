// Connect to the Board

// let gridColumns = document.querySelectorAll('.columns')
let gridCircles = document.querySelectorAll('.circles')
let phantoms = document.querySelectorAll('.taken')


// let redSlugs = document. querySelector('.redCoins')
// let greenSlugs = document.querySelector('.greenCoins')
let greenPile = document.querySelector('.greenCache')
let redPile = document.querySelector('.redCache')

// Player toggler switcher
let nowPlaying = red
let finalizado = false

// Who is playing. These don't play although they switch turns
let playerRed = document.querySelector('.redPlayer')
let playerGreen = document.querySelector('.grnPlayer')
const startOver = document.querySelector('.resetBtn')


const irmaosGo = () => {

const theQuatro = [
    [40, 32, 24, 16], [40, 41, 42, 43], [40, 33, 26, 19],
    [41, 33, 25, 17], [41, 42, 43, 44], [41, 34, 27, 20],
    [42, 34, 26, 18], [42, 35, 28, 21], [42, 43, 44, 45],
    [43, 35, 27, 19], [43, 36, 29, 22], [43, 44, 45, 46],
    [44, 36, 28, 20],
    [46, 38, 30, 22], [46, 37, 28, 19], [45, 37, 29, 21],
    [45, 36, 27, 18], [44, 35, 26, 17], [43, 34, 25, 16],
    [32, 24, 16, 8], [32, 25, 18, 11], [32, 33, 34, 35],
    [33, 25, 17, 9], [33, 26, 19, 12], [33, 34, 35, 36],
    [34, 26, 18, 10], [34, 27, 20, 13], [34, 35, 36, 37],
    [35, 27, 19, 11], [35, 28, 21, 14], [35, 36, 37, 38],
    [36, 28, 20, 12],
    [38, 30, 22, 14], [38, 29, 20, 11], [37, 29, 21, 13],
    [37, 28, 19, 10], [36, 27, 18, 9], [35, 26, 17, 8]
    [24, 16, 8, 0], [24, 17, 10, 3], [24, 25, 26, 27],
    [25, 17, 9, 1], [25, 18, 11, 4], [25, 26, 27, 28],
    [26, 18, 10, 2], [26, 19, 12, 5], [26, 27, 28, 29],
    [27, 19, 11, 3], [27, 20, 13, 6], [27, 28, 29, 30],
    [28, 20, 12, 4],
    [30, 22, 14, 16], [30, 21, 12, 3], [29, 21, 13, 5],
    [29, 20, 11, 2], [28, 20, 12, 4], [28, 19, 10, 1],
    [27, 18, 9, 0], 
    [16, 17, 18, 19], [17, 18, 19, 20], [18, 19, 20, 21],
    [19, 20, 21, 22],
    [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
    [11, 12, 13, 14],
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5],
    [3, 4, 5, 6]
    ];

    

const irmCon = () => {
    if (gridCircles[0].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying)  {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[1].innerText ===
        nowPlaying && gridCircles[2].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {  
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[1].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[7].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[5].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[3].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[5].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[6].innerText === nowPlaying && gridCircles[7].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[1].innerText ===
        nowPlaying && gridCircles[2].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {  
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[1].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[7].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[5].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[3].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[5].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[6].innerText === nowPlaying && gridCircles[7].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[1].innerText ===
        nowPlaying && gridCircles[2].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {  
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[1].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[7].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[5].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[3].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[5].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[6].innerText === nowPlaying && gridCircles[7].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[1].innerText ===
        nowPlaying && gridCircles[2].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {  
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[1].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[7].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[5].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[3].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[5].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[6].innerText === nowPlaying && gridCircles[7].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[1].innerText ===
        nowPlaying && gridCircles[2].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {  
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[1].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[7].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[5].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[3].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[5].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[6].innerText === nowPlaying && gridCircles[7].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[1].innerText ===
        nowPlaying && gridCircles[2].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {  
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[1].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[7].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[5].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[3].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[5].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[6].innerText === nowPlaying && gridCircles[7].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[1].innerText ===
        nowPlaying && gridCircles[2].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {  
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[1].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[7].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[5].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[3].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[5].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[6].innerText === nowPlaying && gridCircles[7].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[6].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finito = true
        document.querySelector('.currentTurn').innerText = nowPlaying + ' is Champion'




    } else {
        let X = 0
        let O = 0
        for (let i = 0; i < gridCircles.length; i++) {
            if (gridCircles[i].innerText === 'X') {
                X++
           }else if (gridCircles[i].innerText === 'O') {
               O++
           }
        }   if (X + O === 9) {
            document.querySelector('.currentTurn').innerText = 'Great minds tie alike!'
        }
    }



    }





// for (let i = 0; i < gridCircles.length; i++) {
//     gridCircles[i].addEventListener('click', () => {
        
//         })
//     }


}
irmaosGo()
