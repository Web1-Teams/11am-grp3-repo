

import InputField from "./InputFild";
import RadioButton from "./RadioButton";
const ProfileSettings = () => {
    return (
      <form>
        <div className="row">
          <InputField label="First Name" type="text" id="firstName" placeholder="John" colSize="6" />
          <InputField label="Last Name" type="text" id="lastName" placeholder="Doe" colSize="6" />
        </div>
        <div className="row">
          <InputField label="Phone Number" type="tel" id="phoneNumber" placeholder="1234567890" colSize="6" />
          <InputField label="Birthday" type="date" id="birthday" colSize="6" />
        </div>
        <div className="row">
          <div className="col-12 mb-3" >
            <label className="form-label">Gender</label>
            <div className="d-flex  flex-column  ">
                <div className="d-flex justify-content-start  align-items-center" >
              <RadioButton name="gender" id="female" label="Female" />
              <img src="/Images/femal.gif"/>
              </div>
              <div className="d-flex justify-content-start  align-items-center">
              <RadioButton name="gender" id="male" label="Male" />
              <img src="/Images/male.gif"/>
              </div>
            </div>
          </div>
        
        </div>
        <div className="row">
        <InputField label="Country" type="text" id="country" placeholder="Palestine" colSize="6" />
          <InputField label="Email" type="email" id="email" placeholder="example@example.com" colSize="6" />
          
        </div>
        <div className="row">
          <InputField label="Password" type="password" id="password" placeholder="123456" colSize="6" />
          <InputField label="New Password" type="password" id="newPassword" placeholder="new123456" colSize="6" />
        </div>
        <div className="row"> 
            <InputField label="Confirm Password" type="password" id="confirmPassword" placeholder="new123456" colSize="12" />
        </div>
        <div className="row">
          <InputField label="Weight" type="text" id="weight" placeholder="60 kg" colSize="6" />
          <InputField label="Height" type="text" id="height" placeholder="160 cm" colSize="6" />
        </div>
        <div className="row">
          <InputField label="Diabetes Type" type="text" id="diabetesType" placeholder="Type 1" colSize="12" />
        </div>
       
       
      </form>
    );
  };
  
  export default ProfileSettings;