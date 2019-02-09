import React, { Component } from "react";
import AvengerCard from "./components/AvengerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import avengers from "./avengers.json";
import Navbar from "./components/Navbar/Navbar";



class App extends Component {

// ================================================================
// Setting this.state.avengers to the avengers json array
// ================================================================
  state = {
    avengers,
    clickedavenger: [],
    score: 0,
    gamesWon: 0,
    gamesLost: 0
  };

// ================================================================
// Here is most of the game play.  Thanks to my classmate Dan who
// helped me figure out why my "indexOf" function wasn't working!!
// ================================================================
  avengerClicked = event => {
    const currentavenger = event.target.alt
    console.log('this is the avenger just clicked-',currentavenger)

    const alreadyclicked = (this.state.clickedavenger.indexOf(currentavenger) > -1);
      
    if (alreadyclicked) {
      this.setState({
        avengers: this.state.avengers.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedavenger: [],
        score: 0,
        gamesLost: this.state.gamesLost + 1
      });
        alert("You lose. You already clicked on that Avenger. Would you like to play again?");

    } else {
      this.setState(
        {
          avengers: this.state.avengers.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedavenger: this.state.clickedavenger.concat(
            currentavenger
          ),
          score: this.state.score + 1
        },
        //if you get all 12 fish corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Winner Winner - Chicken Dinner!");
            this.setState({
              avengers: this.state.avengers.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedavenger: [],
              score: 0,
              gamesWon: this.state.gamesWon + 1
            });
          }
          //==========================================================================
          // Note to self:
          // You can uncomment the following console.log to check game function
          // console.log('score is now - ',this.state.score)
          // console.log('this is array after setState change',this.state.clickedavenger)
          //==========================================================================
        }
      );
    }
  };


// =======================================================================================
// this is the page rendering
//
// =======================================================================================

  render() {
    return (
      <div className="container">
      <Navbar
        score={this.state.score}
        gamesLost={this.state.gamesLost}
        gamesWon={this.state.gamesWon}
        />
      <Title>Welcome to the Avenger Clicky Game
      <p className="titlep">Click each image only once.  If you can click each one only once you win the game!!</p>
      </Title>
      <Wrapper className="container">
        {this.state.avengers.map(avenger => (
          <AvengerCard className="col-md-3"
            avengerClicked={this.avengerClicked}
            id={avenger.id}
            key={avenger.id}
            image={avenger.image}
            name={avenger.name}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
// =======================================================================================
// code for checking array
// =======================================================================================

