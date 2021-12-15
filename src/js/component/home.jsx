import React, { useState } from "react";

//create your first component
const Home = () => {
	const [seleccionColor, setSeleccionColor] = useState("red");
	return (
		<div className="traffic-light">
			<div
				onClick={() => setSeleccionColor("red")}
				className={
					"light red" + (seleccionColor === "red" ? " glow" : " ")
				}></div>
			<div
				onClick={() => setSeleccionColor("orange")}
				className={
					"light orange" +
					(seleccionColor === "orange" ? " glow" : " ")
				}></div>
			<div
				onClick={() => setSeleccionColor("green")}
				className={
					"light green" + (seleccionColor === "green" ? " glow" : " ")
				}></div>
		</div>
	);
};

export default Home;
