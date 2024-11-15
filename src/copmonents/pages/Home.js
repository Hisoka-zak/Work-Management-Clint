import React from 'react';
import '../css/Home.css';
import ShowTasks from '../sections/ShowTasks';
import Header from '../sections/Header';
import logo from '../assets/logo.png';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <div className='container1'>
      <Header />
      <section className="header">
        <div className="container1">
          <h1>Work Management System</h1>
          <img src={logo} alt="Profile" className="rounded-circle" width="400px" height="400px" />
          <p>Work space</p>
          <p>Here is your space in which you will find some tasks to do</p>
        </div>
      </section>
      <div className="content-row">
        <div className="column1">
         <ShowTasks />
        </div>
        <div className="column2">
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
