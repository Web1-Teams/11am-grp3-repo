import react from "react"
import "./Challengeee.css"
const Challenge =(props)=>{
    return(
       <div className="col-md-6">
                 <div className="meal-container">
         <div className="snack-container">
           <h2 className="section-title text-center">{props.cha}</h2>
             <div className="duration-card">
               <div className="meal-title">
                <i className="bi bi-calendar-event meal-icon"></i>
                  Duration
            </div>
            <select className="form-select">
               <option selected disabled>Select Duration</option>
               <option>1 Week</option>
               <option>2 Weeks</option>
               <option>1 Month</option>
               <option>3 Months</option>
           </select>
       </div>
    </div>
    </div>
    </div>
    
);
}
export default Challenge;