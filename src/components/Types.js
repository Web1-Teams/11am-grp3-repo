import './Types.css';
import image from '../images/Types.jpg'
import Button from './Button1';
import { Link } from 'react-router-dom';

const Types = () => {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0); 
      };
    return (
        <div class="Types_of_diabetes">

            <div class="in_Types">
                <h1>Types Of Diabetes</h1>
                <h2>Diabetes is a disease that has become more diverse than was once thought to be a single type.</h2>

                <div class="Flex_button">
                <Link to="/type1" onClick={handleScrollToTop}>
                <Button text={"Type 1"}/>
                </Link>
                
                <Link to="/type2" onClick={handleScrollToTop}>
                <Button  text={"Type 2"}/>
                </Link>

                   
                    
                    
                </div>

            </div>
            <img src={image} alt="" width="1150" />

        </div>
    )
}
export default Types
