/**
 * Note: I did not put any method of connecting the "1-input.txt" file to this code. Just assume that this is run in a simple Console environment or something.
 */

/**
 * Converts the given string where each line is a new number into an array of numbers.
 * @param {string} input The 1-input.txt file's content
 */
function parseArray(input) {
	return input
		// Split every newline
		.split('\n')
		// Remove the last one because it will be NaN
		.splice(-1)
		// Convert everything into an array of numbers (remove '+' symbol)
		.map(x => parseInt(x.replace('+', '')));
}

/**
 * Get the sum of all numbers in the array
 * @param {number[]} array The array of numbers from the input
 */
function partOne(array) {
	// Add them all up
	return array.reduce((a, b) => a + b);
}

/**
 * Keeps adding the numbers from the array until it finds a sum that has been repeated.
 * @param {number[]} array The array of numbers from the input
 */
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