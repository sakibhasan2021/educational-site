import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleProduct.css';


const SingleProduct = (props) => {
  
   const {id,courseTitle,img, courseDetails,discount}=props.product;
    return (
        <Col className="mt-5  ">
            
            <Card className="single-course-container">
            
    <Card.Img variant="top" src={img} />
    
    <Card.Body>
      <Card.Title>  <h3> {courseTitle} </h3></Card.Title>
      <Card.Text>
        {courseDetails}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{discount}% Offer Avaiable</small>
    </Card.Footer>
    <Link to={`/coursedetails/${id}`}>  <Button variant="info" className="my-3 mx-5"> See Details</Button></Link>
   
  </Card>
        </Col>
    );
};

export default SingleProduct;