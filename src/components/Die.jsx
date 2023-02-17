import React from "react";

function Die(props) {
	// lifting this state to DiceBoard <--- Parent Component
	// const [isHeld, setIsHeld] = React.useState(false);

	const styles = {
		background: props.isHeld ? `#59E391` : ``,
	};

	return (
		<div
			onClick={props.selectDice}
			className="die"
			style={styles}
		>
			{props.value}
		</div>
	);
}

export default Die;
