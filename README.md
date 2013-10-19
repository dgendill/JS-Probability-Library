# Javascript Probability Library

This is a basic library for solving problems involving factorials, permutations, and combinations.

## Getting Started

### <script>

The Probability object will be added on the global

    <script src="Probability.js"></script>

    <script>
        // 30240 different ways for the 10 items to be arranged in 5 spaces
        Probability.permutations(5,10);     
    </script>

### CommonJs

Configure CommonJS and set Probability as a dependency.
    
    // Dependency path may vary depending on your project
    define('MyModule', ['./Probability'], function(Probability) {
        // 30240 different ways for the 10 items to be arranged in 5 spaces
        Probability.permutations(5,10);
    });

## Functions

### permutations(spots, items)

Example:
5 empty chairs = 5 spots
10 people to sit in the chairs = 10 items

        10!       3628800
     -------  =  -------- = 30240
     (10-5)!       120
There are 30240 different ways for the 10 people to sit in the 5 chairs

### combinations(spots, items)

Example:

5 empty chairs = 5 spots
10 people to sit in the chairs = 10 items

Combinations do not care about order.
ABC, ACB, BAC, BCA, CAB, and CBA all count as one combination.
Similarly, DEF
 

     30240
     ----- = 252
      5!
There are 252 order-independant ways that the 10 people can sit down

### factorial(n)

Solves a factorials. Example: factorial(5) = 5! = 5 * 4 * 3 * 2 * 1 = 120

### random(lbound, ubound)

Returns random number between lbound and ubound. Defaults to lbound 0 and ubound 10.
