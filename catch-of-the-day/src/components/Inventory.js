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

        const updated = {...fish,
            [e.target.name]: e.target.value
        }

        this.props.updateFish(key, updated);
    }

    renderInventory(key) {
        const fish = this.props.fishes[key];

        return (
            <div className="fishEdit" key={key}>
                <input type="text" onChange={(e) => this.handleChange(e, key)} name="name" value={fish.name} placeholder="fish name"/>
                <input type="text" onChange={(e) => this.handleChange(e, key)} name="prices" value={fish.price} placeholder="fish prices"/>
                <select type="text"onChange={(e) => this.handleChange(e, key)} name="status" value={fish.status} placeholder="fish status">
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea type="text" onChange={(e) => this.handleChange(e, key)} name="desc" value={fish.desc} placeholder="fish desc"></textarea>
                <input type="text" onChange={(e) => this.handleChange(e, key)} name="image" value={fish.image} placeholder="fish image"/>
                <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
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
