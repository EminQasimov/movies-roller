import React, { Component } from "react";
import Cylinder from "./components/Cylinder";

class App extends Component {
	render() {
		return (
			<>
				<div style={{ width: "100vw", height: "110vh", overflow: "hidden" }}>
					<Cylinder />
				</div>
				<h1> hellow</h1>
			</>
		);
	}
}

export default App;
