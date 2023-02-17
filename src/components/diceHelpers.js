export function getAllDice() {
	const newArr = [];
	for (let i = 0; i < 10; i++) {
		newArr.push(getRandomDiceNumber());
	}
	return newArr;
}

export function getRandomDiceNumber() {
	// 1 to 6 range
	return Math.ceil(Math.random() * 6);
}
