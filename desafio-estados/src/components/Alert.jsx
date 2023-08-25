const Alert = () =>{
        //Estado para los errores
        const [error, setError] = useState(false);
        //Función antes de enviar el formulario
        const validarDatos = (e) => {
            e.preventDefault();
            //Validación;
            if (nombre === '' || email === '' || contrasena === '' || verif === ''){
                setError(true);
                return;
            }
            setError(false);
        };
    return (

    )
}
export default Alert