// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (string,number) {
		var str = "";
		for (var i = 0 ; i < number ; i++){
			str += string
		}
		return str;
	}