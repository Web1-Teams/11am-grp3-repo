import "./PrImg.css";
import image from '../images/UnknownUser.jpg';
function PrImg () {
    return (
        <div className="Profile-img-container mb-3">
            <img 
            src = {image}
            className="img-fluid rounded-circle"
            alt= "..."
            />

            <button type = "button" className="btn btn-primary btn-sm mt-3">
                Change Photo
            </button>
        </div>
    );
}
export default PrImg;