import React, { Component } from 'react';

//imports personales 
// import Dish from "./components/dish";
import Dishes from "./components/dishes";
import data from "./assets/data/dishes.json";

// estilos 
import './styles/App.css';
import NewDish from './components/newDish';


class App extends Component {

  state = {
    dish: "tacos",
    dishes: data
  }

  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/platillos")
  }

  updateDish = (i, updatedDish) =>{
    let newState = {...this.state};
    newState.dishes.dishes[i].name  = updatedDish;

    this.setState(newState);
  }
  addDish = (dishName) => {
    let newState = {...this.state};
    
    const newDish = {
      id: newState.dishes.dishes.length,
      name: dishName,
      country: "mexico",
      ingredients: ["arroz", "pollo"]
    }

    newState.dishes.dishes.push(newDish);

    this.setState(newState);
  }

  render() {

    return (
      <div className="App">
        {/* <Dish name={dish} qty="3"/>*/}
        <NewDish onAddDish={this.addDish} />
        <Dishes data={this.state.dishes} onUpdateDish={this.updateDish} />
      </div>
    );
  }
}

export default App;
