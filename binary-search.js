function binarySearch(list, item) {
	// [2, 6, 7, 90, 103], 90   <=====
	var min = 0; // becomes 1
	var max = list.length - 1; //4
	var guess;

	while (min <= max) {
		guess = Math.floor((min + max) / 2);
		// 2  <===== Our guess
		if (list[guess] === item) {
			return guess;
		} else {
			if (list[guess] < item) {
				min = guess + 1; //min gets incremented to 1
			}
			else {
				max = guess - 1;
			}
		}
	}

	return -1;
}

binarySearch([2, 6, 7, 90, 103], item);
