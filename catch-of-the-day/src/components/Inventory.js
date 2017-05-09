import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, key) {
        const fish = this.props.fishes[key];
    }

    renderInventory(key) {
        const fish = this.props.fishes[key];

        return (
            <div className="fishEdit" key={key}>
                <input type="text" onChange={(e) => this.handleChange(e, key)} name="name" value={fish.name} placeholder="fish name"/>
                <input type="text" name="prices" value={fish.price} placeholder="fish prices"/>
                <select type="text" name="status" value={fish.status} placeholder="fish status">
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea type="text" name="desc" value={fish.desc} placeholder="fish desc"></textarea>
                <input type="text" name="image" value={fish.image} placeholder="fish image"/>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(this.renderInventory)}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSamples}>Load Sample Fishes </button>
            </div>
            )
        }
    }

    export default Inventory;
