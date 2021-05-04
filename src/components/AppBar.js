import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

export default function AppBar() {
  return (
    <Navbar bg='light' variant='light'>
      <Navbar.Brand className='flex-grow-1'></Navbar.Brand>
      <Nav defaultActiveKey='/' className='mr-auto justify-content-end'>
        <LinkContainer exact to='/'>
          <Nav.Link eventKey='/'>Home</Nav.Link>
        </LinkContainer>

        <LinkContainer to='/roots'>
          <Nav.Link eventKey='/roots'>Roots</Nav.Link>
        </LinkContainer>

        <LinkContainer to='/growth'>
          <Nav.Link eventKey='/growth'>Growth</Nav.Link>
        </LinkContainer>

        <LinkContainer to='/mycelium'>
          <Nav.Link eventKey='/mycelium'>Mycelium</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}
