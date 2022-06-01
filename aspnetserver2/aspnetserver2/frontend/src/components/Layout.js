import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-3 mb-3"   >
        <Col xs lg md="1" className='m-3'> <Link to="/"><Button> Poslovi </Button></Link> </Col>
        <Col xs lg md="1" className='m-3'> <Link to="/post"><Button> Objavi </Button></Link> </Col>
        <Col xs lg md="1" className='m-3'> <Link to="/admin"><Button> Admin </Button></Link>  </Col>
      </Row>
      <Outlet />
    </Container >

  )
}

export default Layout
