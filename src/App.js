//React
import { useCallback, useState, useEffect } from "react";

//data
import { wordsList } from "./data/words";

//CSS
import "./App.css";

//components
import { StartScreen } from "./components/StartScreen";
import { GameScreen } from "./components/GameScreen";
import { EndScreen } from "./components/EndScreen";

const stages = [
	{ id: 1, name: "start" },
	{ id: 2, name: "game" },
	{ id: 3, name: "end" },
];

function App() {
	const [stage, setStage] = useState(stages[0].name);
	const [words] = useState(wordsList);

	console.log(words);

	return (
		<div className="App">
			{stage === "start" && <StartScreen />}
			{stage === "game" && <GameScreen />}
			{stage === "end" && <EndScreen />}
		</div>
	);
}

export default App;
