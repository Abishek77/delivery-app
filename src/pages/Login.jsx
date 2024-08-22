import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{7,15}$/;

    if (username === "" || password === "") {
      toast.error("All fields are required", {
        autoClose: 1000,
        hideProgressBar: true,
      });
      return;
    } else if (!emailPattern.test(username) && !phonePattern.test(username)) {
      toast.error("Please enter a valid email or phone number", {
        autoClose: 1000,
        hideProgressBar: true,
      });
      return;
    } else if (password.length < 8 || password.length > 12) {
      toast.error("Password must be between 8 and 12 characters long", {
        autoClose: 1000,
        hideProgressBar: true,
      });
      return;
    } else {
      const data = {
        username: username,
        password: password,
      };

      axios
        .post("https://minitgo.com/api/delivery_boy_reg.php", data)
        .then((response) => {
          console.log("response", response.data);

          if (response.data.status === true) {
            console.log("hiii");
            console.log(response.data.data);

            const allUsers = response.data.data;
            console.log("allusers", allUsers.password);

            if (allUsers) {
              if (allUsers.password === data.password) {
                console.log("Login successful");

                toast.success("Login successful", {
                  autoClose: 1000,
                  hideProgressBar: true,
                });
                navigate("/dashboard");

                const userData = {
                  userId: allUsers.dbid,
                  fullName: allUsers.name,
                  phoneNumber: allUsers.phone,
                  email: allUsers.email,
                  address: allUsers.address,
                };

                localStorage.setItem("user", JSON.stringify(userData));

                console.log("FOUND USER:", userData);

                setUsername("");
                setPassword("");
              } else {
                toast.error("Invalid Password", {
                  autoClose: 1000,
                  hideProgressBar: true,
                });
                console.log("Invalid password");
              }
            } else {
              toast.error("Invalid Email or Phone Number", {
                autoClose: 1000,
                hideProgressBar: true,
              });
              console.log("Invalid email or phone number");
            }
          } else {
            toast.error("Server Error", {
              autoClose: 1000,
              hideProgressBar: true,
            });
          }
        })
        .catch((error) => {
          console.error("Failed to fetch user information:", error);
          toast.error("Login failed. Please try again.", {
            autoClose: 1000,
            hideProgressBar: true,
          });
        });
    }
  };

  return (
    <div className="container h-100">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card my-5">
            <form
              className="card-body   rounded  p-lg-5"
              onSubmit={handleSubmit}
            >
              <div className="text-center mb-2 pb-2">
                <h2 className="text-secondary fs-1">Login</h2>
                <p className=" fs-6 text-success">Delivery partner's</p>
              </div>
              <div className="mb-3">
                <label className="mb-2">Email/Phone</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Email/Phone Number"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br></br>
              <div className="text-center">
                <button type="submit" className="btn btn-secondary px-5 mb-3">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
