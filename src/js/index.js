//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let digit1 = 0;
let digit2 = 0;
let digit3 = 0;
let digit4 = 0;
let digit5 = 0;
let digit6 = 0;

setInterval(function () {
    digit1++;
    if (digit1 === 9) {
        digit1 = 0;
        digit2++;
    } 
    if (digit2 === 9) {
        digit3++;
        digit2 = 0;
    }
    if (digit3 === 9) {
        digit4++;
        digit3 = 0;
    }
    if (digit4 === 9) {
        digit5++;
        digit4 = 0;
    }
    if (digit5 === 9) {
        digit6++;
        digit3 = 0;
    } 
    if (digit6 === 9) {
        digit1++;
        digit6 = 0;
    } 

    ReactDOM.render(<Home  digit1={digit1} digit2={digit2} digit3={digit3} digit4={digit4} digit5={digit5} digit6={digit6}/>, document.querySelector("#app"));
}, 1000);

//render your react application

