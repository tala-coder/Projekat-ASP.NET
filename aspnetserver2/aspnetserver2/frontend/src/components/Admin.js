import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Admin = ({ naslov_oglasa, naziv_firme, lokacija, iskustvo, opis, apliciraj_link, postId, slika_firme }) => {
    const [view, setView] = useState(true)
    const redirect = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <Container>
            <Row className="justify-content-md-start border border-dark mt-1"  >
                <Col xs lg="2">
                    <img src={slika_firme} width="50" height="50" alt="slika firme" />
                </Col>
                <Col xs lg="4">
                    <Row>
                        <h5> {naslov_oglasa} </h5>
                    </Row>
                    <Row>
                        <p > {naziv_firme} </p>
                    </Row>
                </Col>
                <Col xs lg="2">
                    <Row>

                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <span className='font-weight-dark'>Lokacija </span>  </p>
                    </Row>
                    <Row>
                        <h6> {lokacija} </h6>
                    </Row>
                </Col>
                <Col xs lg="2">
                    <Row>
                        <p className="font-weight-dark">
                            Iskoustvo </p>
                    </Row>
                    <Row>
                        <h6> {iskustvo} </h6>
                    </Row>
                </Col>
                <Col xs lg="2" className="justify-content-end">
                    <Button className="mt-3" variant="outline-success"/*  onClick={ } */ >Uredi</Button> 
                    <Button className="mt-3" variant="outline-danger"/*  onClick={ } */ >Obriši</Button>
                </Col>
                <Row className="justify-content-md-center">
                    {/* <Row>
                        <p className='font-weight-dark'>
                            Opis </p>
                    </Row> */}
                    <Row>
                        <p>
                            {/* ${info.substring(0,220)}... */}
                            {view ? opis.substring(0, 219) + ' ...' : opis}
                            <Button variant="link" onClick={() => setView(!view)}>{view ? 'read more' : 'show less'}</Button>
                        </p>
                    </Row>
                </Row>
            </Row>
        </Container >
    )
}

export default Admin
