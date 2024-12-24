import React from 'react';
import "./Table.css"
function Table(props) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>{props.title}</h2>
      
      <table border="1" width="100%">
        <thead className="Meals">
          <tr>
            <th className="Meals">The meal</th>
            <th className="Meals">Type of food</th>
            <th className="Meals">Insulin units</th>
          </tr>
        </thead>
        <tbody className="Meals">
          <tr>
            <td className="Meals">Breakfast</td>
            <td className="Meals">{props.Breakfast}</td>
            <td className="Meals">{props.Insulin0}</td>
          </tr>
        </tbody>
        <tbody className="Meals">
          <tr>
            <td className="Meals">Snack 1</td>
            <td className="Meals">{props.Snack1}</td>
            <td className="Meals">{props.Insulin1}</td>
          </tr>
        </tbody>
        <tbody className="Meals">
          <tr>
            <td className="Meals">The Lunch</td>
            <td className="Meals">{props.Lunch}</td>
            <td className="Meals">{props.Insulin2}</td>
          </tr>
        </tbody>
        <tbody className="Meals">
          <tr>
            <td className="Meals">Snack 2</td>
            <td className="Meals">{props.Snack2}</td>
            <td className="Meals">{props.Insulin3}</td>
          </tr>
        </tbody>
        <tbody className="Meals">
          <tr>
            <td className="Meals">Dinner</td>
            <td className="Meals">{props.Dinner}</td>
            <td className="Meals">{props.Insulin4}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;




