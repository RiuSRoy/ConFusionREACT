import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import DishDetails from './DishDetailComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch , Route , Redirect } from 'react-router-dom';
import Home from './HomeComponent';


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

    const HomePage = () => {
      return (
        <Home />
      );
    }

    const MenuPage = () => {
      return (
        <Menu dishes={this.state.dishes} onClick={(dishId) => {this.onDishSelect(dishId)}} />
      )
    }
    return (
      <div>
        <Header />
        <div className="container">
        <Switch>
          <Route path = "/home" component = {HomePage} />
          <Route exact path = "/menu" component = {MenuPage} />
          <Redirect to = "/home"/>
        </Switch>
        </div>
        {/* <div className="container">
          
          <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
