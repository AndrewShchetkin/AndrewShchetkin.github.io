import * as React from "react";
import * as ReactDOM from "react-dom";
// import GameModel from "./ticTakToe/gameModel";


import App from "./App";

if (!new class { x }().hasOwnProperty('x')) 
    throw new Error('Transpiler is not configured correctly');

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);

// const game = new GameModel();

// game.userStep(0);

// game.userStep(4);

