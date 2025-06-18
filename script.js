let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const playGame = (userChoice) => {
    console.log(`User choice = ${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`Computer Choice = ${compChoice}`);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            // paper, scissors
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            // rock , scissors
            userWin = compChoice === 'scissors' ? false : true;
        } else {
            // rock , paper 
            userWin = compChoice === 'rock' ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }


};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log('you Win the Game');
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    } else {
        console.log('you loss the game! Better luck next time.');
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}

const drawGame = () => {
    console.log('Game was Draw.');
    msg.innerText = 'Draw! Play again';
    msg.style.backgroundColor = 'blue';

}

const genCompChoice = () => {
    const option = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});