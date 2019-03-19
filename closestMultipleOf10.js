 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	arr = []
 	arr.push(num,num+1,num+2,num+3,num+4,num+5,num+6,num+7,num+8,num+9,num+10) //making an array of the numbers following the number input
 	for( i = 0; i < arr.length; i++){ //iterating over the array
 		if(arr[i]%10 === 0){    //searching for the closest number divisable by 10
 			return arr[i]; 		// returning the number.
 		}
 	}
 }