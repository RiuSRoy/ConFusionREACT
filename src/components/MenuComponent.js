import React , { Component } from 'react';
import { Card , CardImg, CardBody,CardImgOverlay,CardText,CardTitle  } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish : null
        }
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish : dish
        });
    }

    renderDish(dish) {
        if(dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src = {dish.image} alt = {dish.name} />
                    <CardBody body className = "ml-5">
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div className = "col-12 mt-1 mb-1 col-md-6 mt-1 mb-1 ">
                    <Card key = {dish.id} onClick = {() => {
                        this.onDishSelect(dish);
                    }}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="col-12">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;