// creating my initial nav bar content (mostly taken from class example and chatting with other classmates)
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
    <nav className="navbar">
            <div className="navbar-header">
            <a className="navbar-brand" href='#'><h3>Avengers Clicky Game</h3></a>
            </div>
        <ul className="nav navbar-nav">
            <li className="nav-item score">Current Score: {this.props.score}</li>
            <li className="nav-item wins">Wins: {this.props.gamesWon}</li>
            <li className="nav-item losses">Losses: {this.props.gamesLost}</li>
        </ul>
    </nav>
);
}
}

export default Navbar


