import { useState } from "react";

const Formulario = () => {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [verif, setVerif] = useState('');
    
    //Estado para los errores
    const [error, setError] = useState(0);

    //Expresion regular del mail
    let regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
        } else if(!regExEmail.test(email)){
            setError(2);
            return
        } else{
            setError(3)
            return
        }
    };
    return (
        <>
            <form onSubmit={validarDatos} className="formulario">
                <div className="form-group">
                    <input type="text" name="nombre" placeholder="Nombre" className="formControl" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                    <input type="email" name="email" placeholder="tumail@ejemplo.com" className="formControl" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <input type="password" name="contrasena" placeholder="Contraseña" className="formControl" onChange={(e) => setContrasena(e.target.value)} value={contrasena}/>
                    <input type="password" name="verificacion" placeholder="Confirma tu contraseña" className="formControl" onChange={(e) => setVerif(e.target.value)} value={verif}/>
                    <button type="submit" class="btn btn-secondary btn-lg btn-block" onSubmit={validarDatos}>Registrar</button>
                </div>
            </form>
        </>
    )
}
export default Formulario