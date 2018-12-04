// Helper function used to convert the 1-input.txt file into an array of strings
function parseArray(input) {
	return input
		// Split every newline
		.split('\n')
		// Remove the last one because it will be NaN
		.splice(-1);
}

// Takes the array
// Returns the sum of all the numbers in it
function partOne(array) {
	return array
		// Convert all strings into numbers (and remove the + at the start)
		.map(x => parseInt(x.replace('+', '')));
}

function partTwo(array) {
	// A map of every sum that has previously been seen
	const map = {};
	// The current sum
	const sum = 0;
	// The current index in the array to fetch the next number
	const index = 0;

	// Keep looping until it reaches a sum that has already been seen
	while (map[sum] !== true) {
		// Mark the current sum as "seen"
		map[sum] = true;
		// Add the next number to the current sum
		sum += array[index];

		// Loop stuff
		index++;
		if (index >= array.length) index = 0;
	}
	return sum;
}