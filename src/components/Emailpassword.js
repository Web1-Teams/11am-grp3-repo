import './Emailpassword.css';


const Emailpassword =()=> {
    return (
        <div>
            <div>
            <label  htmlFor ="email" className="emaillabel"> Your Email </label>
            <input type="email" name="email"
            placeholder="Your Email" required className="emailinput"/>
            </div>

            <div>
                <label htmlFor ="password" className="passwordlabel"> password</label>
                <input type="password" className ="passwordinput" placeholder ="Your Password" required id="password"/>
            </div>
            </div>
        
    );
}

export default Emailpassword;
