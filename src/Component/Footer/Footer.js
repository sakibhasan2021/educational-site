import React from 'react';
import { FloatingLabel, Form, Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Footer = () => {
    let back=useHistory();
    const handleSubscribe=() => {
        back.push('/welcome');
    }
    return (
        <div className="mt-5 container form-container">
            <>
  <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
    <Form.Control as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" className="mb-4" placeholder="name@example.com" />
     <Button as={Col} onClick={handleSubscribe} variant="success">Subscribe</Button>
  </Form.Group>

           </>
           <h6 className="mt-3 text-center"> <span>&copy;</span> all rights deserve</h6>
        </div>
    );
};

export default Footer;