import React, { Component } from 'react';
import { Navbar , NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes'
import DishDetails from './DishDetailComponent';
import Menu from './MenuComponent';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes : DISHES,
      selectedDish : null
    }
    this.onDishSelect = this.onDishSelect.bind(this);
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish : dishId
    });
  }
  render() {
    return (
      <div>
        <Navbar dark color = "primary">
          <div className = "container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <Menu dishes={this.state.dishes} onClick={(dishId) => {this.onDishSelect(dishId)}} />
          <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
      </div>
    );
  }
}

export default Main;
