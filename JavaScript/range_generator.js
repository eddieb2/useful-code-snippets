/**
 * Generates an array with a specific range of numbers
 * @param  {Number} lowNum - Lowest boundary of the range (inclusive)
 * @param  {Number} highNum - Highest boundary of the range (inclusive)
 */

const rangeGenerator = (lowBound, highBound) => {
	if (!Number.isInteger(lowBound) || !Number.isInteger(highBound)) {
		throw new Error('Enter a number.');
	}

	const rangeOfNums = Array.from({ length: highBound - lowBound + 1 }, (x, i) => i + lowBound);

	return rangeOfNums;
};
