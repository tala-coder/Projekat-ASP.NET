import React, { useState } from 'react'
import Constants from '../utilities/Constants'


const Post = ({ createPost }) => {

  const initialFormData = Object.freeze({
    naslov_oglasa: "",
    naziv_firme: "",
    lokacija: "",
    iskustvo: "",
    opis: "",
    apliciraj_link: "",
    slika_firme: "",
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

    const postToCreate = {
      postId: 0,
      naslov_oglasa: formData.naslov_oglasa,
      naziv_firme: formData.naziv_firme,
      lokacija: formData.lokacija,
      iskustvo: formData.iskustvo,
      opis: formData.opis,
      apliciraj_link: formData.apliciraj_link,
      slika_firme: formData.slika_firme,
    };

    const url = Constants.API_URL_CREATE_POST;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postToCreate)
    })
      .then(response => response.json())
      .then(responseFromServer => {
        console.log(responseFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });

    createPost(postToCreate);
  };

  return (
    <form className="w-100 px-5 m-5">
      <h1 className="mt-5">Objavi oglas za posao</h1>

      <div className="mt-5">
        <label className="h4 form-label">Naziv kompanije</label>
        <input value={formData.naziv_firme} name="naziv_firme" type="text" className="form-control" onChange={handleChange} />
      </div>

      <div className="mt-4">
        <label className="h4 form-label">Pozicija</label>
        <input value={formData.naslov_oglasa} name="naslov_oglasa" type="text" className="form-control" onChange={handleChange} />
      </div>

      <div className="mt-4">
        <label className="h4 form-label">Lokacija</label>
        <input value={formData.lokacija} name="lokacija" type="text" className="form-control" onChange={handleChange} />
      </div>

      <div className="mt-4">
        <label className="h4 form-label">Iskustvo</label>
        <input value={formData.iskustvo} name="iskustvo" type="text" className="form-control" onChange={handleChange} />
      </div>

      <div className="mt-4">
        <label className="h4 form-label">Opis</label>
        <input value={formData.opis} name="opis" type="textarea" className="form-control" onChange={handleChange} />
      </div> 

      <div className="mt-4">
        <label className="h4 form-label">Link profilne</label>
        <input value={formData.slika_firme} name="slika_firme" type="textarea" className="form-control" onChange={handleChange} />
      </div>

      <div className="mt-4">
        <label className="h4 form-label">Link za apliciranje</label>
        <input value={formData.apliciraj_link} name="apliciraj_link" type="textarea" className="form-control" onChange={handleChange} />
      </div>

      <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">Submit</button>
    </form>
  );
}

export default Post
