
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./components/Pages/HomePages";
import DiabetesDefinition from "./components/Pages/DiabetesDefinition";
import TipsPages from "./components/Pages/TipsPages";
import Type1 from "./components/Pages/Type1";
import Type2 from "./components/Pages/Type2";
import Loginpage from "./components/Pages/Loginpage";
import Signuppage from "./components/Pages/Signuppage";
import FoodPaths from "./components/Pages/FoodPaths";
<<<<<<< HEAD
import ProfilSettingPage from "./components/Pages/ProfilSettingPage";
import ProfilePages from "./components/Pages/ProfilePages";
import TablePage from "./components/Pages/TablePage";

=======
import ProfilSettingPage from "./components/Pages/ProfilSettingPage"
>>>>>>> 1d3d47651f7ab157e7302f8b08aae88c51d90ac4




function App() {
  return (
<<<<<<< HEAD



  
     <Router>

=======
  <>

    <Router>
>>>>>>> 1d3d47651f7ab157e7302f8b08aae88c51d90ac4
      <Routes>
      <Route path="/" element={<HomePages />} />
        <Route path="/definition" element={<DiabetesDefinition />} />
        <Route path="/tips" element={<TipsPages />} />
        <Route path="/type1" element={<Type1 />} />
        <Route path="/type2" element={<Type2 />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/Signuppage" element={<Signuppage />} />
        <Route path="/foodpaths" element={<FoodPaths />} />
<<<<<<< HEAD
        <Route path="/profile" element = {<ProfilePages/>}/>
        <Route path="/profile-setting" element={<ProfilSettingPage/>} />

      <Route path="/tablepage" element={<TablePage/>} />
        
=======
        <Route path="/" element={<ProfilSettingPage/>}/>
       
>>>>>>> 1d3d47651f7ab157e7302f8b08aae88c51d90ac4



      </Routes>
<<<<<<< HEAD

    
    



    </Router> 



=======
    </Router>
   
    </>
>>>>>>> 1d3d47651f7ab157e7302f8b08aae88c51d90ac4
  );
}

export default App;