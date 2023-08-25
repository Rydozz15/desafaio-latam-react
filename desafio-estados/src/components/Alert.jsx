import { useState } from "react";
import Formulario from "./Formulario";

//Pasar de boolean a 0,1,2?¡
const Alert = () =>{
        //Estado para los errores
        const [error, setError] = useState(0);
        //Función antes de enviar el formulario
        const validarDatos = (e) => {
            e.preventDefault();
            //Validación;
            if (nombre === '' || email === '' || contrasena === '' || verif === ''){
                setError(0);
                return;
            } else if (contrasena != verif){
                setError(1)
                return
            } else{
                setError(2);
                return
            }
        };
    return (
        <>
            {error == 0 ? <div className="alert alert-danger" role="alert">Todos los componentes son obligatorios</div> 
            : error == 1 ? <div className="alert alert-warning" role="alert">Las contraseñas no coinciden</div> 
            : error == 2 ? <div className="alert alert-success" role="alert">Tu registro fue exitoso</div>
            : null}
        </>
    )
}
export default Alert