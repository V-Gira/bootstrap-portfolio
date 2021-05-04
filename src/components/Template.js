import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Template(props) {
  return (
    <Container fluid>
      <Row>
        <Col sm={{ order: 1 }}>
          <Image src={props.image} fluid />
        </Col>
        <Col sm className='text'>
          <h4>{props.title}</h4>
          <p>{props.text}</p>
          {props.other}
        </Col>
      </Row>
    </Container>
  );
}
