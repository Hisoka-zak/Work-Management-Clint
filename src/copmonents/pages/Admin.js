import React from 'react';
import "../css/Admin.css";
import admin from "../assets/admin.avif";

const Admin = () => {

  return (
    <div className="admin-panel">
    <div className="sidebar">
      <div className="profile text-center mb-4">
        <img src={'https://t4.ftcdn.net/jpg/06/35/15/47/360_F_635154757_zU5ZxxZe3Vs0hrrOQ9WBgNgX8s4Cw19s.jpg'} alt="Profile" className="rounded-circle mb-2" />
        <p className="user-role">Admin</p>
        <p className="">Mr.Salah</p>
      </div>
      <ul className="menu">
          <li className="menu-item bi bi-list-task disabled">&nbsp;Add Task</li>
          <li className="menu-item bi bi-person-lines-fill disabled">&nbsp; Staff Information</li>
        </ul>
      <ul className="menu fixed-bottom p-4">
        <li className="menu-item bi bi-box-arrow-right">&nbsp;Sign Out</li>
      </ul>
    </div>
      <div class="container-admin">
        <div class="left-section-admin">
          <h2>Assign Task To Staff</h2>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="bi bi-caret-down-fill"></i>
              </span>
            </div>
            <select id="name" class="form-control">
              <option value="" disabled selected>
                Select Username
              </option>
              <option value="user1">John Doe</option>
              <option value="user2">Jane Smith</option>
              <option value="user3">Sam Wilson</option>
            </select>
            <button class="view-btn">View Task</button>
          </div>

          <label class="label">Title :</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="bi bi-sticky-fill"></i>
              </span>
            </div>
            <input
              type="text"
              id="text"
              class="form-control"
              placeholder="Enter Title .."
            />
          </div>

          <label class="label">Due Date :</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="bi bi-calendar-fill"></i>
              </span>
            </div>
            <input
              type="date"
              id="date"
              class="form-control"
              placeholder="Task Date"
            />
          </div>

          <label class="label">Task to do :</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="bi bi-pencil-fill"></i>
              </span>
            </div>
            <textarea
              id="task"
              class="form-control"
              placeholder="Enter the task .."
              rows="4"
            ></textarea>
          </div>

          <button class="login-btn-admin">Submit</button>
        </div>

        <div class="right-section-admin">
          <img src={admin} alt="Signup Illustration" />
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Admin;
