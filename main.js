// eight ball number
let randomNumber = Math.floor(Math.random() * 8);

// eight ball question
let eightBall = '';

// control flow questions
if (randomNumber === 0) {
    console.log(eightBall = 'it is certain');
} else if (randomNumber === 1) {
    console.log(eightBall = 'it is decidedly so');
} else if (randomNumber === 2) {
    console.log(eightBall = 'reply hazy try again');
} else if (randomNumber === 3) {
    console.log(eightBall = 'cannot predict now');
} else if (randomNumber === 4) {
    console.log(eightBall = 'do not count on it');
} else if (randomNumber === 5) {
    console.log(eightBall = 'my sources say no');
} else if (randomNumber === 6) {
    console.log(eightBall = 'outlook not so good'); 
} else if (randomNumber === 7) {
    console.log(eightBall = 'signs point to yes');
}

console.log(`The Magic 8 Ball says, ${eightBall}.`);
