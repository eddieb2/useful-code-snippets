/**
 * Generates an array with a specific range of numbers
 * @param  {Number} lowNum
 * @param  {Number} highNum
 */

const rangeGenerator = (lowNum, highNum) => {
	const lowBound = lowNum;
	const highBound = highNum;

	let rangeOfNums = Array.from({ length: highBound - lowBound + 1 }, (x, i) => i + lowBound);

	return rangeOfNums;
};

rangeGenerator(1, 1000);
