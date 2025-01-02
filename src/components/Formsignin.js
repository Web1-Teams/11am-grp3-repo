
import SocialIcon from './SocialIcon';
import Button from './Button';
import './Formsignin.css'
import Emailpassword from './Emailpassword';

const Formsignin =()=>
    {
    return(
<div className="login1">
<form className='formforsignin'>
<h2 className="headerforlogin">log in</h2>
<Emailpassword/>
<span class="forgot-password"><a href="#">Forgot Password ?</a></span><br></br>
<SocialIcon/>
<Button titel="Log in"/>
<p class="no-acount">Have an Account? <a class="link" href="index.html">sign up Here!</a></p>

</form>
</div>
)
}
export default Formsignin;

