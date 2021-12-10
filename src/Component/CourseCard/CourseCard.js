import React,{useEffect, useState} from 'react';
import { Card, CardGroup ,Col,Container,Grid, Row} from 'react-bootstrap';
import Data from '../../data';
import SingleProduct from '../SingleProduct/SingleProduct';
import './CourseCard.css';
const CourseCard = () => {
   
    
    const [product,setProduct]=useState(Data);
    
    // console.log(product)
    useEffect(()=>{
            fetch(Data)
            .then(res=>res.json())
            .then(data=>setProduct(data))
    },[]);
    return (
        <div>
          
           <Container className="courses-container">
         
    <Row xs={1} md={3} className="g-4">
            
                       
                        {product.map((product)=>{
                  return(
                      <SingleProduct key={product.id} product={product}/>
                  )
              })}
           
    
    
  </Row>

              
  
</Container>


            
              
                     
        </div>
    );
};

export default CourseCard;