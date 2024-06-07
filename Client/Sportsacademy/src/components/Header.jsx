import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function header() {
  return (

    <>
    <Navbar className="bg-secondary">
    <Container>
      <Link to={'/'} style={{textDecoration:'none'}}>
      <Navbar.Brand href="#home">
      <i className="fa-solid fa-medal" style={{color: "#000000",}} />{' '}
WINGS ACADEMY      </Navbar.Brand>
      </Link>

<Link className='btn btn-success' to={'/students'}>
Students<i className="fa-solid fa-user m-2" style={{color: "#000000",}} />
</Link>
    </Container>
  </Navbar> 
  </>
   )
}

export default header