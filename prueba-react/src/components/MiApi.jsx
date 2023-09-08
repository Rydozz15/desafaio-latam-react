import React, { useEffect } from 'react';
import axios from 'axios';

function MiApi({setAnimeRandom,setAnimeTop}) {

//1. Guardar los datos
// GET with fetch API
useEffect(() => {
    fetchAnimeRandom();
    fetchAnimeTop();
}, []);

const fetchAnimeRandom = async () => {
    const apiUrl = 'https://api.jikan.moe/v4/random/anime';
    axios
      .get(apiUrl)
      .then((response) => {
        setAnimeRandom(response.data.data);
      })
      .catch((err) => {
        console.log("Error al obtener datos de la API:", err);
      });
  };

const fetchAnimeTop= async () => {
const apiUrl = 'https://api.jikan.moe/v4/top/anime';
axios
    .get(apiUrl)
    .then((response) => {
    setAnimeTop(response.data.data);
    })
    .catch((err) => {
    console.log("Error al obtener datos de la API:", err);
    });
};
return (
    <>
    </>
)
}

export default MiApi