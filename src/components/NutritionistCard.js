import image from '../images/UnknownUser.jpg';
import './NutritionistCard.css'

const NutritionCard = (props) => {
    return (
        <>
            <div className="card-group" id="NutritionCard">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..." height="400px" />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">
                            {props.description}
                            </p>
                        <i className="bi bi-envelope-fill"></i>
                        <a href='https://mail.google.com/mail/u/0/#inbox'>{props.email}</a>
                    </div>
                </div>
            </div>
        </>

    );
}
export default NutritionCard;
