const Card = ({ title, type, image, rating, description, playerCount, onClick}) => {
    console.log(title, image)
    return (
        <button className="card" onClick={onClick}>
            <h2>{title}</h2>
            <img src={image} alt={title} class="center"/>
            <div className="rating">
                <span>{rating}</span>
                <p>{description}</p>
            </div>
            <div>
                <p>Player count: {playerCount} players</p>
            </div>
        </button>
    );
  }
  
  export default Card;
  