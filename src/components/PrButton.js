import react from "react";
import "./PrButton.css";
function PrButton()
{
    return(
        <div>
            <div className="d-flex justify-between mt-4">
                <button type="button" className="btn btn-primary ">
                    Save Edit
                </button>
                <button type="button" className="btn btn-danger ">
                    Delete Account
                </button>
            </div>

            <div className="d-flex justify-content-lg-start mt-4">
                <button type="button" className="btn btn-primary">
                    <a 
                    href="Kenda2.html"
                    style={{color: "white", textDecoration: "none"}}>
                        Back To Profile
                    </a>
                </button>
            </div>
        </div>
    );
}
export default PrButton;