import "./App.css";
import DiceBoard from "./components/DiceBoard";

function App() {
	return (
		<main className="game-board">
			<h2 className="game-title">Tenzies</h2>
			<p className="game-info">
				Roll until all dice are the same. Click each
				die to freeze it at its current value
				between rolls.
			</p>
			<DiceBoard/>
		</main>
	);
}

export default App;
