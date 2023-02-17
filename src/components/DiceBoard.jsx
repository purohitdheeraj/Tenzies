import React, { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import {
	getAllDice,
	getRandomDiceNumber,
} from "./diceHelpers";

function DiceBoard() {
	const [diceArr, setDiceArr] = useState(() =>
		getAllDice()
	);

	let diceElements = diceArr.map((dice) => (
		<Die key={nanoid()} value={dice} />
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
