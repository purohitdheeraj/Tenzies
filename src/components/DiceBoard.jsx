import React, { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import Die from "./Die";
import {
	getAllDice,
	getRandomDiceObj,
} from "./diceHelpers";
// import ReactAudioPlayer from "react-audio-player";
// import cheers from "../assets/cheers.mp3";

function DiceBoard() {
	const [diceArr, setDiceArr] = useState(() =>
		getAllDice()
	);

	const [tenzies, setTenzies] = useState(false);

	useEffect(() => {
		// win conditions
		// - all values are same
		// - all are held true
		let firstValue = diceArr[0].number;
		const allValues = diceArr.every(
			(dice) => dice.number === firstValue
		);
		const allHeldTrue = diceArr.every(
			(dice) => dice.isHeld
		);

		if (allValues && allHeldTrue) {
			setTenzies(true);
		}
	}, [diceArr]);

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

	function rollDice() {
		if (tenzies) {
			setDiceArr(getAllDice());
			setTenzies(false);
		}

		setDiceArr((oldArr) => {
			return oldArr.map((dice) =>
				dice.isHeld ? dice : getRandomDiceObj()
			);
		});
	}

	let diceElements = diceArr.map((dice) => (
		<Die
			key={dice.id}
			value={dice.number}
			isHeld={dice.isHeld}
			selectDice={() => selectDice(dice.id)}
			// scope makes id accessible
			// we are passing id directly without passing id props
			// to Die custom component
		/>
	));

	return (
		<>
			<article className="tenzies">
				{diceElements}
			</article>
			<button
				onClick={rollDice}
				className="btn-roll btn"
			>
				{tenzies ? "New Game" : "Roll"}
			</button>
			{tenzies && (
				<>
					<Confetti />
					{/* <ReactAudioPlayer
						src="/assets/cheers.mp3"
						autoPlay
					/> */}
				</>
			)}
		</>
	);
}

export default DiceBoard;
