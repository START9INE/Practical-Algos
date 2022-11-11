// Task: rewriter this function so that it uses a loop rather than recursion
//
function joinElements(array, joinString) {
	function recurse(index, resultSoFar) {


		resultSoFar += array[index];

		if (index === array.length -1) {
			return resultSoFar;
		} else {
			return recurse(index + 1, resultSoFar + joinString);
		}
	}

	return recurse(0, '')
}
//==========================>
// Iterative approach below
//==========================>

function joinElements(array, joinString) {
	function iterate (index, resultSoFar) {

		resultSoFar = ''

		for (let i = 0; i < array.length -1; i++){
			resultSoFar += array[i] + joinString
				
		}
	}
	return resultSoFar + array[array.length -1];
}


joinElements(['s', 'cr', 't cod', ':) :)' ], 'e')



//========================================>
//Recrusive factorial method && memoization
//========================================>
//
//Task 1: Without peeking, write your own factorial method
//Task 2: Use your memo function from the previous exercise to memoize your factorial method


const memoize = (fn) => {
    let cache = {};
    return (...args) => {
	let n = args[0];
	if (n in cache) {

	}
	else {
	    console.log('Calculating result', n);
	    let result = fn(n);
	    cache[n] = result;
	    return result;
	}
    }
}
const factorial = memoize(
    (x) => {
	if (x === 0) {
	    return 1;
	}
	else {
	    return x * factorial(x -1);
	}
    }
)

console.log(factorial(5)); //calculated
console.log(factorial(6)); // calculated for 6 
