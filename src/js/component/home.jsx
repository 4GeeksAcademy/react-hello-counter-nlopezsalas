import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./secondsCounter";

//create your first component
const Home = (props) => {
	return (
		<>
			<SecondsCounter digit1 = {props.digit1} digit2 = {props.digit2} digit3 = {props.digit3} digit4 = {props.digit4} digit5 = {props.digit5} digit6 = {props.digit6} />
		</>
	);
};

export default Home;
