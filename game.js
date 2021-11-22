// Connect to the Board

// let gridColumns = document.querySelectorAll('.columns')
let gridCircles = document.querySelectorAll('.circles')
// let phantoms = document.querySelectorAll('.taken')


// let redSlugs = document. querySelector('.redCoins')
// let greenSlugs = document.querySelector('.greenCoins')
// let greenPile = document.querySelector('.greenCache')
// let redPile = document.querySelector('.redCache')

// Player toggler switcher
let nowPlaying = 'Red'
let finalizado = false

// Who is playing. These don't play although they switch turns
// let playerRed = document.querySelector('.redPlayer')
// let playerGreen = document.querySelector('.grnPlayer')

const startOver = document.querySelector('.resetBtn')


const irmaosGo = () => {

const theQuatro = [
    [35, 28, 21, 14], [35, 29, 23, 17], [35, 36, 37, 38],
    [36, 29, 22, 15], [36, 30, 24, 18], [36, 37, 38, 39],
    [37, 30, 23, 16], [37, 31, 25, 19], [37, 38, 39, 40],
    [38, 31, 24, 17], [38, 32, 26, 20], [38, 39, 40, 41],
    [38, 30, 22, 14], [39, 32, 25, 18], [39, 31, 23, 15],
    [40, 33, 26, 19], [40, 32, 24, 16], [41, 34, 27, 20],
    [41, 33, 25, 17],
    [28, 21, 14, 7], [28, 22, 16, 10], [28, 29, 30, 31],
    [29, 22, 15, 8], [29, 23, 17, 11], [29, 30, 31, 32],
    [30, 23, 16, 9], [30, 24, 18, 12], [30, 31, 32, 33],
    [31, 24, 17, 10], [31, 23, 15, 7], [31, 25, 19, 13],
    [31, 32, 33, 34], 
    [32, 25, 18, 11], [32, 24, 16, 8],
    [33, 26, 19, 12], [33, 25, 17, 9],
    [34, 27, 20, 13], [34, 26, 18, 10],
    [21, 14, 7, 0], [21, 15, 9, 3], [21, 22, 23, 24],
    [22, 15, 8, 1], [22, 16, 10, 4], [22, 23, 24, 25],
    [23, 16, 9, 2], [23, 17, 11, 5], [23, 24, 25, 26],
    [24, 17, 10, 3], [24, 18, 12, 6], [24, 25, 26, 27],
    [24, 16, 8, 0], [25, 18, 11, 4], [25, 17, 9, 1],
    [26, 19, 12, 5], [26, 18, 10, 2], [27, 20, 13, 6],
    [27, 19, 11, 3],
    [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19],
    [17, 18, 19, 20],
    [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12],
    [10, 11, 12, 13],
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5],
    [3, 4, 5, 6]
    ];

    

