import { nanoid } from "nanoid";

export function getAllDice() {
	const newArr = [];
	for (let i = 0; i < 10; i++) {
		newArr.push(getRandomDiceObj());
	}
	return newArr;
}

export function getRandomDiceObj() {
	// 1 to 6 range
	return {
		id: nanoid(),
		isHeld: false,
		number: Math.ceil(Math.random() * 6),
	};
}
