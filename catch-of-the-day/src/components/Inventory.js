import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  renderInventory(key) {
    return(
      <div className="fishEdit" key={key}>
        <input type="text" name="name" placeholder="fish name"/>
        <input type="text" name="prices" placeholder="fish prices"/>
        <select type="text" name="status" placeholder="fish status">
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea type="text" name="desc" placeholder="fish desc"></textarea>
        <input type="text" name="image" placeholder="fish image"/>

        });

        });

      </div>
    )
  }
  render() {
    return(
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}> Load Sample Fishes </button>
      </div>
    )
  }
}

export default Inventory;
