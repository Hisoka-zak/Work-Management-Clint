import React, { useState } from "react";
import "../css/DeleteTasks.css";
import { Card, ModalHeader, ModalBody, Button, Modal } from "reactstrap";
import moha from "../assets/moha.avif";

const DeleteTasks = () => {
  // Demo tasks
  const tasks = [
    {
      title: "Server Upgrade",
      dueDate: "2024-11-01",
      details:
        "Upgrade all servers to the latest security patch and update firewall rules.",
      state: "incomplete",
    },
    {
      title: "Database Backup",
      dueDate: "2024-11-05",
      details:
        "Create a full backup of the company’s databases and store it in the cloud.",
      state: "complete",
    },
    {
      title: "System Monitoring",
      dueDate: "2024-11-10",
      details:
        "Implement 24/7 system monitoring for critical infrastructure services.",
      state: "incomplete",
    },
    {
      title: "Cloud Migration",
      dueDate: "2024-11-15",
      details: "Migrate legacy applications to cloud-based infrastructure.",
      state: "incomplete",
    },
    {
      title: "Network Configuration",
      dueDate: "2024-11-20",
      details:
        "Configure network devices and secure VPN access for remote employees.",
      state: "complete",
    },
    {
      title: "API Development",
      dueDate: "2024-11-25",
      details:
        "Develop new RESTful APIs to integrate third-party services with internal systems.",
      state: "incomplete",
    },
    {
      title: "Penetration Testing",
      dueDate: "2024-12-01",
      details:
        "Conduct a full security audit and penetration test on all public-facing applications.",
      state: "incomplete",
    },
    {
      title: "Software Deployment",
      dueDate: "2024-12-05",
      details: "Deploy the latest version of the in-house ERP system.",
      state: "complete",
    },
    {
      title: "Data Encryption",
      dueDate: "2024-12-10",
      details:
        "Implement encryption protocols for sensitive data storage and transmission.",
      state: "incomplete",
    },
    {
      title: "Server Upgrade",
      dueDate: "2024-11-01",
      details:
        "Upgrade all servers to the latest security patch and update firewall rules.",
      state: "incomplete",
    },
    {
      title: "Database Backup",
      dueDate: "2024-11-05",
      details:
        "Create a full backup of the company’s databases and store it in the cloud.",
      state: "complete",
    },
    {
      title: "System Monitoring",
      dueDate: "2024-11-10",
      details:
        "Implement 24/7 system monitoring for critical infrastructure services.",
      state: "incomplete",
    },
    {
      title: "Cloud Migration",
      dueDate: "2024-11-15",
      details: "Migrate legacy applications to cloud-based infrastructure.",
      state: "incomplete",
    },
    {
      title: "Network Configuration",
      dueDate: "2024-11-20",
      details:
        "Configure network devices and secure VPN access for remote employees.",
      state: "complete",
    },
    {
      title: "API Development",
      dueDate: "2024-11-25",
      details:
        "Develop new RESTful APIs to integrate third-party services with internal systems.",
      state: "incomplete",
    },
    {
      title: "Penetration Testing",
      dueDate: "2024-12-01",
      details:
        "Conduct a full security audit and penetration test on all public-facing applications.",
      state: "incomplete",
    },
    {
      title: "Software Deployment",
      dueDate: "2024-12-05",
      details: "Deploy the latest version of the in-house ERP system.",
      state: "complete",
    },
    {
      title: "Data Encryption",
      dueDate: "2024-12-10",
      details:
        "Implement encryption protocols for sensitive data storage and transmission.",
      state: "incomplete",
    },
    {
      title: "Server Upgrade",
      dueDate: "2024-11-01",
      details:
        "Upgrade all servers to the latest security patch and update firewall rules.",
      state: "incomplete",
    },
    {
      title: "Database Backup",
      dueDate: "2024-11-05",
      details:
        "Create a full backup of the company’s databases and store it in the cloud.",
      state: "complete",
    },
    {
      title: "System Monitoring",
      dueDate: "2024-11-10",
      details:
        "Implement 24/7 system monitoring for critical infrastructure services.",
      state: "incomplete",
    },
    {
      title: "Cloud Migration",
      dueDate: "2024-11-15",
      details: "Migrate legacy applications to cloud-based infrastructure.",
      state: "incomplete",
    },
    {
      title: "Network Configuration",
      dueDate: "2024-11-20",
      details:
        "Configure network devices and secure VPN access for remote employees.",
      state: "complete",
    },
    {
      title: "API Development",
      dueDate: "2024-11-25",
      details:
        "Develop new RESTful APIs to integrate third-party services with internal systems.",
      state: "incomplete",
    },
    {
      title: "Penetration Testing",
      dueDate: "2024-12-01",
      details:
        "Conduct a full security audit and penetration test on all public-facing applications.",
      state: "incomplete",
    },
    {
      title: "Software Deployment",
      dueDate: "2024-12-05",
      details: "Deploy the latest version of the in-house ERP system.",
      state: "complete",
    },
    {
      title: "Data Encryption",
      dueDate: "2024-12-10",
      details:
        "Implement encryption protocols for sensitive data storage and transmission.",
      state: "incomplete",
    },
    {
      title: "User Access Audit",
      dueDate: "2024-12-15",
      details:
        "Perform an audit of user access privileges and disable inactive accounts.",
      state: "incomplete",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;

  // Calculate pagination indexes
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Create pagination buttons
  const totalPages = Math.ceil(tasks.length / tasksPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const [showStaffInfo, setShowStaffInfo] = useState(false); // State to handle displaying staff info

  const handleStaffInfoClick = () => {
    setShowStaffInfo(!showStaffInfo); // Toggle staff information display
  };

  // State to handle displaying detailed task description in modal
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };
  return (
    <div className="admin-panel">
      <div className="sidebar">
        <div className="profile text-center mb-4">
          <img src={moha} alt="Profile" className="rounded-circle mb-2" />
          <p className="user-role">Staff</p>
          <p className="">Mr.Mohammed</p>

        </div>
        <ul className="menu">
          <li className="menu-item bi bi-list-task">&nbsp;Add Task</li>
          <li
            className="menu-item bi bi-person-lines-fill"
            onClick={handleStaffInfoClick}
          >
            &nbsp; Staff Information
          </li>
          <Card>
            {/* Staff Information Section */}
            {showStaffInfo && (
              <div className="staff-info mt-4 p-3 text-dark border ">
                <p>
                  <strong>Country:</strong> OMAN (OM)
                </p>
                <p>
                  <strong>City:</strong> Muscat
                </p>
                <p>
                  <strong>Timezone:</strong> Abu Dhabi / Muscat
                </p>
                <p>
                  <strong>ISP:</strong> Datacamp Limited
                </p>
              </div>
            )}
          </Card>
        </ul>
        <ul className="menu fixed-bottom p-4">
        <li className="menu-item bi bi-box-arrow-right">&nbsp;Sign Out</li>
      </ul>
      </div>

      <div className="col">
        <div className="main-content">
          <div className="navbar-custom mb-4">
            <div className="panel-title"></div>
          </div>
          <div className="staff-table">
            <h3>Staff Tasks</h3>
            <table className="table table-hover">
              <thead className="thead-light">
                <tr>
                  <th>#</th>
                  <th>Task Title&nbsp;<i class="bi bi-caret-down-fill"></i></th>
                  <th>Due Date&nbsp;<i class="bi bi-caret-down-fill"></i></th>
                  <th>Task Details&nbsp;<i class="bi bi-caret-down-fill"></i></th>
                  <th>State&nbsp;<i class="bi bi-caret-down-fill"></i></th>
                  <th>Actions&nbsp;<i class="bi bi-caret-down-fill"></i></th>
                </tr>
              </thead>
              <tbody>
                {currentTasks.map((task, index) => (
                  <tr key={index}>
                    <th>{indexOfFirstTask + index + 1}</th>
                    <td>{task.title}</td>
                    <td>{task.dueDate}</td>
                    <td>
                      <button
                        className="btn p-0 " style={{color:'blue'}}
                        onClick={() => handleTaskClick(task)}
                      >
                        View Details
                      </button>
                    </td>
                    <td>
                      <button
                        className={`${
                          task.state === "incomplete" ? "warning" : "success"
                        } disabled`}
                        disabled
                      >&nbsp;
                        {task.state}
                    </button>
                    </td>
                    <td>
                      <button className="btn-edit bi-pencil-square"></button>
                      &nbsp;
                      <button className="btn-delete bi-x-circle"></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination controls */}
            <nav>
              <ul className="pagination">
                {/* Previous Button */}
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <Button
                    onClick={() => paginate(currentPage - 1)}
                    className="page-link"
                  >
                    <i class="bi bi-caret-left-fill"></i>
                  </Button>
                </li>

                {/* Display 3 page numbers (prev, current, next) */}
                {pageNumbers
                  .slice(
                    Math.max(0, currentPage - 2),
                    Math.min(pageNumbers.length, currentPage + 1)
                  )
                  .map((number) => (
                    <li
                      key={number}
                      className={`page-item ${
                        number === currentPage ? "active" : ""
                      }`}
                    >
                      <Button
                        onClick={() => paginate(number)}
                        className="page-link"
                      >
                        {number}
                      </Button>
                    </li>
                  ))}

                {/* Next Button */}
                <li
                  className={`page-item ${
                    currentPage === pageNumbers.length ? "disabled" : ""
                  }`}
                >
                  <Button
                    onClick={() => paginate(currentPage + 1)}
                    className="page-link"
                  >
                    <i class="bi bi-caret-right-fill"></i>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Modal for displaying task details */}
      {selectedTask && (
        <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
          <ModalHeader toggle={() => setShowModal(false)}>
            Task Details
          </ModalHeader>
          <ModalBody>
            <p>
              <strong>Details:</strong> {selectedTask.details}
            </p>
            <Button color="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
};

export default DeleteTasks;
