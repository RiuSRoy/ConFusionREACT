import React , { Component } from 'react';
import { Card , CardImg, CardBody,CardImgOverlay,CardText,CardTitle  } from 'reactstrap';
class DishDetails extends Component {
    

    renderDish(dish) {
        return (
                    <Card>
                        <CardImg width="100%" src = {dish.image} alt = {dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
        )
    }

    renderComments(comments) {
        if(comments.length == 0) {
            return ;
        }

        const comment_list = comments.map((com) => {
            return(           
                <li key={com.id}>     
                    <li>{com.comment}</li>
                    <li>--{com.author} , {new Intl.DateTimeFormat('en-US' ,{ year : 'numeric' , month : 'short' ,day: '2-digit'}).format(new Date(Date.parse(com.date)))}</li>
                </li>
            )
        })
        return(
                <div className="container">
                    <h4>Comments</h4>  
                        { comment_list }  
                </div>     
        )
    }

    render() {

        if(this.props.dish != null) {
            return (
                <div className="row">
                    <div className="col-12 mt-1 mb-1 col-md-6 mt-1 mb-1 ">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 mt-1 mb-1 col-md-6 mt-1 mb-1 ">
                    <ul className="list-unstyled">                        
                        {this.renderComments(this.props.dish.comments)}
                    </ul> 
                    </div>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
        
        
    }
}

export default DishDetails;