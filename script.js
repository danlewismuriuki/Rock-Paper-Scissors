 function getComputerChoice() {
    choices = ["Rock","Paper","Scissors"];

    const randomNum = Math.floor(Math.random() * 3);

    // Map the random number to 'Rock', 'Paper', or 'Scissors'
    switch (randomNum) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

// Test the function
const computerChoice = getComputerChoice();
console.log('Computer chose: ' + computerChoice);





 