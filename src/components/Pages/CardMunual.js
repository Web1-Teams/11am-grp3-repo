
import Hheadar from "../Hheadar";
import Nav from "../Nav";
import Cardformunual from "../Cardformunual";
import { Button } from "bootstrap";
      const CardMunual = () => {
        return(
            <>
            <Hheadar/>
            <Nav/>

            <Cardformunual  imgeitem={['/photoformunual/Untitled.jpg','/photoformunual/avocado.jpg','/photoformunual/cum.jpg','/photoformunual/tomato.jpg','/photoformunual/chesse.webp','/photoformunual/labaneh.jpg','/photoformunual/falafel.jpg','/photoformunual/corn-f.jpg','/photoformunual/milk.jpg']} headerm="The Breakfast" food ={ ['Beard', 'avocado', 'cucumber','Tomato','Cheese',  'labneh', 'falafel', 'corn flakes', 'milk' ]}/>
    <Cardformunual  imgeitem={['/photoformunual/kabsa.jpg','/photoformunual/white rice.jpg','/photoformunual/peas.jpg','/photoformunual/molokhya.jpg','/photoformunual/mansaf.jpg','/photoformunual/maqlobeh.jpg','/photoformunual/pasta.jpg','/photoformunual/musakhan.jpg','/photoformunual/pizza.jpg']} headerm="The Lunch" food ={ [ 'Kabsa', 'white rice', 'peas', 'molokhiya', 'mansaf', 'maqlubuh', 'pasta', 'musakhan',  'pizza' ]}/>
    
    <Cardformunual  imgeitem={['/photoformunual/Untitled.jpg','/photoformunual/labaneh.jpg','/photoformunual/hummus.jpg','/photoformunual/tomato.jpg','/photoformunual/cum.jpg','/photoformunual/chesse.webp','/photoformunual/tuna.jpg','/photoformunual/zatter.jpg','/photoformunual/EG1.gif']} headerm="The Dinner " food ={ [ 'Bread', 'labaneh', 'hummus', 'tomato', 'cucumber', 'Cheese', 'tuna', 'zatter',  'egg' ]} />  
    <button type="submit" className="button-l">Continue</button>

            </>

);

}

  export default CardMunual;


