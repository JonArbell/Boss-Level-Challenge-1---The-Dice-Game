document.addEventListener('keydown',generateDice);
document.addEventListener('click',generateDice);

function start(){
    const player1Dice = document.querySelectorAll('.dices1');
    const player2Dice = document.querySelectorAll('.dices2');

    player1Dice[5].style.display = 'block';
    player2Dice[5].style.display = 'block';

}
start();


function generateDice(){

    const player1Dice = document.querySelectorAll('.dices1');
    const player2Dice = document.querySelectorAll('.dices2');

    for(let i = 0; i < player1Dice.length;i++){
        player1Dice[i].style.display = 'none';
        player2Dice[i].style.display = 'none';
    }
    
    const player1Score = parseInt(Math.random()*6) + 1;
    const player2Score = parseInt(Math.random()*6) + 1;

    player1Dice[player1Score-1].style.display = 'block';
    player2Dice[player2Score-1].style.display = 'block';
    
    const winner = player1Score > player2Score ? "🚩Player 1 Wins!" : player1Score < player2Score ? "Player 2 Wins!🚩" : "Tie!";
    
    document.getElementById('title').textContent = winner;
   
}


