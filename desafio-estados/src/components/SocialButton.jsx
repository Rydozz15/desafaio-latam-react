import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialButton = ({red}) =>{
    return (
        <>
            <div className="col">
                <FontAwesomeIcon icon={red} size="3x"></FontAwesomeIcon>
            </div>
        </>
    )
}
export default SocialButton