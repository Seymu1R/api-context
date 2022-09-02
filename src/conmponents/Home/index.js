import React from 'react'
import { usePostsContext } from '../../Api-context';
import { Container, Row, Col, Card  } from 'react-bootstrap';


function Home() {
  const [{ posts }] = usePostsContext();

  return (
    <Container>
      <Row>
      {posts.map(({ id, title, body }) => (
          <Col md={4} key={id} >
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{title}</Card.Title>                
                <Card.Text>
                  {body}
                </Card.Text>                
              </Card.Body>
            </Card>
          </Col>
        )
        )}        
      </Row>        
    </Container>
  )
}

export default Home