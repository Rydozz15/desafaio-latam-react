import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialButton = ({red}) =>{
    return (
        <>  
            <div className="col">
                <FontAwesomeIcon icon={red} size="3x" className="p-2 border border-dark rounded-circle"></FontAwesomeIcon>
            </div>
        </>
    )
}
export default SocialButton