import React , { Component } from 'react';
import { Card , CardImg, CardBody,CardImgOverlay,CardText,CardTitle  } from 'reactstrap';

class Menu extends Component {
    
    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div className = "col-12 mt-1 mb-1 col-md-6 mt-1 mb-1 ">
                    <Card key = {dish.id} onClick = {() => {
                            this.props.onClick(dish.id);
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
            
                <div className="row">
                    {menu}
                </div> 
        );
    }
}

export default Menu;