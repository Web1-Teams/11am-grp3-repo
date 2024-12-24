
import './Chooses.css';

const Chooses = () => {

return(
    <div>
   <div className="duration-section mt-4 mb-5">
            <h5 className="mb-3">Choose the duration of the challenge:</h5>
            <div className="duration-options">
                <select className="form-select">
                    <option selected>Select duration</option>
                    <option value="7">7 Days</option>
                    <option value="14">14 Days</option>
                    <option value="30">30 Days</option>
                </select>
            </div>
        </div>
    </div>



)





}
export default Chooses;