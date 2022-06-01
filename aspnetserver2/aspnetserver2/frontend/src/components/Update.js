import React, { useState } from 'react'
import Constants from '../utilities/Constants'
import { Container, Row, Col, Button } from 'react-bootstrap';


// convert to Update
const Update = ({ updatePost, onPostDeleted, naslov_oglasa, naziv_firme, lokacija, iskustvo, opis, apliciraj_link, postId, slika_firme }) => {

    const initialFormData = Object.freeze({
        naslov_oglasa: naslov_oglasa,
        naziv_firme: naziv_firme,
        lokacija: lokacija,
        iskustvo: iskustvo,
        opis: opis,
        apliciraj_link: apliciraj_link,
        slika_firme: slika_firme,
    });

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateToCreate = {
            postId: formData.postId,
            naslov_oglasa: formData.naslov_oglasa,
            naziv_firme: formData.naziv_firme,
            lokacija: formData.lokacija,
            iskustvo: formData.iskustvo,
            opis: formData.opis,
            apliciraj_link: formData.apliciraj_link,
            slika_firme: formData.slika_firme,
        };

        const url = Constants.API_URL_UPDATE_POST;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateToCreate)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        updatePost(updateToCreate);
    };

    function deletePost(postId) {
        console.log(postId, 'id je');

        const url = `${Constants.API_URL_DELETE_POST_BY_ID}/${postId}`;
    
        fetch(url, {
          method: 'DELETE'
        })
          .then(response => response.json())
          .then(responseFromServer => {
            console.log(responseFromServer);
          })
          .catch((error) => {
            console.log(error);
            alert(error);
          });
          
          onPostDeleted(postId);
      }

    return (
        <Container>
            <form>
            <Row className="justify-content-md-start border border-dark mt-1"  >
                <Col xs lg="2">
                    <img src={slika_firme} width="50" height="50" alt="slika firme" />
                </Col>
                <Col xs lg="4">
                    <Row>
                        <h5> {naslov_oglasa} </h5>
                    </Row>
                    <Row>
                        <input value={formData.naziv_firme} name="naziv_firme" type="text" className="form-control" onChange={handleChange} />
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
                        <input value={formData.lokacija} name="lokacija" type="text" className="form-control" onChange={handleChange} />
                    </Row>
                </Col>
                <Col xs lg="2">
                    <Row>
                        <p className="font-weight-dark">
                            Iskoustvo </p>
                    </Row>
                    <Row>
                        <input value={formData.iskustvo} name="iskustvo" type="text" className="form-control" onChange={handleChange} />
                    </Row>
                </Col>
                <Col xs lg="2" className="justify-content-end">
                    <Button className="mt-3" variant="outline-success"  onClick={handleSubmit} >Uredi</Button>
                    <Button className='mt-3' variant="outline-danger" onClick={() => { if(window.confirm(`Are you sure you want to delete the post titled "${formData.naslov_oglasa}"?`)) deletePost(postId) }}> Obiriši</Button>

                </Col>
                <Row className="justify-content-md-center">
                    {/* <Row>
                        <p className='font-weight-dark'>
                            Opis </p>
                    </Row> */}
                    <Row>
                        <input value={formData.opis} name="opis" type="textarea" className="form-control" onChange={handleChange} />
                    </Row>
                </Row>
            </Row>
            </form>
        </Container >
    );
}

export default Update
