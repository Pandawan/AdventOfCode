const fs = require('fs');

fs.readFile('./2/2-input.txt', 'utf8', (err, data) => {
    if (err) {
        throw err;
    } else {
        const idArray = parseArray(data);
        console.log(partOne(idArray));
        console.log(partTwo(idArray));
    }
});

/**
 * Converts the given string where each line is a new ID into a line of string IDs.
 * @param {string} input The input.txt file's content
 */
function parseArray(input) {
    return input
        .replace(/\r/g, '')
        // Split every newline
        .split(/\n/g);
}

/**
 * The goal is to find a simple checksum by getting the amount of IDs that have 2-letter occurences * the amount of IDs that have 3-letter occurences
 */
function partOne(array) {
    // Creates a map of every occurence in each ID (without repeats for the same ID in the same category)
    const map = {};
    // Loop through each line
    array.forEach((line) => {
        // Create a map of the occurence of each character in that line
        const lineMap = {};
        // Loop through each and count the number of occurences of each charater
        line.split('').forEach((char) => {
            if (lineMap[char]) lineMap[char] += 1;
            else lineMap[char] = 1;
        });
        // Keep track of whether or not a specific value/category has already been accounted for in this line
        const counted = {};
        Object.entries(lineMap).forEach((entry) => {
            const [key, value] = entry;

            if (!counted[value]) {
                if (map[value]) map[value] += 1;
                else map[value] = 1;
            }
            counted[value] = true;
        });
    });
    // Get result
    return map['2'] * map['3'];
}

/**
 * The goal is to find two strings which only have ONE character that is different from the other.
 * 
 * Plan: Loop through each line (two at a time), then check for char pos in both of them, keep track of how many are different
 */
function partTwo(array) {
    let result = {};
    for (let x = 0; x < array.length; x++) {
        for (let y = x + 1; y < array.length; y++) {
            result = getDifference(array[x], array[y]);

            if (result.differences < 2) {
                return result;
            }
        }
    }
    return undefined;
}

/**
 * Finds how many characters are different in a string (order matters).
 * Returns the number of characters different, and an output string with all of the matching characters (in order).
 * @param {string} a The first string to test on
 * @param {string} b The second string to test on
 */
function getDifference(a, b) {
    let result = {
        differences: 0,
        output: ''
    };
    a.split('').forEach((value, index) => {
        if (value !== b.split('')[index]) {
            result.differences += 1;
        } else {
            result.output += value;
        }
    });
    return result;
}