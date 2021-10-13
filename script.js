var roundScore, totalScore, playerActive, dice;

function newGame() {
    roundScore = 0;
    totalScore = [0,0];
    playerActive = 0;
    
    document.getElementById("p1-totalscore").textContent = 0;
    document.getElementById("p2-totalscore").textContent = 0;
    document.getElementById("p1-currentscore").textContent = 0;
    document.getElementById("p2-currentscore").textContent = 0;
    
    document.querySelector(".diceImage").style.visibility = "hidden";
    document.querySelector(".gameover").style.visibility = "hidden";
}

newGame();

document.querySelector(".roll").addEventListener("click", function(){
    dice = Math.ceil(Math.random()*6);

    diceElement = document.querySelector(".diceImage");

    diceElement.style.visibility = "visible";

    diceElement.src = "img/" + dice + ".png";

if (dice !== 1) {
    roundScore = roundScore + dice;
    
    document.querySelector("#p" + (playerActive + 1) + "-currentscore").textContent = roundScore;
}

else {
    setTimeout(function() {nextPlayer()}, 1000);
}
});

function nextPlayer() {

    if (playerActive == 0) {
        playerActive = 1;
    } 
    
    else {
        playerActive = 0;
    }

    roundScore = 0;

    document.getElementById("p1-currentscore").textContent = 0;
    document.getElementById("p2-currentscore").textContent = 0;

    document.querySelector(".diceImage").style.visibility = "hidden";

    document.querySelector(".player1score").classList.toggle("active");
    document.querySelector(".currentscore1").classList.toggle("active");
    document.querySelector(".player2score").classList.toggle("active");
    document.querySelector(".currentscore2").classList.toggle("active");
}


document.querySelector(".addscore").addEventListener("click", function() {
    totalScore[playerActive] = totalScore[playerActive] + roundScore;

    document.querySelector("#p" + (playerActive + 1) + "-totalscore").textContent = totalScore[playerActive];

    if (totalScore[playerActive] >= 20) {
        document.getElementById("winner").textContent = "Player " + (playerActive + 1) + " wins!";
        document.querySelector(".gameover").style.visibility = "visible";
    }

    else {
        nextPlayer();
    }
});

document.getElementById("newgame").addEventListener("click", function() {
    newGame();
});