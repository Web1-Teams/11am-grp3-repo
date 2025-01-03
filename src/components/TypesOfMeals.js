
import './TypesOfMeals.css';
const TypesOfMeals =(props)=>{
    return (
        <div class="meal-grid">
            <div class="meal-card">
                <div class="meal-title">
                    <i className={props.icon}></i>
                    {props.MealName}
                </div>
                <input type="text"
                    class="meal-input"
                    placeholder={props.enterString}

                    aria-label="Breakfast input" />

            </div>
        </div>

   
    )      
}
export default TypesOfMeals;

