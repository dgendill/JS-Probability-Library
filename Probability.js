// https://github.com/umdjs/umd/blob/master/commonjsStrict.js
// Uses CommonJS, AMD or browser globals to create a module.
(function () {
    
    function Probability() {
    	
		this.random = function(lbound,ubound) {
			// Returns random number between lbound and ubound
			// defaults to 0 and 10
			lbound = lbound || 0;
			ubound = ubound || 10;

			return Math.floor( Math.random() * (ubound-lbound) ) + lbound;

		};

		this.factorial = function (n) {
			// Solves factorials.
			// Example:
			// 5! = 5 * 4 * 3 * 2 * 1 = 120
			if ((n == 0) || (n == 1))
				return 1
			else {
			  result = (n * this.factorial(n-1) )
			  return result
			}
		};

		this.permutations = function (spots, items) {

			if (spots > items) {
				throw 'Number of spots is greater than items' + new Error().stack;
				return;
			}
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
			return this.factorial(items)/this.factorial(items-spots);
		};

	    this.combinations = function (spots, items) {
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
			return this.permutations(spots,items)/this.factorial(spots);
		};
	}

    // attach properties to the exports object to define
    // the exported module properties.
     if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports'], new Probability);
    } else if (typeof exports === 'object') {
        // CommonJS
        // factory(exports, require('b'));
        exports = new Probability();

    } else {
        // Browser globals
        this.Probability = new Probability;
    }

}());

