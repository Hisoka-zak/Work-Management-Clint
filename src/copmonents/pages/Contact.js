import React from 'react'
import '../css/Contact.css'
import contact from '../assets/Image3.jpeg'
import Footer from '../sections/Footer'
import Header from '../sections/Header'


const Contact = () => {
  return (
    <div className='main-contact'>
    <Header/>
    <div class="container contact-container">
        <div class="contact-content">
            <div>
                <img src={contact} alt="Woman working on laptop" class="contact-image"/>
            </div>
            <div class="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="firstName">Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="firstName" placeholder="First"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="lastName">&nbsp;</label>
                            <input type="text" class="form-control" id="lastName" placeholder="Last"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email <span class="text-danger">*</span></label>
                        <input type="email" class="form-control" id="email" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <label for="message">Leave us a few words <span class="text-danger">*</span></label>
                        <textarea class="form-control" id="message" rows="4" placeholder="Your message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-submit">SUBMIT</button>
                </form>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact
