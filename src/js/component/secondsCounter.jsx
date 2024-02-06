import React from "react";

const SecondsCounter = (props) => {
    return (
		<div id="counter" className="container mt-5 mb-5">
            <span className="digitBox"><i className="far fa-clock"></i></span>
            <span className="digitBox"> {props.digit6} </span>
            <span className="digitBox"> {props.digit5} </span>
            <span className="digitBox"> {props.digit4} </span>
            <span className="digitBox"> {props.digit3} </span>
            <span className="digitBox"> {props.digit2} </span>
            <span className="digitBox"> {props.digit1} </span>
        </div>
    );

}

export default SecondsCounter;
