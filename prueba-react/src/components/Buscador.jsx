import React from "react";
import { useState,useEffect } from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

const Buscador = ({ setAnimeTop,setFilterState}) => {  
  const [animeNameAPI,setAnimeNameAPI] = useState('')

  const takeSearchTerm = (e) => {
    e.preventDefault()
    console.log(animeNameAPI)
    if(animeNameAPI == '' || animeNameAPI == undefined){
      throw new Error('Coloca un nombre o algo')
    }
    const animeName = animeNameAPI.toLowerCase();
    setAnimeTop(animeName)
  };
  
  return (
    <>
    <Form onSubmit={takeSearchTerm}>
      <Form.Group className="mb-4">
        <Form.Control 
          type="text"
          name="browser"
          id="browser"
          placeholder="Busca tu anime en el top" 
          onChange={(e) => setAnimeNameAPI(e.target.value)}/>
          <Button variant="primary" type="submit">Buscar</Button>
      </Form.Group>
    </Form>

    <Dropdown>
      <Dropdown.Toggle variant="success">
        Filtro de orden
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setFilterState('Newest')}>Más nuevos</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilterState('Oldest')}>Más antiguos</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilterState('Best')}>Mejor evaluados</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilterState('Worst')}>Peor evaluados</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
};

export default Buscador;