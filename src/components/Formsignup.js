
import './Formsignup.css';
import Inputlabel from './Inputlabel';
import Inputlabel2 from './Inputlabel2';
import Button from './Button';
import { Link } from "react-router-dom"; 

const Formsignup = () => {
   
        const handleScrollToTop = () => {
          window.scrollTo(0, 0); 
        };
      
        
  
    return (
    <div className="signup1">
      <form className="formforsignup">
        <h2 className="headerforsignup">Sign up</h2>
        <Inputlabel labeltitel="User name " labelfor="username" inputtype="text" inputname="txt" imagg="/photozeinad/icons8-name-48.png" />
        <Inputlabel labeltitel="Family name " labelfor="family name" inputtype="text" inputname="txt" imagg="/photozeinad/icons8-name-48.png" />
        <br />
        <Inputlabel labeltitel="Your Email " labelfor="your Email" inputtype="email" inputname="email" imagg="/photozeinad/icons8-email-48.png" />
        <Inputlabel labeltitel="Password " labelfor="password" inputtype="password" inputname="password" imagg="/photozeinad/icons8-password-48.png" />
        <br />
        <Inputlabel labeltitel="Phone No.: " labelfor="phone" inputtype="tel" inputname=" " imagg="/photozeinad/telephone.png" />
        <Inputlabel labeltitel="Birthday: " labelfor="birthday" inputtype="date" inputname="birthday" imagg="/photozeinad/date-of-birth.png" />
        <br />
        <Inputlabel2 labeltitel="Length" labelfor="length" inputname="number" inputtype="number" min="0" step="1" imagg="/photozeinad/icons8-sewing-tape-measure-48.png" />
        <Inputlabel2 labeltitel="Wight" labelfor="wight" inputname="number" inputtype="number" min="0" step="1" imagg="/photozeinad/icons8-scale-48.png" />
        <br />
        <Inputlabel labeltitel="when you wake up: " labelfor="appt1" inputtype="time" inputname="time" imagg="/photozeinad/icons8-wake-up-50.png" />
        <Inputlabel labeltitel="Set your bedtime: " labelfor="appt2" inputtype="time" inputname="time" imagg="/photozeinad/icons8-bedtime-32.png" />
        <br />
        <Inputlabel labeltitel="Select a time of breakfast: " labelfor="appt3" inputtype="time" inputname="time" imagg="/photozeinad/icons8-coffee-48.png" />
        <br />
        <Inputlabel labeltitel="Select a time of lunch: " labelfor="appt4" inputtype="time" inputname="time" imagg="/photozeinad/icons8-wrap-48.png" />
        <br />
        <Inputlabel labeltitel="Select a time of dinner " labelfor="appt5" inputtype="time" inputname="time" imagg="/photozeinad/icons8-cutlery-32.png" />
        <br />
        <Link to="/foodpaths" onClick={handleScrollToTop}>
        <Button className='headerforsignup'   titel="Sign up " />
       
        </Link>
      </form>
    </div>
  );
};

export default Formsignup;
