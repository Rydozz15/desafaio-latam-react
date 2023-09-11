import { useEffect,useState } from 'react';
import axios from 'axios';

function MiApi({setAnimeFiltered,animeTop}) {

useEffect(() => {
    fetchAnimeTop();
}, [animeTop]);

const fetchAnimeTop= async () => {
  let apiUrl = ''
  if(animeTop == [] || animeTop == undefined || animeTop == ''){
    apiUrl += `https://api.jikan.moe/v4/top/anime`;
  }else{
    apiUrl += `https://api.jikan.moe/v4/anime?q=${animeTop}&sfw`;
  }
axios
    .get(apiUrl)
    .then((response) => {
    setAnimeFiltered(response.data.data);
    })
    .catch((err) => {
    console.log("Error al obtener datos de la API:", err);
    });
};
}

export default MiApi