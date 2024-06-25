import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{7,15}$/;

    if (username === '' || password === '') {
      toast.error('All fields are required', {
        autoClose: 1000,
        hideProgressBar: true,
      });
      return;
    } else if (!emailPattern.test(username) && !phonePattern.test(username)) {
      toast.error('Please enter a valid email or phone number', {
        autoClose: 1000,
        hideProgressBar: true,
      });
      return;
    } 
    else if (password.length < 2 || password.length > 4) {
      toast.error('Password must be between 2 and 4 characters long', {
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
        .get('https://minitgo.com/api/delivery_boy_reg.php')
        .then((response) => {
          console.log('response', response);
         
          navigate('/dashboard');
        })
        .catch((error) => {
          console.error('Failed to fetch user information:', error);
          toast.error('Login failed. Please try again.', {
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
            <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
              <div className="text-center mb-2 pb-2">
                <h2>Delivery Partner</h2>
              </div>
              <div className="mb-3">
                <label className="mb-2">Email/Phone Number</label>
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
              <div className="text-end">
                <button type="submit" className="btn btn-primary px-4 mb-2">
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
