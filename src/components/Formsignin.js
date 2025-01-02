
import SocialIcon from './SocialIcon';
import Button from './Button';
import './Formsignin.css'
import Emailpassword from './Emailpassword';
import { Link } from "react-router-dom"; 


const Formsignin =()=>
    {
        const handleScrollToTop = () => {
            window.scrollTo(0, 0); 
          };
        
    return(
<div className="login1">
<form className='formforsignin'>
<h2 className="headerforlogin">log in</h2>
<Emailpassword/>
<span class="forgot-password"><a href="#">Forgot Password ?</a></span><br></br>
<SocialIcon/>
<Link to="/foodpaths" onClick={handleScrollToTop}>
<Button titel="Log in"/>
</Link>
<p class="no-acount">Have an Account?</p>
<Link to="/Signuppage" onClick={handleScrollToTop} className='pargh1'>sign up Here!</Link>

</form>
</div>
)
}
export default Formsignin;

