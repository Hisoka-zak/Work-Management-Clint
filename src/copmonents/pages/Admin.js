import React, { useEffect, useState } from 'react';
import "../css/Admin.css";
import admin from "../assets/admin.avif";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../Features/UserSlice'; 
import { addTask } from '../../Features/TaskSlice'; 
import {useNavigate} from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";

const Admin = () => {
  const dispatch = useDispatch();

  // Local state for form inputs
  const [selectedUser, setSelectedUser] = useState("");
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [details, setDetails] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  // Fetching user profile and users list from the Redux store
  const Profiler = useSelector((state) => state.users.user.imgUrl);
  const user = useSelector((state) => state.users.user);
  const dfimg = 'https://static.vecteezy.com/system/resources/thumbnails/013/360/247/small/default-avatar-photo-icon-social-media-profile-sign-symbol-vector.jpg';
  const users = useSelector((state) => state.users.users);
  const taskMessage = useSelector((state) => state.tasks.message);
  const navigate = useNavigate();
  
  // Dispatch getUsers on component mount
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // Handle task submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!selectedUser || !title || !dueDate || !details) {
      setDialogMessage("Please fill in all fields.");
      setShowDialog(true);
      return;
    }
  
    const taskData = {
      user: selectedUser,
      title: title,
      dueDate: dueDate,
      details: details,
    };
  
    dispatch(addTask(taskData))
      .then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          setDialogMessage("Task added successfully!");
          setSelectedUser("");
          setTitle("");
          setDueDate("");
          setDetails("");
        } else {
          setDialogMessage("Failed to add task.");
        }
        setShowDialog(true);
      });
  };

  const handleViewTask = () => {
    if (selectedUser) {
      navigate(`/user-details/${selectedUser}`);
    } else {
      setDialogMessage("Please select a staff name first.");
      setShowDialog(true);
    }
  };
  
  return (
    <div className="admin-panel">
      <div className="sidebar">
        <div className="profile text-center mb-4">
          <img src={Profiler ? Profiler : dfimg} alt="Profile" className="rounded-circle mb-2" />
          <p className="user-role">Admin</p>
          <p>{user.gender =='Male'? 'Mr.':'Ms.'} {user.user}</p>
         
        </div>
        <ul className="menu">
          <li className="menu-item bi bi-list-task disabled">&nbsp;Add Task</li>
          <li className="menu-item bi bi-person-lines-fill disabled">&nbsp; Staff Information</li>
        </ul>
        <ul className="menu fixed-bottom p-4">
          <li onClick={()=>navigate('/')} className="menu-item bi bi-box-arrow-right">&nbsp;Sign Out</li>
        </ul>
      </div>
      <div className="container-admin">
        <div className="left-section-admin">
          <h2>Assign Task To Staff</h2>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="bi bi-caret-down-fill"></i>
                </span>
              </div>
              <select
                id="name"
                className="form-control"
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
              >
                <option value="" disabled>
                  -- Select Staff Name -- 
                </option>
                {users && users.map((user) => (
                  <option key={user._id} value={user.user}>
                    {user.user}
                  </option>
                ))}
              </select>
              <button  onClick={handleViewTask} class="view-btn">View Task</button>
            </div>

            <label className="label">Title :</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="bi bi-sticky-fill"></i>
                </span>
              </div>
              <input
                type="text"
                id="title"
                className="form-control"
                placeholder="Enter Title .."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <label className="label">Due Date :</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="bi bi-calendar-fill"></i>
                </span>
              </div>
              <input
                type="date"
                id="dueDate"
                className="form-control"
                placeholder="Task Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>

            <label className="label">Task to do :</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="bi bi-pencil-fill"></i>
                </span>
              </div>
              <textarea
                id="task"
                className="form-control"
                placeholder="Enter the task .."
                rows="4"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>

            <button onClick={handleSubmit} className="login-btn-admin">Submit</button>
        </div>

        <div className="right-section-admin">
          <img src={admin} alt="Signup Illustration" />
        </div>
      </div>
      <Modal isOpen={showDialog} toggle={() => setShowDialog(false)}>
        <ModalHeader toggle={() => setShowDialog(false)}>Message</ModalHeader>
        <ModalBody>
          <p>{dialogMessage}</p>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Admin;
