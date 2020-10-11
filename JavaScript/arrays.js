// SECTION Methods
// Sort Array from least to greatest

let arr = [1, 3, 4, 5, 1];
arr.sort(function (a, b) {
	return a - b;
});

console.log(arr);

//SECTION Useful Functions

function removeDuplicateNums(array) {
	let newArray = array;

	// Sort Array from least to greatest
	newArray.sort(function (a, b) {
		a - b;
	});

	// Removes duplicates
	let count = null;
	newArray.forEach((element, index) => {
		if (count === element) {
			newArray.splice(index, 1);
		} else {
			count = element;
		}
	});

	console.log(newArray);
	return newArray;
}

removeDuplicateNums([1, 2, 2, 3, 4, 5, 5]);

function getSecondLargestNumber(nums) {
	let arr = nums;
	arr.sort(function (a, b) {
		return a - b;
	});
	console.log(arr);

	let count = null;
	arr.forEach((element, index) => {
		if (count === element) {
			arr.splice(index, 1);
		} else {
			count = element;
		}
	});

	// Find maximum number of the array
	let maxNumber = Math.max.apply(null, arr);
	// Remove the maximum number of the array
	arr.splice(arr.indexOf(maxNumber), 1);
	// Find maximum number of the array (second greatest number)
	let newMaxNumber = Math.max.apply(null, arr);

	return newMaxNumber;
}

getSecondLargestNumber([2, 3, 6, 6, 5]);

function getLargestNumber(nums) {
	let arr = nums;
	arr.sort(function (a, b) {
		return a - b;
	});
	console.log(arr);

	let count = null;
	arr.forEach((element, index) => {
		if (count === element) {
			arr.splice(index, 1);
		} else {
			count = element;
		}
	});

	// Find maximum number of the array
	let maxNumber = Math.max.apply(null, arr);

	return maxNumber;
}

getLargestNumber([2, 3, 6, 6, 5]);

function findTotalWords(arr) {
	let count = 0;

	arr.forEach((item) => {
		item.split(' ').forEach((item) => {
			return (count = count + 1);
		});
	});
	return count;
}

const testWordCount = ['hi hi', 'hi hi', 'hi hi'];
console.log(findTotalWords(testWordCount));

// SECTION Shuffles

// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

// Durstenfeld Shuffle Algorithm
function shuffle(array) {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(
			Math.random() * currentIndex
		);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	console.log(array);
	return array;
}

// Ghetto Randomize Array
// https://javascript.info/task/shuffle#:~:text=sort%20(%20(%20)%20%3D%3E%20Math,sorting%20function%20reorders%20elements%20randomly.

function randomizeArry(array) {
	array.sort(() => {
		return Math.random() - 0.5;
	});
}
