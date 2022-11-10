// Exercise 1
//
// Task 1: Write a function , times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => n * 10;

console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
console.log("times10 returns;", times10(9));

//Task 2: Use an object to cache the results of your times10 function.
//protip 1: Create a function that checks if the value for n has been calculated before.
//protup 2: If the value for n has not been calculated, calculate and then save the result in the cache object.
//

const cache = {};
const result = [];

const memoTimes10 = (n) => {
	if (n in cache) {
		console.log("Fetching from cache: n");
		return cache[n];
	} else {
		console.log("Calculating result");
		let result = times10(n);
		cache[n] = result;
		return result;
	}
};

console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~");
console.log("Task 2 calculated value:", memoTimes10(9)); //Calculated
consol.log("Task 2 cached value:", memoTimes10(9)); //cache

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.
const memoizedClosureTimes10 = () => {
	let cache = {};
	return (n) => {
		if (n in cache) {
			console.log('Fetching from cache:', n);
			return cache [n];
		}
		else {
			console.log('Calculating result');
			let result = n * 10;
			cache[n] = result;
			return result;
		}
	};
};










// return function from memoizedAdd
const memoClosureTimes10 = memoizedClosureTimes10();
console.log('~~~~~~~~~~~~TASK 3~~~~~~~~~~');
try {
	console.log('Task 3 calculated value:', memoizedClosureTimes10(9)); //calculated
	console.log('Task 3 cached value:', memoizedClosureTimes10(9)); //cached
} catch(e) {
	console.error('Task 3:', e);
}







// const times10 = (n) => (n * 10);
// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.
const memoize = (cb) => {
	let cache = {};
	return (n) => {
		if (n in cache) {
			console.log('Fetching from cache: ', n);
			return cache[n];
		}
		else {
			console.log('Calculating result');
			let result = cb(n);
			cache[n] = result;
			return result;
		}
	};

};

// returned function from memoizedAdd
const memoizedTimes10 = memoize(times10);
console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
try {
	console.log('Task 4 calculated value:', memoizedTimes10(9));	// calculated
	console.log('Task 4 cached value:', memoizedTimes10(9));	// cached
} catch(e) {
	console.error('Task 4:', e)
}
