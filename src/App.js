import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassComponent from "./components/ClassComponent";

function App() {
	const [value, setValue] = useState("Text in input");

	return (
		<div className="App">
			<Counter />
		</div>
	);
}

export default App;
