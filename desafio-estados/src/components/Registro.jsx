import SocialButton from "./SocialButton" 
import Formulario from "./Formulario"
import Alert from "./Alert"

const Registro = () =>{
    return (
        <section>
            <h1>Crea una cuenta</h1>
            <SocialButton></SocialButton>
            <p>o usa tu mail para registrarte</p>
            <Formulario></Formulario>
            <Alert></Alert>
        </section>
    )
}
export default Registro