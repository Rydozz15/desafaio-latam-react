import './App.css'
import Tareas from './components/Tareas'
import { useState, useEffect,useRef } from "react";

function App() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    consultarApi();
    }, []);
    const consultarApi = async () => {
      const url = "https://api.gameofthronesquotes.xyz/v1/random";
      const response = await fetch(url);
      const data = await response.json();
      setInfo(`${data.sentence} - ${data.character.name}`);
    };
    const inputRef = useRef()
    useEffect(() => {inputRef.current.focus();}, []);

  return (
    <>
      <h1>Ejemplo useRef - Focus automático</h1>
      <input type="text" placeholder="Nombre" ref={inputRef}/>
      <input type="text" placeholder="Correo electrónico" />
      <input type="text" placeholder="Teléfono" />
      {info}
      <Tareas></Tareas>
    </>
  )
}

export default App
