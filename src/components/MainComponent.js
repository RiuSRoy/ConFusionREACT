import React, { Component } from 'react';

import { DISHES } from '../shared/dishes'
import DishDetails from './DishDetailComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponnt';
import Footer from './FooterComponent';


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
        <Header />
        <div className="container">
          <Menu dishes={this.state.dishes} onClick={(dishId) => {this.onDishSelect(dishId)}} />
          <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
