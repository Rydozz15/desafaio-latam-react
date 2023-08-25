//Pasar de boolean a 0,1,2?¡
const Alert = (error) =>{
    return (
        <>
            {error == 0 ? <div className="alert alert-danger" role="alert"><h4 class="alert-heading">Hay campos vacíos</h4>Todos los componentes son obligatorios</div> 
            : error == 1 ? <div className="alert alert-warning" role="alert"><h4 class="alert-heading">Hubo un problema</h4>Las contraseñas no coinciden</div>
            : error == 2 ? <div className="alert alert-warning" role="alert"><h4 class="alert-heading">Hubo un problema</h4>El email no tiene el formato correcto</div>  
            : error == 3 ? <div className="alert alert-success" role="alert"><h4 class="alert-heading">Completado</h4>Tu registro fue exitoso</div>
            : null}
        </>
    )
}
export default Alert