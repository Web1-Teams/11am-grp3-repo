import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
 import FoodPaths from "./components/Pages/FoodPaths";
 import Signuppage from "./components/Pages/Signuppage";


const App = () => {
  
  return (
<> 
<Router>
      <Routes>
        <Route path="/Signuppage" element={<Signuppage />} />
        <Route path="/foodpaths" element={<FoodPaths />} />
      </Routes>
    </Router>
   
    </>
  );
};

export default App;
