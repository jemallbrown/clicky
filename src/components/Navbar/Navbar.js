// creating my initial nav bar content (mostly taken from class example and chatting with other classmates)
import React, { Component } from "react";

// placeholder for nav css
// import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
        <div className="row">
        <nav className="nav">
        <ul className="nav-fill">
            <li className="navbar-brand">
                    <a href='/'>Avengers Clicky Game</a>
            </li>
            <li className="nav-item">How good is your memory?</li>
            <li className="nav-item"></li>
            <li className="nav-item">Current Score: {this.props.score}</li>
            <li className="nav-item">Wins: {this.props.gamesWon}</li>
            <li className="nav-item">Losses: {this.props.gamesLost}</li>
            <button className="btn-danger btn-large"></button>
        </ul>
        </nav>
        </div>
        );
    }
}

export default Navbar