const irmCon = () => {
    if (gridCircles[35].innerText === nowPlaying && gridCircles[28].innerText ===
        nowPlaying && gridCircles[21].innerText === nowPlaying && gridCircles[14].innerText ===
        nowPlaying)  {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[35].innerText === nowPlaying && gridCircles[29].innerText ===
        nowPlaying && gridCircles[23].innerText === nowPlaying && gridCircles[17].innerText ===
        nowPlaying ) {  
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[35].innerText === nowPlaying && gridCircles[36].innerText ===
        nowPlaying && gridCircles[37].innerText === nowPlaying && gridCircles[38].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[36].innerText === nowPlaying && gridCircles[29].innerText ===
        nowPlaying && gridCircles[22].innerText === nowPlaying && gridCircles[15].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[36].innerText === nowPlaying && gridCircles[30].innerText ===
        nowPlaying && gridCircles[24].innerText === nowPlaying && gridCircles[18].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[36].innerText === nowPlaying && gridCircles[37].innerText ===
        nowPlaying && gridCircles[38].innerText === nowPlaying && gridCircles[39].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[37].innerText === nowPlaying && gridCircles[30].innerText ===
        nowPlaying && gridCircles[23].innerText === nowPlaying && gridCircles[16].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[37].innerText === nowPlaying && gridCircles[31].innerText ===
        nowPlaying && gridCircles[25].innerText === nowPlaying && gridCircles[19].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[37].innerText === nowPlaying && gridCircles[38].innerText ===
        nowPlaying && gridCircles[39].innerText === nowPlaying && gridCircles[40].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[38].innerText === nowPlaying && gridCircles[31].innerText ===
        nowPlaying && gridCircles[24].innerText === nowPlaying && gridCircles[17].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[38].innerText === nowPlaying && gridCircles[32].innerText ===
        nowPlaying && gridCircles[26].innerText === nowPlaying && gridCircles[20].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[38].innerText === nowPlaying && gridCircles[39].innerText ===
        nowPlaying && gridCircles[40].innerText === nowPlaying && gridCircles[41].innerText ===
        nowPlaying ) {  
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[38].innerText === nowPlaying && gridCircles[30].innerText ===
        nowPlaying && gridCircles[22].innerText === nowPlaying && gridCircles[14].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[39].innerText === nowPlaying && gridCircles[32].innerText ===
        nowPlaying && gridCircles[25].innerText === nowPlaying && gridCircles[18].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[39].innerText === nowPlaying && gridCircles[31].innerText ===
        nowPlaying && gridCircles[23].innerText === nowPlaying && gridCircles[15].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[40].innerText === nowPlaying && gridCircles[33].innerText ===
        nowPlaying && gridCircles[26].innerText === nowPlaying && gridCircles[19].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[40].innerText === nowPlaying && gridCircles[32].innerText ===
        nowPlaying && gridCircles[24].innerText === nowPlaying && gridCircles[16].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[41].innerText === nowPlaying && gridCircles[34].innerText ===
        nowPlaying && gridCircles[27].innerText === nowPlaying && gridCircles[20].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[41].innerText === nowPlaying && gridCircles[33].innerText ===
        nowPlaying && gridCircles[25].innerText === nowPlaying && gridCircles[17].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[28].innerText === nowPlaying && gridCircles[21].innerText ===
        nowPlaying && gridCircles[14].innerText === nowPlaying && gridCircles[7].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[28].innerText === nowPlaying && gridCircles[22].innerText ===
        nowPlaying && gridCircles[16].innerText === nowPlaying && gridCircles[10].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[28].innerText === nowPlaying && gridCircles[29].innerText ===
        nowPlaying && gridCircles[30].innerText === nowPlaying && gridCircles[31].innerText ===
        nowPlaying ) {  
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[29].innerText === nowPlaying && gridCircles[22].innerText ===
        nowPlaying && gridCircles[15].innerText === nowPlaying && gridCircles[8].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[29].innerText === nowPlaying && gridCircles[23].innerText ===
        nowPlaying && gridCircles[17].innerText === nowPlaying && gridCircles[11].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[29].innerText === nowPlaying && gridCircles[30].innerText ===
        nowPlaying && gridCircles[31].innerText === nowPlaying && gridCircles[32].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[30].innerText === nowPlaying && gridCircles[23].innerText ===
        nowPlaying && gridCircles[16].innerText === nowPlaying && gridCircles[9].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[30].innerText === nowPlaying && gridCircles[24].innerText ===
        nowPlaying && gridCircles[18].innerText === nowPlaying && gridCircles[12].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[30].innerText === nowPlaying && gridCircles[31].innerText ===
        nowPlaying && gridCircles[32].innerText === nowPlaying && gridCircles[33].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[31].innerText === nowPlaying && gridCircles[24].innerText ===
        nowPlaying && gridCircles[17].innerText === nowPlaying && gridCircles[10].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[31].innerText === nowPlaying && gridCircles[23].innerText ===
        nowPlaying && gridCircles[15].innerText === nowPlaying && gridCircles[7].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[31].innerText === nowPlaying && gridCircles[25].innerText ===
        nowPlaying && gridCircles[19].innerText === nowPlaying && gridCircles[13].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[31].innerText === nowPlaying && gridCircles[32].innerText ===
        nowPlaying && gridCircles[33].innerText === nowPlaying && gridCircles[34].innerText ===
        nowPlaying ) {  
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[32].innerText === nowPlaying && gridCircles[25].innerText ===
        nowPlaying && gridCircles[18].innerText === nowPlaying && gridCircles[11].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[32].innerText === nowPlaying && gridCircles[24].innerText ===
        nowPlaying && gridCircles[16].innerText === nowPlaying && gridCircles[8].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[33].innerText === nowPlaying && gridCircles[26].innerText ===
        nowPlaying && gridCircles[19].innerText === nowPlaying && gridCircles[12].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[33].innerText === nowPlaying && gridCircles[25].innerText ===
        nowPlaying && gridCircles[17].innerText === nowPlaying && gridCircles[9].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[34].innerText === nowPlaying && gridCircles[27].innerText ===
        nowPlaying && gridCircles[20].innerText === nowPlaying && gridCircles[13].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[34].innerText === nowPlaying && gridCircles[26].innerText ===
        nowPlaying && gridCircles[18].innerText === nowPlaying && gridCircles[10].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[21].innerText === nowPlaying && gridCircles[14].innerText ===
        nowPlaying && gridCircles[7].innerText === nowPlaying && gridCircles[0].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[21].innerText === nowPlaying && gridCircles[15].innerText ===
        nowPlaying && gridCircles[9].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[21].innerText === nowPlaying && gridCircles[22].innerText ===
        nowPlaying && gridCircles[23].innerText === nowPlaying && gridCircles[24].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[22].innerText === nowPlaying && gridCircles[15].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[1].innerText ===
        nowPlaying ) {  
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[22].innerText === nowPlaying && gridCircles[16].innerText ===
        nowPlaying && gridCircles[10].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[22].innerText === nowPlaying && gridCircles[23].innerText ===
        nowPlaying && gridCircles[24].innerText === nowPlaying && gridCircles[25].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[23].innerText === nowPlaying && gridCircles[16].innerText ===
        nowPlaying && gridCircles[9].innerText === nowPlaying && gridCircles[2].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[23].innerText === nowPlaying && gridCircles[17].innerText ===
        nowPlaying && gridCircles[11].innerText === nowPlaying && gridCircles[5].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[23].innerText === nowPlaying && gridCircles[24].innerText ===
        nowPlaying && gridCircles[25].innerText === nowPlaying && gridCircles[26].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[24].innerText === nowPlaying && gridCircles[17].innerText ===
        nowPlaying && gridCircles[10].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[24].innerText === nowPlaying && gridCircles[18].innerText ===
        nowPlaying && gridCircles[12].innerText === nowPlaying && gridCircles[6].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[24].innerText === nowPlaying && gridCircles[25].innerText ===
        nowPlaying && gridCircles[26].innerText === nowPlaying && gridCircles[27].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[24].innerText === nowPlaying && gridCircles[16].innerText ===
        nowPlaying && gridCircles[8].innerText === nowPlaying && gridCircles[0].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[25].innerText === nowPlaying && gridCircles[18].innerText ===
        nowPlaying && gridCircles[11].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying ) {  
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[25].innerText === nowPlaying && gridCircles[17].innerText ===
        nowPlaying && gridCircles[9].innerText === nowPlaying && gridCircles[1].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[26].innerText === nowPlaying && gridCircles[19].innerText ===
        nowPlaying && gridCircles[12].innerText === nowPlaying && gridCircles[5].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[26].innerText === nowPlaying && gridCircles[18].innerText ===
        nowPlaying && gridCircles[10].innerText === nowPlaying && gridCircles[2].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[27].innerText === nowPlaying && gridCircles[20].innerText ===
        nowPlaying && gridCircles[13].innerText === nowPlaying && gridCircles[6].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[27].innerText === nowPlaying && gridCircles[19].innerText ===
        nowPlaying && gridCircles[11].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[14].innerText === nowPlaying && gridCircles[15].innerText ===
        nowPlaying && gridCircles[16].innerText === nowPlaying && gridCircles[17].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[15].innerText === nowPlaying && gridCircles[16].innerText ===
        nowPlaying && gridCircles[17].innerText === nowPlaying && gridCircles[18].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[16].innerText === nowPlaying && gridCircles[17].innerText ===
        nowPlaying && gridCircles[18].innerText === nowPlaying && gridCircles[19].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[17].innerText === nowPlaying && gridCircles[18].innerText ===
        nowPlaying && gridCircles[19].innerText === nowPlaying && gridCircles[20].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[7].innerText === nowPlaying && gridCircles[8].innerText ===
        nowPlaying && gridCircles[9].innerText === nowPlaying && gridCircles[10].innerText ===
        nowPlaying ) {  
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[8].innerText === nowPlaying && gridCircles[9].innerText ===
        nowPlaying && gridCircles[10].innerText === nowPlaying && gridCircles[11].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[9].innerText === nowPlaying && gridCircles[10].innerText ===
        nowPlaying && gridCircles[11].innerText === nowPlaying && gridCircles[12].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[10].innerText === nowPlaying && gridCircles[11].innerText ===
        nowPlaying && gridCircles[12].innerText === nowPlaying && gridCircles[13].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[0].innerText === nowPlaying && gridCircles[1].innerText ===
        nowPlaying && gridCircles[2].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[1].innerText === nowPlaying && gridCircles[2].innerText ===
        nowPlaying && gridCircles[3].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[2].innerText === nowPlaying && gridCircles[3].innerText ===
        nowPlaying && gridCircles[4].innerText === nowPlaying && gridCircles[5].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[3].innerText === nowPlaying && gridCircles[4].innerText ===
        nowPlaying && gridCircles[5].innerText === nowPlaying && gridCircles[6].innerText ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').innerText = nowPlaying + ' takes the board!'
    } else {
        let Red = 0
        let Green = 0
        for (let i = 0; i < gridCircles.length; i++) {
            if (gridCircles[i].innerText === 'Red') {
                Red++
           }else if (gridCircles[i].innerText === 'Green') {
               Green++
           }
        }   if (Red + Green === 42) {
            document.querySelector('.playingNow').innerText = 'Dang. No reunion for the brothers. Sem reuniao de irmaos.'
        }
    }
  }

  const startOver = document.querySelector(".resetBtn").addEventListener("click", () => {
    finalizado = false
    const gridCircles = document.querySelectorAll(".circles");
        for(let i = 0; i < gridCircles.length; i++) {
            gridCircles[i].innerText = ""
    }
    document.querySelector(".playingNow").innerText = "Into the array we go..."
    nowPlaying = 'Red'; 
});



gridCircles.forEach(slot => {
    const circZero = Array.from(gridCircles).indexOf(slot)
    slot.addEventListener('click', () => {
        if (nowPlaying === 'Red' &&
            gridCircles[circZero].innerText!== 'Green' && !finalizado) {
            console.log('reds turn')
            gridCircles[circZero].style.background = 'red'
            document.querySelector('.playingNow').innerText = 'Your go Green'
            irmCon()
            nowPlaying = 'Green'
        }  else if (nowPlaying === 'Green' &&
            gridCircles[circZero].innerText!== 'Red' && !finalizado) {
            console.log('greens turn')    
            gridCircles[circZero].style.background = 'green'
            document.querySelector('.playingNow').innerText = 'Your go Red'
            irmCon()
            nowPlaying = 'Red'
        } 
    });
});

//document.slot.style.color


}
irmaosGo()





// for (let i = 0; i < gridCircles.length; i++) {
//     gridCircles[i].addEventListener('click', () => {
        
//         })
//     }
