const Card = () => (
    <>
        <div className="card">
            <img className="card-image" src="./src/assets/images/katie-zaferes.png" />
            <div className="card-desc">
                <div className="card-desc-rating">
                    <img className="card-icon" src="./src/assets/images/star.png" />
                    <p> 5.0 <span className="text-faded">(6) • USA</span></p>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className="text-bold">From $136 /</span> person</p>    
            </div>    
        </div>
    </>
)


export default Card;