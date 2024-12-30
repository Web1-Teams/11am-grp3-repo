import React from 'react';
import './Cardpr.css'; // استيراد ملف الـ CSS

function Cardpr() {
  return (
   
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
              <img
                src="https://via.placeholder.com/500"
                className="img-fluid rounded-circle"
                alt="..."
              />

          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Personal Information</h5>

              <div className="name-info">
                <span className="label">First Name:</span>
                <span className="value">John</span>
                <span className="label">Last Name:</span>
                <span className="value">Dom</span>
              </div>

              <div className="gender-bdate">
                <span className="label">Birthday:</span>
                <span className="value">24/6/2001</span>
                <span className="label"> Gender:</span>
                <span className="value">Male</span>
              </div>

              <div className="phone-country">
                <span className="label">Phone:</span>
                <span className="value">1232345</span>
                <span className="label"> Country:</span>
                <span className="value">Palestine</span>
              </div>

              <div className="email">
                <span className="label">Email:</span>
                <span className="value">John123@gmail.com</span>
              </div>

              <div className="weight">
                <span className="label">Weight:</span>
                <span className="value">60kg</span>
              </div>

              <div className="height">
                <span className="label">Height:</span>
                <span className="value">160cm</span>
              </div>

              <div className="diabetes-type">
                <span className="label">Diabetes Type:</span>
                <span className="value">Type 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Cardpr;