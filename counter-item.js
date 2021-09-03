import React, {Component} from "react";

import "./counter-item.css";

export default class CounterItem extends Component {

     i = 0;

    state = {
     item: this.i
    }
    
increaseItem = () => {
    this.setState(
      {item: this.i++}
    );
}
decreaseItem = () => {
    this.setState(
      {item: this.i--}
    );
}
render() {
    return (
        <form className="counter-item-form d-flex">
            
            <button type="button" className="btn btn-outline-secondary"
            onClick={this.decreaseItem}>
            decrease Item
            </button>

            <span className="counter-item-form-span">
            {this.i}
            </span>   
            <button type="button" className="btn  btn-outline-secondary"
            onClick={this.increaseItem}>
            increase Item
            </button>
            
        </form>
    )
}


};