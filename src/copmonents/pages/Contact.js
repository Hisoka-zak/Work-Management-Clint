import React, { useRef } from 'react';
import '../css/Contact.css';
import contact from '../assets/Image3.jpeg';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import $ from 'jquery'; // Ensure jQuery is installed and imported

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const data = {
      service_id: 'service_qvzfk9i', // Replace with your service ID
      template_id: 'template_x7evfyc', // Replace with your template ID
      user_id: '27_4QRCzQW9hTjL4v', // Replace with your public key
      template_params: {
        user_name: `${formRef.current.firstName.value} ${formRef.current.lastName.value}`,
        user_email: formRef.current.email.value,
        message: formRef.current.message.value,
      },
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
    }).done(function () {
      alert('Your mail is sent!');
      // Optionally, clear the form fields after submission
      formRef.current.reset();
    }).fail(function (error) {
      alert('Oops... ' + JSON.stringify(error));
    });
  };

  return (
    <div className='main-contact'>
      <Header />
      <div className="container contact-container">
        <div className="contact-content">
          <div>
            <img src={contact} alt="Woman working on laptop" className="contact-image" />
          </div>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="firstName">Name <span className="text-danger">*</span></label>
                  <input type="text" name="firstName" className="form-control" id="firstName" placeholder="First" required />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastName">&nbsp;</label>
                  <input type="text" name="lastName" className="form-control" id="lastName" placeholder="Last" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email <span className="text-danger">*</span></label>
                <input type="email" name="email" className="form-control" id="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Leave us a few words <span className="text-danger">*</span></label>
                <textarea name="message" className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
