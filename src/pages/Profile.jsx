import React, { useRef, useState } from 'react';

const Profile = () => {
  const userdata = JSON.parse(localStorage.getItem("user"));
  const [userData, setuserData] = useState(userdata);

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);

  return (
    <>
      <div className="container custom-sidebar mt-5 border bottom-1">
        <div className="fs-4 fw-bold mt-3 w-100 pb-2 text-center">
          Profile
        </div>
        <div className="custom-profile-details mt-2">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <label htmlFor="full_name" className="mt-2 form-label">
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                className="mt-1 form-control"
                placeholder="Enter your full name"
                value={
                  userData && userData.fullName ? userData.fullName : ""
                }
                ref={fullNameRef}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setuserData((prevState) => ({
                    ...prevState,
                    fullName: newValue,
                  }));
                }}
              />
              <label htmlFor="email mt-1" className="mt-2 form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 form-control"
                value={userData && userData.email ? userData.email : ""}
                ref={emailRef}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setuserData((prevState) => ({
                    ...prevState,
                    email: newValue,
                  }));
                }}
                readOnly // Added readOnly attribute here
              />
              <label htmlFor="address" className="mt-2 form-label">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 form-control"
                placeholder="Enter your address"
                value={
                  userData && userData.address ? userData.address : ""
                }
                ref={addressRef}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setuserData((prevState) => ({
                    ...prevState,
                    address: newValue,
                  }));
                }}
              />

              <div className="text-end mt-3 mb-3">
                <button className='btn btn-primary'>Update</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
