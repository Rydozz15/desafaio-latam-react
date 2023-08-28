import './App.css'
import Registro from './components/Registro'

function App() {
  const mensajesDeAlerta = [
    {"tipo" : "alert alert-danger",
    "titulo" : "Hay campos vacíos",
    "contenido" : "Todos los componentes son obligatorios"},
    {"tipo" : "alert alert-warning",
    "titulo" : "Hubo un problema",
    "contenido" : "Las contraseñas no coinciden"},
    {"tipo" : "alert alert-warning",
    "titulo" : "Hubo un problema",
    "contenido" : "El email no tiene el formato correcto"},
    {"tipo" : "alert alert-success",
    "titulo" : "Completado",
    "contenido" : "Tu registro fue exitoso"}]
  return (
    <>
      <Registro errorMensaje={mensajesDeAlerta}></Registro>
    </>
  )
}

export default App