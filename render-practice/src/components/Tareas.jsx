import { useState } from "react"
import { tareasIniciales } from "../TareasIniciales"

function Tareas() {
    const [nombreTarea, setNombreTarea] = useState("")
    const [listaTareas, setListaTareas] = useState(tareasIniciales)
    const enviarFormulario = (e) => {
        e.preventDefault()
        setListaTareas([...listaTareas,{nombre: nombreTarea, completada: false}])
        setNombreTarea("")
    }
    const capturaInput = (e) => {
        setNombreTarea(e.target.value)
    }
    const completarTarea = (tarea) => {
        const nuevasTareas = [...listaTareas]
        const index = nuevasTareas.findIndex(el => el.nombre === tarea.nombre)
        nuevasTareas[index].completada = true
        setListaTareas(nuevasTareas)
    }
    return (
    <div>
        <form onSubmit={enviarFormulario}>
            <input name="nombreTarea" onChange={capturaInput} value={nombreTarea}/>
            <button>Agregar Tarea</button>
        </form>
        <ul>
            {listaTareas.map(tarea => 
            <li key={tarea.nombre}
            style={tarea.completada == true ? {textDecoration:'line-through'} : {}}>
                {tarea.nombre}
                {tarea.completada === false ? <button onClick={() => completarTarea(tarea)}> Completar </button> : ''}
                </li> )}
        </ul>
    </div>
    
)
}

export default Tareas