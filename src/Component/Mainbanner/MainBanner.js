import React, {useState} from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import './MainBanner.css';
import imageOne from '../../top.jpg';
const MainBanner = () => {


    return (
    
        <div className="mt-5 banner-container">
       <Container >
  <Row>
    <Col sm={7} className="mt-5 top-image" >
        
        <Image className="px-2" src={imageOne} fluid />
    </Col>
    <Col className="mx-auto my-2 mt-5 " sm={5}>
        <h1 className="mx-3">Latest Update <span id="CourseSub-text">Course</span> </h1>
        <h4 className="mx-3 sub-text " >Explore your Passion</h4>
       <Button as={Col} variant="success" className="mx-3 mt-5 Button">See More</Button>
    </Col>
  </Row>
  
</Container>        
    
        </div>
    );
};

export default MainBanner;