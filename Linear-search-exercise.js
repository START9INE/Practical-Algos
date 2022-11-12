// TASK: Implement Linear search.

function linearSearch(list, item) {
	let index = -1;
	list.forEach((element, i) => {
		if (element === item) {
			index = i;
		}
	});
	return index;
}

LinearSearch([2, 6, 7, 90, 103], 90);
