import React from "react";
import Header from "./Header";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import Inventory from "./Inventory"


class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
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

  addToOrder(key) {
    const orders = {...this.state.order};
    //Update or add the new number of fish ordered
    orders[key] = orders[key] + 1 || 1;

    this.setState({
      order: orders
    });

  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Sea Food Market"/>
          <ul className="list-of-fishes">
            {
              Object.keys(this.state.fishes)
              .map(key => <Fish addToOrder={this.addToOrder} key={key} index={key} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
          <Order />
          <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>

      </div>
    )
  }
}


export default App;
