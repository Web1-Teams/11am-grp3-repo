
import './BackToChallengesButton.css'
import { Link } from 'react-router-dom';
const BackToChallenges =()=>{
    return (
      <Link to="/challenge" >
        < button className="btn btn-outline-primary mb-4"><i class="bi bi-arrow-left"></i>Back to Challenges </button>
        </Link>
      
       
    )
}
export default BackToChallenges;