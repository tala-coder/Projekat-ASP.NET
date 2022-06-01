import './App.css';
import { Routes, Route,  BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react';
import Constants from './utilities/Constants'
import Objave from './components/Objave';
import Missing from './components/Missing';
import Layout from './components/Layout';
import Post from './components/Post';
import Admin from './components/Admin';

// https://localhost:7033

function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);

  function fetchData() {
    const url = Constants.API_URL_GET_ALL_POSTS;

    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(postsFromServer => {
        setData(postsFromServer);
        console.log(postsFromServer);

      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, [])

  function onPostCreated(createdPost) { 
    if (createdPost === null) {
      return;
    }
    alert(` Uspješno ste objavili oglas za posao! `);
    fetchData();
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Objave data={data} />} /> 
          <Route path="post" element={<Post createPost={onPostCreated}/>} />
          <Route path="admin" element={<Admin />} /> 
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
