const Formulario = () => {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [verif, setVerif] = useState('');

    return (
        <>
            <form onSubmit={} className="formulario">
                <div className="form-group">
                    <input type="text" name="nombre" placeholder="Nombre" className="formControl" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                    <input type="email" name="email" placeholder="tumail@ejemplo.com" className="formControl" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <input type="password" name="contrasena" placeholder="Contraseña" className="formControl" onChange={(e) => setContrasena(e.target.value)} value={contrasena}/>
                    <input type="password" name="verificacion" placeholder="Confirma tu contraseña" className="formControl" onChange={(e) => setVerif(e.target.value)} value={verif}/>
                </div>
            </form>
        </>
    )
}
export default Formulario