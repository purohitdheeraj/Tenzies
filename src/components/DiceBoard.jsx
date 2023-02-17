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

	let diceElements = diceArr.map((dice) => (
		<Die
			key={dice.id}
			value={dice.number}
			isHeld={dice.isHeld}
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
