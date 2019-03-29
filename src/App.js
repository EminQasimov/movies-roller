import React, { Component } from "react";
import Cylinder from "./components/Cylinder";

class App extends Component {

	render() {
		return (
			<>
				<div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
					<Cylinder/>
				</div> 
			</>
		);
	}
}

export default App;
