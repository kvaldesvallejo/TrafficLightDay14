import React, { useState } from "react";

export const TrafficLight = () => {
	const [light, setLight] = useState(null);
	console.log(light);
	return (
		<div>
			<div id="trafficTop" />
			<div id="container">
				<div className="red light" onClick={() => setLight("red")} />
				<div
					className="yelow light"
					onClick={() => setLight("yelow")}
				/>
				<div
					className="green light"
					onClick={() => setLight("green")}
				/>
			</div>
		</div>
	);
};
