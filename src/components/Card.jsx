const Card = (props) => {
    const { title, price, coverImg, stats, location, openSpots} = props.data
    const { rating, reviewCount} = stats

    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

    return (
    <>
        <div className="card">
            { badgeText && <div className="card-status">{badgeText}</div>}
            <img className="card-image" src={`./src/assets/images/${coverImg}`} />
            <div className="card-desc">
                <div className="card-desc-rating">
                    <img className="card-icon" src="./src/assets/images/star.png" />
                    <p> {rating} <span className="text-faded">({reviewCount}) • {location}</span></p>
                </div>
                <p className="card-title">{title}</p>
                <p className="card-price"><span className="text-bold">From ${price} /</span> person</p>    
            </div>    
        </div>
    </>
)}


export default Card;