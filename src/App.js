import React, { Component } from "react";
import AvengerCard from "./components/AvengerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import avengers from "./avengers.json";
import Navbar from "./components/Navbar";

// function mixthemup(array) {
//   for (let i = array.length -1 ; i < array.length; i++) {
//       let a = Math.floor(Math.random() * (i+1));
//         [array[i], array[a]] = [array[a], array[i]];    
//   }
//   return array
// }


class App extends Component {
  // Setting this.state.avengers to the avengers json array

  state = {
    avengers,
    clickedavenger: [],
    score: 0
  };

  avengerClicked = event => {
    const currentavenger = event.target.alt
    console.log('this is the current avenger -',currentavenger)

    const alreadyclicked = (this.state.clickedavenger.indexOf(currentavenger) > -1);
    console.log('already clicked is currently ',alreadyclicked)
    console.log('this is the array before setState change',this.state.clickedavenger)

    console.log(this.state.clickedavenger.indexOf(currentavenger))
      
      if (alreadyclicked) {
        console.log("that avenger already clicked on")
        this.setState({
          clickedavenger: []
        });
      } else {
        this.setState(
          {
            clickedavenger: this.state.clickedavenger.push(
              currentavenger
            )
          }
        )
      }

    console.log('this is array after setState change',this.state.clickedavenger)
    // console.log(this.state.avengers[id-1].pickedalready)
    // if (this.state.avengers[id-1].pickedalready === false) {
    //   console.log('in the false leg of the if statement')
    //   console.log('originaly pickedalready is ',this.state.avengers[id-1].pickedalready);
    // } else {
    // //   this.clickedtwice();
    // console.log('in the true leg of the if statement')
    // console.log(this.state.avengers[id-1].name,"has been clicked already");
    // }
  };



  // Map over this.state.avengers and render a avengerCard component for each avenger object
  render() {
    return (
      <div>
      <Navbar
        score={this.state.score}
        />
      
        <Title>Welcome to the Avenger Clicky Game</Title>
      <Wrapper>
        {this.state.avengers.map(avenger => (
          <AvengerCard
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
