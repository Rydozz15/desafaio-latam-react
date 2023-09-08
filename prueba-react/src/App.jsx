import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MiApi from './components/MiApi'

function App() {
const [animeRandom, setAnimeRandom] = useState(0);
const [animeTop, setAnimeTop] = useState(0);
console.log(animeTop)
  return (
    <div>
      <MiApi setAnimeRandom={setAnimeRandom} setAnimeTop={setAnimeTop}></MiApi>
      {animeRandom == 0
      ? '' 
      : 
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={animeRandom.images.webp['image_url']} />
        <Card.Body>
            <Card.Title>{animeRandom.title}</Card.Title>
            <Card.Text>
                {animeRandom.synopsis}
            </Card.Text>
        </Card.Body>
      </Card>
    }
    {animeTop == 0
      ? '' 
      : 
      animeTop.map(elementoAnime =>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={elementoAnime.images.webp['image_url']} />
        <Card.Body>
            <Card.Title>{elementoAnime.title}</Card.Title>
            <Card.Text>
                {elementoAnime.synopsis}
            </Card.Text>
        </Card.Body>
      </Card>
      )
    }
    </div>
    
  )
}

export default App