import React, { useState, useEffect } from "react";
import "../css/DeleteTasks.css";
import { Card, ModalHeader, ModalBody, Button, Modal } from "reactstrap";
import { useParams ,useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../Features/TaskSlice";
import axios from "axios";
import moha from "../assets/moha.avif";

const DeleteTasks = () => {
  const { user } = useParams(); 
  const dispatch = useDispatch();
  const NavTo = useNavigate();

  const tasks = useSelector((state) => state.tasks.Task);

  const [currentTasks, setCurrentTasks] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10; 
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const userdata = userDetails?.tasks?.[0]?.userdata?.[0] || {};
  const countryCode = userdata?.country_code || "N/A";
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Fetch tasks on mount
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Filter tasks for the selected user and update current tasks
  useEffect(() => {
    if (tasks && tasks.length > 0) {
      const filteredTasks = tasks.filter((task) => task.user === user);
      setUserDetails({ tasks: filteredTasks });
      updateCurrentTasks(filteredTasks, 1); // Default to first page
    }
  }, [tasks, user]);

  // Update tasks for the current page
  const updateCurrentTasks = (tasksList, pageNumber) => {
    const startIndex = (pageNumber - 1) * tasksPerPage;
    const endIndex = startIndex + tasksPerPage;
    setCurrentTasks(tasksList.slice(startIndex, endIndex));
    setCurrentPage(pageNumber);
  };

  // Handle pagination
  const paginate = (pageNumber) => {
    if (userDetails) {
      updateCurrentTasks(userDetails.tasks, pageNumber);
    }
  };

  // Open modal for task details
  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const ToAddTask = ()=>{
    NavTo(-1)
  }
  const handleDeleteConfirmation = async () => {
    if (!taskToDelete) return;
  
    try {
      const response = await axios.delete(`http://127.0.0.1:8080/api/tasks/${taskToDelete}`);
      console.log(response.data.message);
  
      // Remove the deleted task from the state
      const updatedTasks = userDetails.tasks.filter((task) => task._id !== taskToDelete);
      setUserDetails({ tasks: updatedTasks });
      updateCurrentTasks(updatedTasks, currentPage);
    } catch (error) {
      console.error("Error deleting task:", error.response?.data?.message || error.message);
    }
  
    // Close modal
    setShowConfirmModal(false);
    setTaskToDelete(null);
  };
  

  const confirmDeleteTask = (taskId) => {
    setTaskToDelete(taskId);
    setShowConfirmModal(true);
  };
  

  return (
    <div className="admin-panel">
      <div className="sidebar">
        <div className="profile text-center mb-4">
          <img src={userdata?.imgUrl? userdata.imgUrl:moha} alt="Profile" className="rounded-circle mb-2" />
          <p className="user-role">Staff</p>
          {userdata?.gender === "Male" ? "Mr." : "Ms."} {user}
        </div>
        <ul className="menu">
          <li className="menu-item bi bi-list-task" onClick={ToAddTask}>&nbsp;Add Task</li>
          <li className="menu-item bi bi-person-lines-fill">
            &nbsp; Staff Information
          </li>
          <Card>
            <div className="staff-info mt-4 p-3 text-dark border">
              {userDetails ? (
                <>
                  <p>
                    <i className="bi bi-globe-americas"></i>&nbsp;&nbsp;
                    <strong>Country:</strong> {userdata.country || "Unknown"} ({countryCode})
                  </p>
                  <p>
                    <i className="bi bi-geo-alt-fill"></i>&nbsp;&nbsp;
                    <strong>City:</strong> {userdata.city || "Unknown"}
                  </p>
                  <p>
                    <i className="bi bi-clock"></i>&nbsp;&nbsp;
                    <strong>Timezone:</strong> {userdata.timezone || "Unknown"}
                  </p>
                  <p>
                    <i className="bi bi-pc-display"></i>&nbsp;&nbsp;
                    <strong>ISP:</strong> {userdata.isp || "Unknown"}
                  </p>
                </>
              ) : (
                <p>Loading user details...</p>
              )}
            </div>
          </Card>
        </ul>
      </div>

      <div className="col">
        <div className="main-content">
          <h3>Staff Tasks</h3>
          {currentTasks.length > 0 ? (
            <>
              <table className="table table-hover">
                <thead className="thead-light">
                  <tr>
                    <th>#</th>
                    <th>Task Title&nbsp;<i className="bi bi-caret-down-fill"></i></th>
                    <th>Due Date&nbsp;<i className="bi bi-caret-down-fill"></i></th>
                    <th>Task Details&nbsp;<i className="bi bi-caret-down-fill"></i></th>
                    <th>State&nbsp;<i className="bi bi-caret-down-fill"></i></th>
                    <th>Actions&nbsp;<i className="bi bi-caret-down-fill"></i></th>
                  </tr>
                </thead>
                <tbody>
                  {currentTasks.map((task, index) => (
                    <tr key={task._id}>
                      <th>{(currentPage - 1) * tasksPerPage + index + 1}</th>
                      <td>{task.title}</td>
                      <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                      <td>
                        <button
                          className="btn p-0 text-primary"
                          onClick={() => handleTaskClick(task)}
                        >
                          View Details
                        </button>
                      </td>
                      <td>
                        <button
                          className={`${
                            task.completed ? "success" : "warning"
                          }`}
                          disabled
                        >
                          {task.completed ? "Completed" : "Incomplete"}
                        </button>
                      </td>
                      <td>
                        <button className="btn-edit bi bi-pencil-square"></button>
                        &nbsp;
                        <button className="btn-delete bi bi-x-circle"
                        onClick={() => confirmDeleteTask(task._id)}></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <nav>
                <ul className="pagination">
                  {[...Array(Math.ceil(userDetails.tasks.length / tasksPerPage))].map(
                    (_, i) => (
                      <li
                        key={i}
                        className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                      >
                        <Button
                          onClick={() => paginate(i + 1)}
                          className="page-link"
                        >
                          {i + 1}
                        </Button>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </>
          ) : (
            <p>No tasks available for this user.</p>
          )}
        </div>
      </div>

       {/* Modal Handling */}
      {selectedTask && (
        <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
          <ModalHeader toggle={() => setShowModal(false)}>
            Task Details
          </ModalHeader>
          <ModalBody>
            <p>
              <strong>Details:</strong> {selectedTask.details}
            </p>
          </ModalBody>
        </Modal>
      )}
      <Modal isOpen={showConfirmModal} toggle={() => setShowConfirmModal(false)}>
        <ModalHeader toggle={() => setShowConfirmModal(false)}>
          Confirm Deletion
        </ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete this task?</p>
          <div className="d-flex justify-content-end">
            <Button color="danger" onClick={handleDeleteConfirmation}>
              Delete
            </Button>
            <Button color="secondary" onClick={() => setShowConfirmModal(false)} className="ms-2">
              Cancel
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DeleteTasks;
