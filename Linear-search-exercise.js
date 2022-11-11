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
