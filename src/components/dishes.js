import React, { Component } from "react";
import {GridList} from "@material-ui/core"
import Dish from "./dish";

class Dishes extends Component {
    goBack = e => {
        e.preventDefault();
        this.props.history.push("/")
    }

    updateDish = (i, updatedName) =>{
        this.props.onUpdateDish(i, updatedName)
    }

    render() {
        return (
            <div>
                <GridList>
                    {this.props.data.dishes.map((dish, i) => (
                        <Dish key={i} name={dish.name} ingredients={dish.ingredients} index={i} onUpdateDish={this.updateDish}/>
                    ))}
                </GridList>
            </div>
        )
    }
}

export default Dishes;