// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < (arr.length - i - 1); j++) {
            let temp = arr[j];
            if(arr[j] > arr[j+1]) {
                // arr[j] = arr[j+1];
                // arr[j+1] = temp;
                [ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
            }
        }
    }
    return arr;
    // return arr.sort((a,b) => { return a-b })
}

function selectionSort(arr) {
	for (i = 0; i < arr.length; i++) {
		let indexOfMin = i;
		for (j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) {
				indexOfMin = j;
			}

		}
		if (indexOfMin !== i) {
			// let temp = arr[i];
			// arr[i] = arr[indexOfMin];
			// arr[indexOfMin] = temp;
			[ arr[indexOfMin], arr[i] ] = [ arr[i], arr[indexOfMin] ];
		}
	}
	return arr;
}

function mergeSort(arr) {
	if(arr.length === 1) {
		return arr;
	}

	const center = Math.floor(arr.length/2);
	const left = arr.slice(0, center); // Take everything from element 0 to center (not including center);
	const right = arr.slice(center); // Take everything from center to the end

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const result = [];

	while(left.length && right.length) {
		if(left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	
	// if (left.length || right.length) {
	// 	const leftover = ( left.shift() ) ? left.shift() : right.shift();
	// 	result.push(leftover);
	// }
	
	// Spread operator on all three arrays to a new array
	return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
