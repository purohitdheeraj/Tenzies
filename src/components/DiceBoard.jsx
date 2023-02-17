import React, { useState } from "react";
import Die from "./Die";
import {
	getAllDice,
	getRandomDiceObj,
} from "./diceHelpers";

function DiceBoard() {
	const [diceArr, setDiceArr] = useState(() =>
		getAllDice()
	);

	// not a helper, its setter function
	function selectDice(id) {
		setDiceArr((oldArr) => {
			return oldArr.map((dice) =>
				dice.id === id
					? { ...dice, isHeld: !dice.isHeld }
					: dice
			);
		});
	}

	let diceElements = diceArr.map((dice) => (
		<Die
			key={dice.id}
			value={dice.number}
			isHeld={dice.isHeld}
			selectDice={() => selectDice(dice.id)}
		/>
	));

	function rollDice() {
		setDiceArr(getAllDice());
	}

	return (
		<>
			<article className="tenzies">
				{diceElements}
			</article>
			<button
				onClick={rollDice}
				className="btn-roll btn"
			>
				Roll
			</button>
		</>
	);
}

export default DiceBoard;
