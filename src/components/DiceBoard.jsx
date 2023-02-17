import React from "react";
import Die from "./Die";

function DiceBoard() {
	return (
		<>
			<article className="tenzies">
				<Die value={1} />
				<Die value={2} />
				<Die value={3} />
				<Die value={4} />
				<Die value={5} />
				<Die value={6} />
				<Die value={1} />
				<Die value={2} />
				<Die value={3} />
				<Die value={4} />
			</article>
			<button className="btn-roll btn">Roll</button>
		</>
	);
}

export default DiceBoard;
