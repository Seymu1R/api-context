import React from 'react'
import { Button, Container, Row ,Col} from 'react-bootstrap';
import { Link} from "react-router-dom";

function Header() {


  return (
    
        <Container>
            <Row>
                <Col md={6}>
                <Link to="/c" ><Button  className='mb-5 mt-5' variant="primary" size="lg">Go to Comments</Button> </Link> 
                </Col>
                <Col md={6}>
                <Link to="/" ><Button  className='mb-5 mt-5' variant="primary" size="lg">Go to Home</Button> </Link> 
                </Col>
             
            </Row>
        </Container>    
      
    
  )
}

export default Header
