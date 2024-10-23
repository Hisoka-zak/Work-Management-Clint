import React from 'react'
import '../css/Register.css'
import register from '../assets/register.png'


const Register = () => {
  return (
<div class="container-register">
    <div class="left-section">
        <h2 className='signip'>
        Sign up for new account</h2>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
            </div>
            <input type="text" id="name" class="form-control" placeholder="Username"/>
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="bi bi-image-fill"></i></span>
            </div>
            <input type="text" id="name" class="form-control" placeholder="Profile Image Url"/>
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="bi bi-envelope-fill"></i></span>
            </div>
            <input type="email" id="email" class="form-control" placeholder="Your Email"/>
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="bi bi-shield-lock-fill"></i></span>
            </div>
            <input type="password" id="password" class="form-control" placeholder="Password"/>
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="togglePassword">
                    <i class="bi bi-eye-slash" id="toggleIcon"></i>
                </button>
            </div>
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="bi bi-shield-lock-fill"></i></span>
            </div>
            <input type="password" id="repeat-password" class="form-control" placeholder="Repeat your password"/>
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="togglerepeat">
                    <i class="bi bi-eye-slash" id="toggleIcon2"></i>
                </button>
            </div>
        </div>
        <label>
            <input type="checkbox" class="mr-2"/> I agree all the terms of service
            <br></br>
            <br></br>
        </label>
        <button class="cssbuttons-io-button">
          Register
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
        <div class="create-account">
            <a href="#">I am already a member</a>
        </div>
    </div>
    <div class="right-section">
        <img src={register} alt="Signup Illustration"/>
    </div>
</div>
  )
}

export default Register
