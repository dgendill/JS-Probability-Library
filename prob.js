function probability() {
	function random() {
		// Returns random number between 0 and 10
		var r = Math.random();
		return (Math.round(r*Math.pow(10,1))*10)/Math.pow(10,1);
	}

	function factorial(n) {
		// Solves factorials.
		// Example:
		// 5! = 5 * 4 * 3 * 2 * 1 = 120
		if ((n == 0) || (n == 1))
			return 1
		else {
		  result = (n * factorial(n-1) )
		  return result
		}
	}
	function permutations (spots, items) {
		// Use: permutations(5,10)
		// Example:
		// 5 empty chairs = 5 spots
		// 10 people to sit in the chairs = 10 items
		// 
		// 		   10!		 3628800
		//		-------  =  -------- = 30240
		//		(10-5)!       120
		//
		// There are 30240 different ways for the 10 people to sit in the 5 chairs
		return factorial(items)/factorial(items-spots);
	}
	function combinations (spots, items) {
		// Example:
		//
		// 5 empty chairs = 5 spots
		// 10 people to sit in the chairs = 10 items
		//
		// Combinations do not care about order.
		// ABC, ACB, BAC, BCA, CAB, and CBA all count as one combination.
		// Similarly, DEF
		// 
		//
		// 		30240
		//		----- = 252
		//		 5!
		//
		// There are 252 order-independant ways that the 10 people can sit down
		return permutations(spots,items)/factorial(spots);
	}
	return {
		permutations:permutations,
		combinations:combinations,
		random:random
	}
}
