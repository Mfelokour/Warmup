// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){
	gameBox = {};
  gameBox.upper = upperbound;
  gameBox.rand = randInt(upper);
  gameBox.counter = 0;
  gameBox.guessMyNumber = guessMyNumber;
  gameBox.giveUp = giveUp;
  gameBox.numOfGuesses = numOfGuesses;
  return gameBox
}
  	

function guessMyNumber(n) {
   var upper1 = this.upper;
   var upperbound1 = this.upperbound;
   var rand1 = this.rand;
  	counter++;
	if (n > upper1) {
	    return "Out of bounds! Please try a number between 0 and " + upperbound1 + ".";
	} else if (n === rand1) {
	    return "You guessed my number!";
	}
	    return "Nope! That wasn't it!";
}

function giveUp(){
    	return this.rand;
}



function numOfGuesses(){
    	return this.counter;
}