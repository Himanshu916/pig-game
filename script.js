const totalScore1El = document.querySelector(".player-1-total-score");
const totalScore2El = document.querySelector(".player-2-total-score");
const currentScore0El = document.querySelector(".player-1-current-score");
const currentScore1El = document.querySelector(".player-2-current-score");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");

const diceEl = document.querySelector(".dice");
const btnNewEl = document.querySelector(".new-game");
const btnRollEl = document.querySelector(".roll-dice");
const btnHoldEl = document.querySelector(".hold");

totalScore1El.textContent=0;
totalScore2El.textContent=0;
diceEl.classList.add("hidden")

let currentScore =0;
let activePlayer =1;
let totalScores = [0,0];
let playing = true;


const switchPlayer =()=>
{
    currentScore =0;
    document.querySelector(`.player-${activePlayer}-current-score`).textContent = currentScore;
    activePlayer= activePlayer ===1?2:1;
    player1.classList.toggle("player--active")
    player2.classList.toggle("player--active")

}

btnNewEl.addEventListener("click",()=>
{
    playing=true;
    totalScores=[0,0];
    currentScore=0;

    player1.classList.add("player--active")
    player2.classList.remove("player--active")

    document.querySelector(`.player-${activePlayer}`).classList.remove("player-winner");
    activePlayer=1;

    currentScore0El.textContent=currentScore;
    currentScore1El.textContent=currentScore;
    totalScore1El.textContent=0;
    totalScore2El.textContent=0;
    diceEl.classList.add("hidden");


})
btnRollEl.addEventListener("click",()=>
{
    if(playing)
    {

    const dice = Math.trunc(Math.random()*6)+1;
    diceEl.classList.remove("hidden")
    diceEl.src=`images/dice-${dice}.png`;
   
    if(dice !==1)
    {
        currentScore += dice;
        document.querySelector(`.player-${activePlayer}-current-score`).textContent = currentScore;;
       

    }
    else{
     
        switchPlayer()

    }
}
})



btnHoldEl.addEventListener("click",()=>
{
    if(playing)
    {

    
    totalScores[activePlayer-1] += currentScore;
    document.querySelector(`.player-${activePlayer}-total-score`).textContent=totalScores[activePlayer-1];

    // switch Player
    if(totalScores[activePlayer-1]>=100)
    {
        playing=false;
        document.querySelector(`.player-${activePlayer}`).classList.remove("player--active")
        document.querySelector(`.player-${activePlayer}`).classList.add("player-winner");
        diceEl.classList.add("hidden")
      
    }
   
    else
    {
        switchPlayer()
    }
}
})