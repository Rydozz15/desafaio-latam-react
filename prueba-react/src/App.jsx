import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MiApi from './components/MiApi'
import Buscador from './components/Buscador';
import { Container,Row } from 'react-bootstrap';

function App() {
const [animeTop, setAnimeTop] = useState([]);
const[animeFiltered,setAnimeFiltered] = useState(animeTop)
const [filterState,setFilterState] = useState('')

useEffect(() => {
  animeFilter(filterState);
},[filterState,animeTop]);

const animeFilter = (filterState) => {
  console.log(filterState)
  console.log(animeFiltered)
  if(filterState == 'Newest'){
    animeFiltered.sort((a,b)=>{
      return new Date(a.aired.from) - new Date(b.aired.from)
        })
  }
  switch (filterState) {
    case 'Newest':
      animeFiltered.sort((a,b)=>{
      return new Date(a.aired.from) - new Date(b.aired.from)
        }) 
      break;
    case 'Oldest':
      animeFiltered.sort((a,b)=>{
      return new Date(b.aired.from) - new Date(a.aired.from)
        })
      break;
    case 'Best':
      animeFiltered.sort((a,b)=>{
      return a.score - b.score
        })
      break;
    case 'Worst':
      animeFiltered.sort((a,b)=>{
      return b.score - a.score
        })
      break;
    default:
      return ''
  }
};

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <Buscador setAnimeTop={setAnimeTop} setFilterState={setFilterState} ></Buscador>
      <MiApi setAnimeFiltered={setAnimeFiltered} animeTop={animeTop}></MiApi>
      <Container>
        <Row>
          {animeFiltered == []
          ? '' 
          : 
          animeFiltered.map(elementoAnime =>
            <Card key={elementoAnime.title} className='col-2 m-3'>
            <Card.Img variant="top" src={elementoAnime.images.webp['image_url']} />
            <Card.Body>
                <Card.Title>{elementoAnime.title}</Card.Title>
                <Card.Text>
                    {elementoAnime.synopsis.substring(0,240)+"..."}
                </Card.Text>
                <Button variant='success' href={elementoAnime.url} target="_blank">More info.</Button>
            </Card.Body>
          </Card>
          )
        }
        </Row>
      </Container>
    </div>
    
  )
}

export default App