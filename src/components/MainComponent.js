import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import DishDetails from './DishDetailComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch , Route , Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import About from './AboutComponent';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes : DISHES,
      promotions : PROMOTIONS,
      leaders : LEADERS,
      comments : COMMENTS
    }
  }

  render() {

    const HomePage = () => {
      return (
        <Home dish = {this.state.dishes.filter((dish) => dish.featured)[0] }
              promotion = {this.state.promotions.filter((promo) => promo.featured)[0] }
              leader = {this.state.leaders.filter((leader) => leader.featured)[0] } />
      );
    }

    const MenuPage = () => {
      return (
        <Menu dishes={this.state.dishes} />
      )
    }

    const AboutPage = () => {
      return (
        <About leaders={this.state.leaders} />
      )
    }

    const DishWithId = ({match}) => {
      return (
        <DishDetails dish = {this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId , 10))[0] } 
          comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId , 10)) } />
      )
    }
    return (
      <div>
        <Header />
        <div className="container">
        <Switch>
          <Route path = "/home" component = {HomePage} />
          <Route exact path = "/menu" component = {MenuPage} />
          <Route path = "/menu/:dishId" component = {DishWithId} />
          <Route exact path = "/contactus" component = {Contact} />
          <Route exact path = "/aboutus" component = {AboutPage} />
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
