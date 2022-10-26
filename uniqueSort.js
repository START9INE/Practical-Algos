//Task: Transform this soimple sorting alogorithm into a unique sort.
//It should not return any diplicate values in the sorted array.
//
//input: [1, 4 ,2 ,1] => output: [1, 2, 5]
//input: [4, 2, 2, 3 ,2 ,2 ,2] => output: [2, 3, 4]
//
const uniqSort = function (arr) {
	const breadcrumbs = {};
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		if (!breadcrumbs[arr[i]]) {
			result.push(arr[i]);
			breadcrumbs[arr[i]] = true;
		}
	}

	return arr.sort((a, b) => a - b);
};
uniqSort([4, 2, 2, 3, 2, 2, 2]); // => [2, 3, 4]


// Result of the above operation
//=> result = [4, 2, 3] 
//=> breadcrumbs = {4: true, 2: true, 3:true}
