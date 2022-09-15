
function guessNumber() {

    let attempt = 0
    attempt++

    const randomNr = Math.floor(Math.random() * 10) + 1;
    let guess = parseInt(prompt('Guess a number from 1 to 10: '));

    while(guess !== randomNr) {
        guess = parseInt(prompt('Wrong answer! Please try again.'));
    }

    if (guess !== randomNr && attempt === 3){
    alert(`Sorry you failed to guess the number in three attemps. The number was ${randomNr}`)
    }


    else if(guess == randomNr) {
        alert('You guessed the correct number.');
    } 

} 

guessNumber();


//Attempts dont work ...