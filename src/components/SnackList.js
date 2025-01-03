import React from 'react';
import "./SnackList.css"; // Ensure this path is correct

const SnackList = () => {
    return (
        <div className="snack-container">
            <div className="snack-list mt-4">
                <div className="snack-item">
                    <input type="checkbox" className="snack-checkbox" id="snack1" />
                    <label className="snack-label" htmlFor="snack1">Apple slices with peanut butter</label>
                </div>
                <div className="snack-item">
                    <input type="checkbox" className="snack-checkbox" id="snack2" />
                    <label className="snack-label" htmlFor="snack2">Greek yogurt with berries</label>
                </div>
                <div className="snack-item">
                    <input type="checkbox" className="snack-checkbox" id="snack3" />
                    <label className="snack-label" htmlFor="snack3">Carrot sticks with hummus</label>
                </div>
                <div className="snack-item">
                    <input type="checkbox" className="snack-checkbox" id="snack4" />
                    <label className="snack-label" htmlFor="snack4">Handful of almonds</label>
                </div>
                <div className="snack-item">
                    <input type="checkbox" className="snack-checkbox" id="snack5" />
                    <label className="snack-label" htmlFor="snack5">Hard-boiled egg</label>
                </div>
            </div>
        </div>
    );
}

export default SnackList;