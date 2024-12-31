import './Emailpassword.css';
import SelectUI from './SelectUI';

function Emailpassword () {
    return (
        <form>
            <div>
            <label htmlFor ="email" className="email"> Your Email </label>
            <input type="email" name="email"
            placeholder="Your Email" required id="email"/>
            </div>

            <div>
                <label htmlFor ="password" className="password"> password</label>
                <input type="password" className ="password" placeholder ="Your Password" required id="password"/>
            </div>
          
        </form>
    );
}

export default Emailpassword;
