// Connect to the Board
//RESET

let nowPlaying = 'red'
let finalizado = false
let gridCircles = document.querySelectorAll('.circles')
let startOver = document.querySelector('.resetBtn')
const divPlayingNow = document.querySelector ('.playingNow') //Thanks Glenn for help on the cleanup


const irmaosGo = () => {
    

const irmCon = () => {
    
    if (gridCircles[35].style.background === nowPlaying && gridCircles[28].style.background ===
        nowPlaying && gridCircles[21].style.background === nowPlaying && gridCircles[14].style.background ===
        nowPlaying)  {
        finalizado = true
        divPlayingNow.innerText = nowPlaying + ' takes the board!'
        console.log(divPlayingNow)
    } else if (gridCircles[35].style.background === nowPlaying && gridCircles[29].style.background ===
        nowPlaying && gridCircles[23].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying) {  
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[35].style.background === nowPlaying && gridCircles[36].style.background ===
        nowPlaying && gridCircles[37].style.background === nowPlaying && gridCircles[38].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[36].style.background === nowPlaying && gridCircles[29].style.background ===
        nowPlaying && gridCircles[22].style.background === nowPlaying && gridCircles[15].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[36].style.background === nowPlaying && gridCircles[30].style.background ===
        nowPlaying && gridCircles[24].style.background === nowPlaying && gridCircles[18].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[36].style.background === nowPlaying && gridCircles[37].style.background ===
        nowPlaying && gridCircles[38].style.background === nowPlaying && gridCircles[39].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[37].style.background === nowPlaying && gridCircles[30].style.background ===
        nowPlaying && gridCircles[23].style.background === nowPlaying && gridCircles[16].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[37].style.background === nowPlaying && gridCircles[31].style.background ===
        nowPlaying && gridCircles[25].style.background === nowPlaying && gridCircles[19].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[37].style.background === nowPlaying && gridCircles[38].style.background ===
        nowPlaying && gridCircles[39].style.background === nowPlaying && gridCircles[40].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[38].style.background === nowPlaying && gridCircles[31].style.background ===
        nowPlaying && gridCircles[24].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[38].style.background === nowPlaying && gridCircles[32].style.background ===
        nowPlaying && gridCircles[26].style.background === nowPlaying && gridCircles[20].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[38].style.background === nowPlaying && gridCircles[39].style.background ===
        nowPlaying && gridCircles[40].style.background === nowPlaying && gridCircles[41].style.background ===
        nowPlaying) {  
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[38].style.background === nowPlaying && gridCircles[30].style.background ===
        nowPlaying && gridCircles[22].style.background === nowPlaying && gridCircles[14].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[39].style.background === nowPlaying && gridCircles[32].style.background ===
        nowPlaying && gridCircles[25].style.background === nowPlaying && gridCircles[18].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[39].style.background === nowPlaying && gridCircles[31].style.background ===
        nowPlaying && gridCircles[23].style.background === nowPlaying && gridCircles[15].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[40].style.background === nowPlaying && gridCircles[33].style.background ===
        nowPlaying && gridCircles[26].style.background === nowPlaying && gridCircles[19].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[40].style.background === nowPlaying && gridCircles[32].style.background ===
        nowPlaying && gridCircles[24].style.background === nowPlaying && gridCircles[16].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[41].style.background === nowPlaying && gridCircles[34].style.background ===
        nowPlaying && gridCircles[27].style.background === nowPlaying && gridCircles[20].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[41].style.background === nowPlaying && gridCircles[33].style.background ===
        nowPlaying && gridCircles[25].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[28].style.background === nowPlaying && gridCircles[21].style.background ===
        nowPlaying && gridCircles[14].style.background === nowPlaying && gridCircles[7].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[28].style.background === nowPlaying && gridCircles[22].style.background ===
        nowPlaying && gridCircles[16].style.background === nowPlaying && gridCircles[10].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[28].style.background === nowPlaying && gridCircles[29].style.background ===
        nowPlaying && gridCircles[30].style.background === nowPlaying && gridCircles[31].style.background ===
        nowPlaying) {  
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[29].style.background === nowPlaying && gridCircles[22].style.background ===
        nowPlaying && gridCircles[15].style.background === nowPlaying && gridCircles[8].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[29].style.background === nowPlaying && gridCircles[23].style.background ===
        nowPlaying && gridCircles[17].style.background === nowPlaying && gridCircles[11].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[29].style.background === nowPlaying && gridCircles[30].style.background ===
        nowPlaying && gridCircles[31].style.background === nowPlaying && gridCircles[32].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[30].style.background === nowPlaying && gridCircles[23].style.background ===
        nowPlaying && gridCircles[16].style.background === nowPlaying && gridCircles[9].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[30].style.background === nowPlaying && gridCircles[24].style.background ===
        nowPlaying && gridCircles[18].style.background === nowPlaying && gridCircles[12].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[30].style.background === nowPlaying && gridCircles[31].style.background ===
        nowPlaying && gridCircles[32].style.background === nowPlaying && gridCircles[33].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[31].style.background === nowPlaying && gridCircles[24].style.background ===
        nowPlaying && gridCircles[17].style.background === nowPlaying && gridCircles[10].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[31].style.background === nowPlaying && gridCircles[23].style.background ===
        nowPlaying && gridCircles[15].style.background === nowPlaying && gridCircles[7].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[31].style.background === nowPlaying && gridCircles[25].style.background ===
        nowPlaying && gridCircles[19].style.background === nowPlaying && gridCircles[13].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[31].style.background === nowPlaying && gridCircles[32].style.background ===
        nowPlaying && gridCircles[33].style.background === nowPlaying && gridCircles[34].style.background ===
        nowPlaying) {  
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[32].style.background === nowPlaying && gridCircles[25].style.background ===
        nowPlaying && gridCircles[18].style.background === nowPlaying && gridCircles[11].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[32].style.background === nowPlaying && gridCircles[24].style.background ===
        nowPlaying && gridCircles[16].style.background === nowPlaying && gridCircles[8].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[33].style.background === nowPlaying && gridCircles[26].style.background ===
        nowPlaying && gridCircles[19].style.background === nowPlaying && gridCircles[12].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[33].style.background === nowPlaying && gridCircles[25].style.background ===
        nowPlaying && gridCircles[17].style.background === nowPlaying && gridCircles[9].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[34].style.background === nowPlaying && gridCircles[27].style.background ===
        nowPlaying && gridCircles[20].style.background === nowPlaying && gridCircles[13].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[34].style.background === nowPlaying && gridCircles[26].style.background ===
        nowPlaying && gridCircles[18].style.background === nowPlaying && gridCircles[10].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[21].style.background === nowPlaying && gridCircles[14].style.background ===
        nowPlaying && gridCircles[7].style.background === nowPlaying && gridCircles[0].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[21].style.background === nowPlaying && gridCircles[15].style.background ===
        nowPlaying && gridCircles[9].style.background === nowPlaying && gridCircles[3].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[21].style.background === nowPlaying && gridCircles[22].style.background ===
        nowPlaying && gridCircles[23].style.background === nowPlaying && gridCircles[24].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[22].style.background === nowPlaying && gridCircles[15].style.background ===
        nowPlaying && gridCircles[8].style.background === nowPlaying && gridCircles[1].style.background ===
        nowPlaying) {  
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[22].style.background === nowPlaying && gridCircles[16].style.background ===
        nowPlaying && gridCircles[10].style.background === nowPlaying && gridCircles[4].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[22].style.background === nowPlaying && gridCircles[23].style.background ===
        nowPlaying && gridCircles[24].style.background === nowPlaying && gridCircles[25].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[23].style.background === nowPlaying && gridCircles[16].style.background ===
        nowPlaying && gridCircles[9].style.background === nowPlaying && gridCircles[2].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[23].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying && gridCircles[11].style.background === nowPlaying && gridCircles[5].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[23].style.background === nowPlaying && gridCircles[24].style.background ===
        nowPlaying && gridCircles[25].style.background === nowPlaying && gridCircles[26].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[24].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying && gridCircles[10].style.background === nowPlaying && gridCircles[3].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[24].style.background === nowPlaying && gridCircles[18].style.background ===
        nowPlaying && gridCircles[12].style.background === nowPlaying && gridCircles[6].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[24].style.background === nowPlaying && gridCircles[25].style.background ===
        nowPlaying && gridCircles[26].style.background === nowPlaying && gridCircles[27].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[24].style.background === nowPlaying && gridCircles[16].style.background ===
        nowPlaying && gridCircles[8].style.background === nowPlaying && gridCircles[0].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[25].style.background === nowPlaying && gridCircles[18].style.background ===
        nowPlaying && gridCircles[11].style.background === nowPlaying && gridCircles[4].style.background ===
        nowPlaying) {  
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[25].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying && gridCircles[9].style.background === nowPlaying && gridCircles[1].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[26].style.background === nowPlaying && gridCircles[19].style.background ===
        nowPlaying && gridCircles[12].style.background === nowPlaying && gridCircles[5].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[26].style.background === nowPlaying && gridCircles[18].style.background ===
        nowPlaying && gridCircles[10].style.background === nowPlaying && gridCircles[2].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[27].style.background === nowPlaying && gridCircles[20].style.background ===
        nowPlaying && gridCircles[13].style.background === nowPlaying && gridCircles[6].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[27].style.background === nowPlaying && gridCircles[19].style.background ===
        nowPlaying && gridCircles[11].style.background === nowPlaying && gridCircles[3].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[14].style.background === nowPlaying && gridCircles[15].style.background ===
        nowPlaying && gridCircles[16].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[15].style.background === nowPlaying && gridCircles[16].style.background ===
        nowPlaying && gridCircles[17].style.background === nowPlaying && gridCircles[18].style.background ===
        nowPlaying) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[16].style.background === nowPlaying && gridCircles[17].style.background ===
        nowPlaying && gridCircles[18].style.background === nowPlaying && gridCircles[19].style.background ===
        nowPlaying ) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[17].style.background === nowPlaying && gridCircles[18].style.background ===
        nowPlaying && gridCircles[19].style.background === nowPlaying && gridCircles[20].style.background ===
        nowPlaying ) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[7].style.background === nowPlaying && gridCircles[8].style.background ===
        nowPlaying && gridCircles[9].style.background === nowPlaying && gridCircles[10].style.background ===
        nowPlaying ) {  
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[8].style.background === nowPlaying && gridCircles[9].style.background ===
        nowPlaying && gridCircles[10].style.background === nowPlaying && gridCircles[11].style.background ===
        nowPlaying ) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[9].style.background === nowPlaying && gridCircles[10].style.background ===
        nowPlaying && gridCircles[11].style.background === nowPlaying && gridCircles[12].style.background ===
        nowPlaying ) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[10].style.background === nowPlaying && gridCircles[11].style.background ===
        nowPlaying && gridCircles[12].style.background === nowPlaying && gridCircles[13].style.background ===
        nowPlaying ) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[0].style.background === nowPlaying && gridCircles[1].style.background ===
        nowPlaying && gridCircles[2].style.background === nowPlaying && gridCircles[3].style.background ===
        nowPlaying ) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[1].style.background === nowPlaying && gridCircles[2].style.background ===
        nowPlaying && gridCircles[3].style.background === nowPlaying && gridCircles[4].style.background ===
        nowPlaying ) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[2].style.background === nowPlaying && gridCircles[3].style.background ===
        nowPlaying && gridCircles[4].style.background === nowPlaying && gridCircles[5].style.background ===
        nowPlaying ) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else if (gridCircles[3].style.background === nowPlaying && gridCircles[4].style.background ===
        nowPlaying && gridCircles[5].style.background === nowPlaying && gridCircles[6].style.background ===
        nowPlaying ) {
        finalizado = true
       divPlayingNow.innerText = nowPlaying + ' takes the board!'
    } else {
        let red = 0
        let green = 0
        for (let i = 0; i < gridCircles.length; i++) {
            if (gridCircles[i].style.background === 'red') {
                red++
           } else if (gridCircles[i].style.background === 'green') {
               green++
           }
        }  if (red + green === 42) {
            document.querySelector('.playingNow').innerText = 'Dang. No reunion for the brothers. Sem reuniao de irmaos.'
        }
    }
  }

  let startOver = document.querySelector(".resetBtn").addEventListener("click", () => {
    finalizado = false
    const gridCircles = document.querySelectorAll(".circles");
        for(let i = 0; i < gridCircles.length; i++) {
            gridCircles[i].style.background = ""
    }
    document.querySelector(".playingNow").innerText = "Into the array we go..."
    nowPlaying = 'red'; 
});



gridCircles.forEach(slot => {
    const circZero = Array.from(gridCircles).indexOf(slot)
    slot.addEventListener('click', () => {
        if (nowPlaying === 'red' &&
            gridCircles[circZero].style.background!== 'green' && !finalizado) {
            // Kudos to Marvel Johnson for the clean up help!!
            gridCircles[circZero].style.background = 'red'
            document.querySelector('.playingNow').innerText = 'Your go Green'
            irmCon()
            nowPlaying = 'green'
        }  else if (nowPlaying === 'green' &&
            gridCircles[circZero].style.background!== 'red' && !finalizado) {   
            gridCircles[circZero].style.background = 'green'
            document.querySelector('.playingNow').innerText = 'Your go Red'
            irmCon()
            nowPlaying = 'red'
        } 
    });
});


}
irmaosGo()
