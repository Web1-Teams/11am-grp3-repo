import "./PrImg.css";

function PrImg () {
    return (
        <div>
            <img 
            src = "https://via.placeholder.com/500"
            className="img-fluid rounded-circle"
            alt= "..."
            />

            <button type = "button" className="btn btn-primary btn-custom">
                Change Photo
            </button>
        </div>
    );
}
export default PrImg;