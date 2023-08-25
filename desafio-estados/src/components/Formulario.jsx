const Formulario = () => {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [verif, setVerif] = useState('');

    return (
        <>
            <form onSubmit={} className="formulario">
                <div className="form-group">
                    <input type="text" name="nombre" placeholder="Nombre" className="formControl" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                </div>
            </form>
        </>
    )
}
export default Formulario