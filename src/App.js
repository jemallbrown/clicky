import React, { Component } from "react";
import AvengerCard from "./components/AvengerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import avengers from "./avengers.json";

class App extends Component {
  // Setting this.state.avengers to the avengers json array


  state = {
    avengers,
    pickedalready: false
  };

  avengerClicked = id => {
    console.log(this.state.avengers[id-1].name)
    console.log(this.state.avengers[id-1].pickedalready)
    if (this.state.avengers[id-1].pickedalready === false) {
      console.log('in the false leg of the if statement')
      console.log(this.state.avengers[id-1].pickedalready);
    //   this.addOne();
      this.setState({ pickedalready: true });
      console.log(this.state.pickedalready);
    } else {
    //   this.clickedtwice();
    console.log('in the true leg of the if statement')
    console.log(this.state.avengers[id-1].name,"has been clicked already");
    }
  };

  // Map over this.state.avengers and render a avengerCard component for each avenger object
  render() {
    return (
      <Wrapper>
        <Title>Welcome to the Avenger Clicky Game</Title>
        {this.state.avengers.map(avenger => (
          <AvengerCard
            avengerClicked={this.avengerClicked}
            id={avenger.id}
            key={avenger.id}
            name={avenger.name}
            image={avenger.image}
            mixthemup={this.mixthemup}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
