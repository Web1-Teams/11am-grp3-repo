
import React from "react";
import './FoodSnack.css';
 const Foodsnack=()=> {
  return (
    <div className="text-center mt-4">
            <div className="button-container">
                <button className="btn btn-success">
                    <i className="bi bi-check-circle"></i> Complete Food Challenge
                </button>
                <button className="btn btn-success">
                    <i className="bi bi-check-circle"></i> Complete snack Challenge
                </button>
            </div>
        </div>

  );
}
export default Foodsnack;