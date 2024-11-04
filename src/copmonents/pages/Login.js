import React, { useState } from 'react';
import '../css/Login.css';
import loginLogo from '../assets/login.png';
import {useNavigate} from 'react-router-dom';



const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  let Navto = useNavigate(); 
  const handlelogin=()=>{
    Navto('/home')
  }
  return (
    <div className="container-login">
      <div className="left-section-login ">
        <img src={loginLogo} alt="Signup Illustration" />
      </div>
      <div className="right-section-login ">
        <h2 className='signin'>Sign in to your account </h2>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="bi bi-person-fill"></i>
            </span>
          </div>
          <input type="text" id="name" className="form-control" placeholder="Username" />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="bi bi-shield-lock-fill"></i>
            </span>
          </div>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            className="form-control"
            placeholder="Password"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={togglePasswordVisibility}
            >
              <i className={passwordVisible ? "bi bi-eye" : "bi bi-eye-slash"} id="toggleIcon"></i>
            </button>
          </div>
        </div>
        <button class="cssbuttons-io-button" onClick={handlelogin}>
          Login
          <div class="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
        <div className="create-account">
          <a href="/register">Create an account ?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
