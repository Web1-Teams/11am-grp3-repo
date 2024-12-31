
 import HomePages from "./components/Pages/HomePages";
import ProfilePages from "./components/Pages/ProfilePages";



import DiabetesDefinition from "./components/Pages/DiabetesDefinition";
import Type2 from "./components/Pages/Type2";
import Type1 from "./components/Pages/Type1";
import TipsPages from "./components/Pages/TipsPages"
import TablePage from "./components/Pages/TablePage";

function App() {
  return (
<div>
<HomePages/>
   <ProfilePages/>


     
      <DiabetesDefinition />
      <Type1/>
      <Type2 />
     
<TipsPages/>
 
    
    <TablePage/>
</div>
 
   
  )



}

export default App;

