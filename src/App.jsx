import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Slider from "./components/Slider/Slider";

function App() {
	return (
		<div className="container">
			<Header />
			<Main />
			<Slider />
		</div>
	);
}

export default App;
