import * as React from "react";
import { hot } from "react-hot-loader/root";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import About from "./about/about";
import Home from "./home/home";
import "./app.scss"

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <HashRouter>
          <div >
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>

            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default hot(App);
