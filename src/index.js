import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

if (!new class { x }().hasOwnProperty('x')) 
    throw new Error('Transpiler is not configured correctly');

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
