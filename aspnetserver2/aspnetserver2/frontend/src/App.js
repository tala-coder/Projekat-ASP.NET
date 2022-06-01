import './App.css';
import { Routes, Route,  BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react';
import Constants from './utilities/Constants'
import Objave from './components/Objave';
import Missing from './components/Missing';
import Layout from './components/Layout';
import Post from './components/Post';
import Lists from './components/Lists';

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

  // const handleCheck = (id) => {
  // const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
  // setItems(listItems); 
  // }


  function onPostUpdated(updatedPost) { 

    if (updatedPost === null) {
      return;
    }

    let postsCopy = [...data];

    const index = postsCopy.findIndex((postsCopyPost, currentIndex) => {
      if (postsCopyPost.postId === updatedPost.postId) {
        return true;
      }
    });

    if (index !== -1) {
      postsCopy[index] = updatedPost;
    }

    setData(postsCopy);

    alert(`Uspješno ste uredili objavu!`);
  }

  // const obrisi = async (id) => {
  //   try {
  //     console.log(id);
  //     setData(data.filter((article) => id !== article.id));

  //     alert('Uspješno ste obrisali objavu!');
  //     // await deleteDoc(doc(db, 'cars', id))

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // function deletePost(postId) {
  //   const url = `${Constants.API_URL_DELETE_POST_BY_ID}/${postId}`;

  //   fetch(url, {
  //     method: 'DELETE'
  //   })
  //     .then(response => response.json())
  //     .then(responseFromServer => {
  //       console.log(responseFromServer);
  //       onPostDeleted(postId);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert(error);
  //     });
  // }

  function onPostDeleted(deletedPostPostId) {
    let postsCopy = [...data];

    const index = postsCopy.findIndex((postsCopyPost, currentIndex) => {
      if (postsCopyPost.postId === deletedPostPostId) {
        return true;
      }
    });

    if (index !== -1) {
      postsCopy.splice(index, 1);
    }

    setData(postsCopy);

    alert('Uspješno ste obrisali objavu!');
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Objave data={data} />} /> 
          <Route path="post" element={<Post createPost={onPostCreated}/>} />
          <Route path="admin" element={< Lists data={data} updatePost={onPostUpdated} onPostDeleted={onPostDeleted} />} /> 
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
