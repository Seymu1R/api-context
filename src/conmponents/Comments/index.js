import React from 'react'
import { usePostsContext } from '../../Api-context';
import { Container, Row, Col, Card  } from 'react-bootstrap';

function Comments() {
  const [{ comments }] = usePostsContext();
  return (
    <Container>
    <Row>
    {comments.map(({ id, name, body ,email }) => (
        <Col md={4} key={id} >
           {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{email}</Card.Header>
          <Card.Body>
            <Card.Title>{name}  </Card.Title>
            <Card.Text>
              {body}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
        </Col>
      )
      )}        
    </Row>        
  </Container>
  )
}

export default Comments