import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import SocialButton from "./SocialButton" 
import Formulario from "./Formulario"

const Registro = ({errorMensaje}) =>{
    return (
        <section>
            <h1>Crea una cuenta</h1>
            <div className="container text-center">
                <div className="row align-items-start">
                    <SocialButton red={faFacebook}></SocialButton>
                    <SocialButton red={faLinkedinIn}></SocialButton>
                    <SocialButton red={faGithub}></SocialButton>
                </div>
            </div>
            <p>o usa tu mail para registrarte</p>
            <Formulario mensaje={errorMensaje}></Formulario>
        </section>
    )
}
export default Registro