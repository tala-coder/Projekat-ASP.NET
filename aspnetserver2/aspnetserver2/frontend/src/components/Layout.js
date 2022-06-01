import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <Row className="justify-content-end mt-3 mb-3"   >
        <div>
        <Link to="/"><Button className='m-3'> Oglasi </Button></Link>
        <Link to="/post"><Button className='m-3'> Objavi </Button></Link>
        <Link to="/admin"><Button className='m-3'> Uredi/Obriši </Button></Link>

        </div>
        {/* <Col xs lg md="3" className='m-3'> <Link to="/"><Button> Poslovi </Button></Link> </Col>
        <Col xs lg md="3" className='m-3'> <Link to="/post"><Button> Objavi </Button></Link> </Col>
        <Col xs lg md="3" className='m-3'> <Link to="/admin"><Button> Admin </Button></Link>  </Col> */}
      </Row>
      <Outlet />
    </Container >

  )
}

export default Layout
