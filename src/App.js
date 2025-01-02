import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./components/Pages/HomePages";
import DiabetesDefinition from "./components/Pages/DiabetesDefinition";
import TipsPages from "./components/Pages/TipsPages";
import Type1 from "./components/Pages/Type1";
import Type2 from "./components/Pages/Type2";
import Loginpage from "./components/Pages/Loginpage";
import Signuppage from "./components/Pages/Signuppage";
import FoodPaths from "./components/Pages/FoodPaths";
function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/definition" element={<DiabetesDefinition />} />
        <Route path="/tips" element={<TipsPages />} />
        <Route path="/type1" element={<Type1 />} />
        <Route path="/type2" element={<Type2 />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/Signuppage" element={<Signuppage />} />
        <Route path="/foodpaths" element={<FoodPaths />} />
        

      </Routes>
    </Router>
   
    </>
  );
}

export default App;