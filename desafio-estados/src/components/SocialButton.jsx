const SocialButton = (redA,redB,redC) =>{
    return (
        <div className="social-button-container">
            <i className={"fa-brands fa-"+{redA}}></i>
            <i className={"fa-brands fa-"+{redB}}></i>
            <i className={"fa-brands fa-"+{redC}}></i>
        </div>
    )
}
export default SocialButton