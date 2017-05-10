import React from "react";
import Header from "./Header";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import Inventory from "./Inventory"
import base from "../base";


class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFish = this.removeFish.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
    //Initial state - Get Initial state
    this.state = {
      fishes: {},
      order: {}

    };
  }

  componentWillMount() {
    //This runs before the app is rendered
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    //Check if there is any order in local storage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

    if (localStorageRef) {
      //update App component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
  }

  addFish(fish) {
    //update our state
    const fishes = {...this.state.fishes};
    //Add in our new fish
    const timeStamp = Date.now();
    fishes[`fish-${timeStamp}`] = fish;
    this.setState({ fishes: fishes });
  }

  updateFish(key, updatedFish) {
    const fishes = {...this.state.fishes};

    fishes[key] = updatedFish;

    this.setState({fishes: fishes})
  }

  removeFish(key) {
    const fishes = {...this.state.fishes};

    fishes[key] = null;

    this.setState({fishes: fishes})
  }

  removeOrder(key) {
    const order = {...this.state.order};

    order[key] = null;

    this.setState({order: order});
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
          <Order fishes={this.state.fishes} order={this.state.order} params={this.props.params} removeOrder={this.removeOrder}/>
          <Inventory removeFish={this.removeFish} addFish={this.addFish} loadSamples={this.loadSamples} fishes={this.state.fishes} updateFish={this.updateFish}/>

      </div>
    )
  }
}


export default App;
