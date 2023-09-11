import React from "react";
import { useState} from "react";
import { Form, Button, Dropdown, Container, Row } from "react-bootstrap";

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
    <Container className="d-flex justify-content-center m-3">
      <Row>
        <Form className='col-7' onSubmit={takeSearchTerm}>
          <Form.Group className="mb-4 d-flex justify-content-around">
            <Form.Control 
              className="px-5 mx-3"
              type="text"
              name="browser"
              id="browser"
              placeholder="Busca tu anime en el top" 
              onChange={(e) => setAnimeNameAPI(e.target.value)}/>
              <Button variant="primary" type="submit">Buscar</Button>
          </Form.Group>
        </Form>

        <Dropdown className='col-4'>
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
      </Row>
    </Container>
    </>
  );
};

export default Buscador;