import React from 'react'
import '../css/Contact.css'
import Footer from '../sections/Footer'
import Header from '../sections/Header'
import ShowCompletedTask from '../sections/ShowCompletedTask'


const CompletedTasks = () => {
  return (
    <div className='main-contact'>
    <Header/>
    <ShowCompletedTask/>
    <Footer/>
    </div>
  )
}

export default CompletedTasks
