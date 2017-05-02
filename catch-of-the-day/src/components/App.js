import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import SampleFishes from "../sample-fishes";


class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    //Initial state - Get Initial state
    this.state = {
      fishes: {},
      order: {}

    };
  }
  addFish(fish) {
    //update our state
    const fishes = {...this.state.fishes};
    //Add in our new fish
    const timeStamp = Date.now();
    fishes[`fish-${timeStamp}`] = fish;
    this.setState({ fishes: fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Sea Food Market"/>
        </div>
          <Order />
          <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>

      </div>
    )
  }
}


export default App;
