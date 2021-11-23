// Connect to the Board

// let gridColumns = document.querySelectorAll('.columns')
// let phantoms = document.querySelectorAll('.taken')
// let redSlugs = document. querySelector('.redCoins')
// let greenSlugs = document.querySelector('.greenCoins')
// let greenPile = document.querySelector('.greenCache')
// let redPile = document.querySelector('.redCache')
// Player toggler switcher
// Who is playing. These don't play although they switch turns
// let playerRed = document.querySelector('.redPlayer')
// let playerGreen = document.querySelector('.grnPlayer')


let nowPlaying = 'red'
let finalizado = false
let gridCircles = document.querySelectorAll('.circles')
let startOver = document.querySelector('.resetBtn')


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
    if (gridCircles[35].style.background === nowPlaying && gridCircles[28].style.background ===
        nowPlaying && gridCircles[21].style.background === nowPlaying && gridCircles[14].style.background ===
        nowPlaying)  {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[35].style.background === nowPlaying && gridCircles[29].style.background ===
        nowPlaying && gridCircles[23].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying ) {  
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[35].style.background === nowPlaying && gridCircles[36].style.background ===
        nowPlaying && gridCircles[37].style.background === nowPlaying && gridCircles[38].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[36].style.background === nowPlaying && gridCircles[29].style.background ===
        nowPlaying && gridCircles[22].style.background === nowPlaying && gridCircles[15].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[36].style.background === nowPlaying && gridCircles[30].style.background ===
        nowPlaying && gridCircles[24].style.background === nowPlaying && gridCircles[18].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[36].style.background === nowPlaying && gridCircles[37].style.background ===
        nowPlaying && gridCircles[38].style.background === nowPlaying && gridCircles[39].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[37].style.background === nowPlaying && gridCircles[30].style.background ===
        nowPlaying && gridCircles[23].style.background === nowPlaying && gridCircles[16].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[37].style.background === nowPlaying && gridCircles[31].style.background ===
        nowPlaying && gridCircles[25].style.background === nowPlaying && gridCircles[19].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[37].style.background === nowPlaying && gridCircles[38].style.background ===
        nowPlaying && gridCircles[39].style.background === nowPlaying && gridCircles[40].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[38].style.background === nowPlaying && gridCircles[31].style.background ===
        nowPlaying && gridCircles[24].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[38].style.background === nowPlaying && gridCircles[32].style.background ===
        nowPlaying && gridCircles[26].style.background === nowPlaying && gridCircles[20].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[38].style.background === nowPlaying && gridCircles[39].style.background ===
        nowPlaying && gridCircles[40].style.background === nowPlaying && gridCircles[41].style.background ===
        nowPlaying ) {  
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[38].style.background === nowPlaying && gridCircles[30].style.background ===
        nowPlaying && gridCircles[22].style.background === nowPlaying && gridCircles[14].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[39].style.background === nowPlaying && gridCircles[32].style.background ===
        nowPlaying && gridCircles[25].style.background === nowPlaying && gridCircles[18].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[39].style.background === nowPlaying && gridCircles[31].style.background ===
        nowPlaying && gridCircles[23].style.background === nowPlaying && gridCircles[15].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[40].style.background === nowPlaying && gridCircles[33].style.background ===
        nowPlaying && gridCircles[26].style.background === nowPlaying && gridCircles[19].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[40].style.background === nowPlaying && gridCircles[32].style.background ===
        nowPlaying && gridCircles[24].style.background === nowPlaying && gridCircles[16].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[41].style.background === nowPlaying && gridCircles[34].style.background ===
        nowPlaying && gridCircles[27].style.background === nowPlaying && gridCircles[20].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[41].style.background === nowPlaying && gridCircles[33].style.background ===
        nowPlaying && gridCircles[25].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[28].style.background === nowPlaying && gridCircles[21].style.background ===
        nowPlaying && gridCircles[14].style.background === nowPlaying && gridCircles[7].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[28].style.background === nowPlaying && gridCircles[22].style.background ===
        nowPlaying && gridCircles[16].style.background === nowPlaying && gridCircles[10].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[28].style.background === nowPlaying && gridCircles[29].style.background ===
        nowPlaying && gridCircles[30].style.background === nowPlaying && gridCircles[31].style.background ===
        nowPlaying ) {  
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[29].style.background === nowPlaying && gridCircles[22].style.background ===
        nowPlaying && gridCircles[15].style.background === nowPlaying && gridCircles[8].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[29].style.background === nowPlaying && gridCircles[23].style.background ===
        nowPlaying && gridCircles[17].style.background === nowPlaying && gridCircles[11].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[29].style.background === nowPlaying && gridCircles[30].style.background ===
        nowPlaying && gridCircles[31].style.background === nowPlaying && gridCircles[32].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[30].style.background === nowPlaying && gridCircles[23].style.background ===
        nowPlaying && gridCircles[16].style.background === nowPlaying && gridCircles[9].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[30].style.background === nowPlaying && gridCircles[24].style.background ===
        nowPlaying && gridCircles[18].style.background === nowPlaying && gridCircles[12].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[30].style.background === nowPlaying && gridCircles[31].style.background ===
        nowPlaying && gridCircles[32].style.background === nowPlaying && gridCircles[33].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[31].style.background === nowPlaying && gridCircles[24].style.background ===
        nowPlaying && gridCircles[17].style.background === nowPlaying && gridCircles[10].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[31].style.background === nowPlaying && gridCircles[23].style.background ===
        nowPlaying && gridCircles[15].style.background === nowPlaying && gridCircles[7].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[31].style.background === nowPlaying && gridCircles[25].style.background ===
        nowPlaying && gridCircles[19].style.background === nowPlaying && gridCircles[13].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[31].style.background === nowPlaying && gridCircles[32].style.background ===
        nowPlaying && gridCircles[33].style.background === nowPlaying && gridCircles[34].style.background ===
        nowPlaying ) {  
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[32].style.background === nowPlaying && gridCircles[25].style.background ===
        nowPlaying && gridCircles[18].style.background === nowPlaying && gridCircles[11].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[32].style.background === nowPlaying && gridCircles[24].style.background ===
        nowPlaying && gridCircles[16].style.background === nowPlaying && gridCircles[8].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[33].style.background === nowPlaying && gridCircles[26].style.background ===
        nowPlaying && gridCircles[19].style.background === nowPlaying && gridCircles[12].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[33].style.background === nowPlaying && gridCircles[25].style.background ===
        nowPlaying && gridCircles[17].style.background === nowPlaying && gridCircles[9].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[34].style.background === nowPlaying && gridCircles[27].style.background ===
        nowPlaying && gridCircles[20].style.background === nowPlaying && gridCircles[13].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[34].style.background === nowPlaying && gridCircles[26].style.background ===
        nowPlaying && gridCircles[18].style.background === nowPlaying && gridCircles[10].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[21].style.background === nowPlaying && gridCircles[14].style.background ===
        nowPlaying && gridCircles[7].style.background === nowPlaying && gridCircles[0].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[21].style.background === nowPlaying && gridCircles[15].style.background ===
        nowPlaying && gridCircles[9].style.background === nowPlaying && gridCircles[3].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[21].style.background === nowPlaying && gridCircles[22].style.background ===
        nowPlaying && gridCircles[23].style.background === nowPlaying && gridCircles[24].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[22].style.background === nowPlaying && gridCircles[15].style.background ===
        nowPlaying && gridCircles[8].style.background === nowPlaying && gridCircles[1].style.background ===
        nowPlaying ) {  
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[22].style.background === nowPlaying && gridCircles[16].style.background ===
        nowPlaying && gridCircles[10].style.background === nowPlaying && gridCircles[4].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[22].style.background === nowPlaying && gridCircles[23].style.background ===
        nowPlaying && gridCircles[24].style.background === nowPlaying && gridCircles[25].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[23].style.background === nowPlaying && gridCircles[16].style.background ===
        nowPlaying && gridCircles[9].style.background === nowPlaying && gridCircles[2].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[23].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying && gridCircles[11].style.background === nowPlaying && gridCircles[5].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[23].style.background === nowPlaying && gridCircles[24].style.background ===
        nowPlaying && gridCircles[25].style.background === nowPlaying && gridCircles[26].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[24].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying && gridCircles[10].style.background === nowPlaying && gridCircles[3].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[24].style.background === nowPlaying && gridCircles[18].style.background ===
        nowPlaying && gridCircles[12].style.background === nowPlaying && gridCircles[6].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[24].style.background === nowPlaying && gridCircles[25].style.background ===
        nowPlaying && gridCircles[26].style.background === nowPlaying && gridCircles[27].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[24].style.background === nowPlaying && gridCircles[16].style.background ===
        nowPlaying && gridCircles[8].style.background === nowPlaying && gridCircles[0].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[25].style.background === nowPlaying && gridCircles[18].style.background ===
        nowPlaying && gridCircles[11].style.background === nowPlaying && gridCircles[4].style.background ===
        nowPlaying ) {  
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[25].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying && gridCircles[9].style.background === nowPlaying && gridCircles[1].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[26].style.background === nowPlaying && gridCircles[19].style.background ===
        nowPlaying && gridCircles[12].style.background === nowPlaying && gridCircles[5].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[26].style.background === nowPlaying && gridCircles[18].style.background ===
        nowPlaying && gridCircles[10].style.background === nowPlaying && gridCircles[2].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[27].style.background === nowPlaying && gridCircles[20].style.background ===
        nowPlaying && gridCircles[13].style.background === nowPlaying && gridCircles[6].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[27].style.background === nowPlaying && gridCircles[19].style.background ===
        nowPlaying && gridCircles[11].style.background === nowPlaying && gridCircles[3].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[14].style.background === nowPlaying && gridCircles[15].style.background ===
        nowPlaying && gridCircles[16].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[15].style.background === nowPlaying && gridCircles[16].style.background ===
        nowPlaying && gridCircles[17].style.background === nowPlaying && gridCircles[18].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[16].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying && gridCircles[18].style.background === nowPlaying && gridCircles[19].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[17].style.background === nowPlaying && gridCircles[18].style.background ===
        nowPlaying && gridCircles[19].style.background === nowPlaying && gridCircles[20].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[7].style.background === nowPlaying && gridCircles[8].style.background ===
        nowPlaying && gridCircles[9].style.background === nowPlaying && gridCircles[10].style.background ===
        nowPlaying ) {  
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[8].style.background === nowPlaying && gridCircles[9].style.background ===
        nowPlaying && gridCircles[10].style.background === nowPlaying && gridCircles[11].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[9].style.background === nowPlaying && gridCircles[10].style.background ===
        nowPlaying && gridCircles[11].style.background === nowPlaying && gridCircles[12].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[10].style.background === nowPlaying && gridCircles[11].style.background ===
        nowPlaying && gridCircles[12].style.background === nowPlaying && gridCircles[13].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[0].style.background === nowPlaying && gridCircles[1].style.background ===
        nowPlaying && gridCircles[2].style.background === nowPlaying && gridCircles[3].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[1].style.background === nowPlaying && gridCircles[2].style.background ===
        nowPlaying && gridCircles[3].style.background === nowPlaying && gridCircles[4].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[2].style.background === nowPlaying && gridCircles[3].style.background ===
        nowPlaying && gridCircles[4].style.background === nowPlaying && gridCircles[5].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else if (gridCircles[3].style.background === nowPlaying && gridCircles[4].style.background ===
        nowPlaying && gridCircles[5].style.background === nowPlaying && gridCircles[6].style.background ===
        nowPlaying ) {
        finalizado = true
        document.querySelector('.playingNow').style.background = nowPlaying + ' takes the board!'
    } else {
        let Red = 0
        let Green = 0
        for (let i = 0; i < gridCircles.length; i++) {
            if (gridCircles[i].style.background === 'red') {
                Red++
           }else if (gridCircles[i].style.background === 'green') {
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
            gridCircles[i].style.background = ""
    }
    document.querySelector(".playingNow").innerText = "Into the array we go..."
    nowPlaying = 'Red'; 
});



gridCircles.forEach(slot => {
    const circZero = Array.from(gridCircles).indexOf(slot)
    slot.addEventListener('click', () => {
        if (nowPlaying === 'red' &&
            gridCircles[circZero].style.background!== 'green' && !finalizado) {
            // console.log('reds turn')
            gridCircles[circZero].style.background = 'red'
            document.querySelector('.playingNow').innerText = 'Your go Green'
            irmCon()
            nowPlaying = 'green'
        }  else if (nowPlaying === 'green' &&
            gridCircles[circZero].style.background!== 'red' && !finalizado) {
            // console.log('greens turn')    
            gridCircles[circZero].style.background = 'green'
            document.querySelector('.playingNow').innerText = 'Your go Red'
            irmCon()
            nowPlaying = 'red'
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
