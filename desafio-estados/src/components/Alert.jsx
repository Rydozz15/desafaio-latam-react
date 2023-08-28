const Alert = ({ mensaje, errorInterno }) =>{
    return (
        <>
            {errorInterno == 0 ? <div className={mensaje[0].tipo} role="alert"><h4 className="alert-heading">{mensaje[0].titulo}</h4>{mensaje[0].contenido}</div> 
            : errorInterno == 1 ? <div className={mensaje[1].tipo} role="alert"><h4 className="alert-heading">{mensaje[1].titulo}</h4>{mensaje[1].contenido}</div>
            : errorInterno == 2 ? <div className={mensaje[2].tipo} role="alert"><h4 className="alert-heading">{mensaje[2].titulo}</h4>{mensaje[2].contenido}</div>  
            : errorInterno == 3 ? <div className={mensaje[3].tipo} role="alert"><h4 className="alert-heading">{mensaje[3].titulo}</h4>{mensaje[3].contenido}</div>
            : null}
        </>
    )
}
export default Alert