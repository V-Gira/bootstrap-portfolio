import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

export default function AppBar(props) {
  return (
    <Navbar bg='light' variant='light'>
      <Navbar.Brand className='flex-grow-1'></Navbar.Brand>
      <Nav defaultActiveKey='/' className='mr-auto justify-content-end'>
        <LinkContainer exact to='/'>
          <Nav.Link eventKey='/'>Home</Nav.Link>
        </LinkContainer>

        <LinkContainer to='/features'>
          <Nav.Link eventKey='/features'>Features</Nav.Link>
        </LinkContainer>

        <LinkContainer to='/pricing'>
          <Nav.Link eventKey='/pricing'>Pricing</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}
