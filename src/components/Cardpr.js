import React from 'react';
import './Cardpr.css'; 
import Button2 from "./Button2";
import { Link } from "react-router-dom";

function Cardpr() {
  return (
    <div id="card" className="mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://via.placeholder.com/500"
            id="img-fluid"
            alt="..."
          />
          <div id="spacing">
            <Link to= "/" className="btn btn-primary btn-custom">Home</Link>
            < Link to= "/tablepage" className="btn btn-primary btn-custom">Table1</Link>
            <Link to= "/tablepage" className="btn btn-primary btn-custom"Button2 >Table2</Link>
            <Link to= "/profile-setting" className="btn btn-primary btn-custom">Profile Setting</Link>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h5 id="card-title">Personal Information</h5>

            <div id="name-info">
              <span id="label">First Name:</span>
              <span id="value">John</span>
              <span id="label">Last Name:</span>
              <span id="value">Dom</span>
            </div>

            <div id="gender-bdate">
              <span id="label">Birthday:</span>
              <span id="value">24/6/2001</span>
              <span id="label">Gender:</span>
              <span id="value">Male</span>
            </div>

            <div id="phone-country">
              <span id="label">Phone:</span>
              <span id="value">1232345</span>
              <span id="label">Country:</span>
              <span id="value">Palestine</span>
            </div>

            <div id="email">
              <span id="label">Email:</span>
              <span id="value">John123@gmail.com</span>
            </div>

            <div id="weight">
              <span id="label">Weight:</span>
              <span id="value">60kg</span>
            </div>

            <div id="height">
              <span id="label">Height:</span>
              <span id="value">160cm</span>
            </div>

            <div id="diabetes-type">
              <span id="label">Diabetes Type:</span>
              <span id="value">Type 1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardpr;