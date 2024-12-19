import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hheadar from './components/Hheadar';
import Inputlabel from './components/Inputlabel'
import Inputlabel2 from './components/Inputlabel2';


function App() {
  return (
    <>
      
    <Inputlabel labeltitel="User name " labelfor="username" inputtype="text" inputname="txt" imagg="/photozeinad/icons8-name-48.png" />
    <Inputlabel labeltitel="Family name " labelfor="family name" inputtype="text" inputname="txt" imagg="/photozeinad/icons8-name-48.png" />
    <Inputlabel labeltitel="Your Email " labelfor="your Email" inputtype="email" inputname="email" imagg="/photozeinad/icons8-email-48.png" />
    <Inputlabel labeltitel="Password " labelfor="password" inputtype="password" inputname="password" imagg="/photozeinad/icons8-password-48.png" />
    <Inputlabel labeltitel="Phone No.: " labelfor="phone" inputtype="tel" inputname=" " imagg="/photozeinad/telephone.png" />
    <Inputlabel labeltitel="Birthday: " labelfor="birthday" inputtype="date" inputname="birthday" imagg="/photozeinad/date-of-birth.png" />
    
    <Inputlabel labeltitel="when you wake up: " labelfor="appt1" inputtype="time" inputname="time" imagg="/photozeinad/icons8-wake-up-50.png" />
    <Inputlabel labeltitel="Set your bedtime: " labelfor="appt2" inputtype="time" inputname="time" imagg="/photozeinad/icons8-bedtime-32.png" />
    <Inputlabel labeltitel="Select a time of breakfast: " labelfor="appt3" inputtype="time" inputname="time" imagg="/photozeinad/icons8-coffee-48.png" />
    <Inputlabel labeltitel="Select a time of lunch: " labelfor="appt4" inputtype="time" inputname="time" imagg="/photozeinad/icons8-wrap-48.png" />
    <Inputlabel labeltitel="Select a time of dinner " labelfor="appt5" inputtype="time" inputname="time" imagg="/photozeinad/icons8-cutlery-32.png" />
    <Inputlabel2  labeltitel="Length" labelfor="length" inputname="number" inputtype="number"   min="0"  step="1" imagg="/photozeinad/icons8-sewing-tape-measure-48.png"/>
    <Inputlabel2  labeltitel="Wight" labelfor="wight" inputname="number" inputtype="number"   min="0"  step="1" imagg="/photozeinad/icons8-scale-48.png"/>
    </>
  );
}

export default App;
