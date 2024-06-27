import React, { useRef, useState } from "react";
import "../index.css";

const Profile = () => {
  const userdata = JSON.parse(localStorage.getItem("user"));
  const [userData, setuserData] = useState(userdata);

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg">
              <div className="card-header bg-primary text-white text-center">
                <h4 className="mb-0">Profile</h4>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="full_name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={userData && userData.fullName ? userData.fullName : ""}
                    ref={fullNameRef}
                    onChange={(e) => {
                      const newValue = e.target.value;
                      setuserData((prevState) => ({
                        ...prevState,
                        fullName: newValue,
                      }));
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={userData && userData.email ? userData.email : ""}
                    ref={emailRef}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder="Enter your address"
                    value={userData && userData.address ? userData.address : ""}
                    ref={addressRef}
                    onChange={(e) => {
                      const newValue = e.target.value;
                      setuserData((prevState) => ({
                        ...prevState,
                        address: newValue,
                      }));
                    }}
                  />
                </div>
                <div className="text-end">
                  <button className="btn btn-primary">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
