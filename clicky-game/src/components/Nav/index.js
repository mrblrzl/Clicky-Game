import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar">
      <a href="/">
        Clicky Memory Game
      </a>
      <div >
        <ul className="navbar-nav">
       <li id="rw">{props.rightWrong}</li>

      <li id="score">Current Score: {props.score}</li>

      <li id="top-score">Top Score: {props.topScore}</li>
        </ul>
      </div>
    </nav>
);

export default Nav;
