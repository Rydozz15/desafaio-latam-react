const SocialButton = (redA,redB,redC) =>{
    return (
        <div className="social-button-container">
            <i className={"bi bi-"+{redA}}></i>
            <i className={"bi bi-"+{redB}}></i>
            <i className={"bi bi-"+{redC}}></i>
        </div>
    )
}
export default SocialButton