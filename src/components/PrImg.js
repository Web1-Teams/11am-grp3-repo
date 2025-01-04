import "./PrImg.css";
import image from '../images/UnknownUser.jpg';

function PrImg () {
    return (
        <div>
            <img 
            src ={image}
            className="img-fluid rounded-circle"
            alt= "..."
            />

            
        </div>
    );
}
export default PrImg;