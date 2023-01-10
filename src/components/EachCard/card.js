import "./card.css";
const Card = ({ name, date, poster, genre }) => {
    return (
        <>
            <div className="poster">
                <img src={poster} alt="poster" />
            </div>
            <div className="card-title">
                <h5>{name}</h5>
                <h6>{date}</h6>
            </div>
            <div className="genre">
                <h6>{genre}</h6>
            </div>
        </>
    );
};

export default Card;
