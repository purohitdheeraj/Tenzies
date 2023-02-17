import React from "react";

function Die({ value }) {
	const [isHeld, setIsHeld] = React.useState(false);

	const styles = {
		background: isHeld ? `#59E391` : ``,
	};

	return (
		<div
			onClick={() => setIsHeld((prev) => !prev)}
			className="die"
			style={styles}
		>
			{value}
		</div>
	);
}

export default Die;
