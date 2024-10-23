import React from 'react'
import '../css/Admin.css'
import update from '../assets/update.jpg'

const UpdateTask = () => {
  return (
    <div>
          <div>
          <div class="container-admin">
        <div class="left-section-admin">
            <h2>Assign Task To Staff</h2>


            <label class="label">Title :</label>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="bi bi-sticky-fill"></i></span>
                </div>
                <input type="text" id="text" class="form-control" placeholder="Enter Title .."/>
            </div>


            <label class="label">Due Date :</label>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="bi bi-calendar-fill"></i></span>
                </div>
                <input type="date" id="date" class="form-control" placeholder="Task Date"/>
            </div>
    
            <label class="label">Task to do :</label>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="bi bi-pencil-fill"></i></span>
                </div>
                <textarea id="task" class="form-control" placeholder="Enter the task .." rows="4"></textarea>
            </div>

    
            <button class="login-btn-admin">Submit</button>
            <br></br>
            <a href="#" class="back-link">← Back to previous page</a>
        </div>
    
        <div class="right-section-admin">
            <img src={update} alt="Signup Illustration"/>
        </div>
    </div>
    

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
    </div>
  )
}

export default UpdateTask
