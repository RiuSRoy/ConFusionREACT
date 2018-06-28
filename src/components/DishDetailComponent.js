import React  from 'react';
import { Card , CardImg, CardBody,CardText,CardTitle  } from 'reactstrap';

    function RenderDish( {dish} ) {
        return (
                <Card>
                    <CardImg width="100%" src = {dish.image} alt = {dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
        );
    }

    function RenderComments( { comments } ) {
        if(comments.length === 0) {
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
        );
    }

    const DishDetails = (props) => {

        if(props.dish != null) {
            return (
                <div className="row">
                    <div className="col-12 mt-1 mb-1 col-md-6 mt-1 mb-1 ">
                        <RenderDish dish = {props.dish} />
                    </div>
                    <div className="col-12 mt-1 mb-1 col-md-6 mt-1 mb-1 ">
                        <ul className="list-unstyled">    
                            <RenderComments comments = {props.dish.comments}  />
                        </ul> 
                    </div>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

export default DishDetails;