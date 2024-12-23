import React from "react";
import "./Table.css"
const Table = ({ title, rows }) => {
  console.log(rows);
  return (
    <div>
      <h2>{title}</h2>
      <table border="1" width="100%" >
        <thead >
          <tr>
            <th className="Meals">The meal</th>
            <th className="Meals">Type of food</th>
            <th className="Meals">Insulin units</th>
          </tr>
        </thead>
        <tbody >
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="Meals">{row.meal}</td>
              <td className="Meals">{row.food}</td>
              <td className="Meals">{row.insulin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;


