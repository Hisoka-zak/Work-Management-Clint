import React, { useState } from 'react';
import { Card, CardBody, CardText, Button, Col, Row } from 'reactstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons

const ShowTasks = () => {
  const tasks = [
    { title: 'Server Upgrade', dueDate: '2024-11-01', details: 'Upgrade all servers to the latest security patch and update firewall rules.' },
    { title: 'Database Backup', dueDate: '2024-11-05', details: 'Create a full backup of the company’s databases and store it in the cloud.' },
    { title: 'System Monitoring', dueDate: '2024-11-10', details: 'Implement 24/7 system monitoring for critical infrastructure services.' },
    { title: 'Cloud Migration', dueDate: '2024-11-15', details: 'Migrate legacy applications to cloud-based infrastructure.' },
    { title: 'Network Configuration', dueDate: '2024-11-20', details: 'Configure network devices and secure VPN access for remote employees.' },
    { title: 'API Development', dueDate: '2024-11-25', details: 'Develop new RESTful APIs to integrate third-party services with internal systems.' },
    { title: 'Penetration Testing', dueDate: '2024-12-01', details: 'Conduct a full security audit and penetration test on all public-facing applications.' },
    { title: 'Software Deployment', dueDate: '2024-12-05', details: 'Deploy the latest version of the in-house ERP system.' },
    { title: 'Data Encryption', dueDate: '2024-12-10', details: 'Implement encryption protocols for sensitive data storage and transmission.' },
    { title: 'User Access Audit', dueDate: '2024-12-15', details: 'Perform an audit of user access privileges and disable inactive accounts.' },
    { title: 'System Update', dueDate: '2024-12-20', details: 'Update all system drivers and software to the latest versions.' },
    { title: 'Security Patch', dueDate: '2024-12-25', details: 'Install security patches on all critical systems to mitigate vulnerabilities.' },
    { title: 'Backup Verification', dueDate: '2025-01-01', details: 'Verify that all backup procedures are functioning correctly and ensure data integrity.' },
    { title: 'Firewall Configuration', dueDate: '2025-01-05', details: 'Reconfigure the firewall to allow access to new services without compromising security.' }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 3;
  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  // New state to track which tasks are done
  const [doneTasks, setDoneTasks] = useState(Array(tasks.length).fill(false));

  // Calculate the index of the first task to be displayed on the current page
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...doneTasks];
    updatedTasks[index] = !updatedTasks[index]; // Toggle the done state
    setDoneTasks(updatedTasks);
  };

  // Helper to determine range of pagination buttons to show
  const paginationRange = () => {
    const range = [];
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(start + 2, totalPages);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };

  return (
    <section className="services">
      <h1 className="mt-5 mb-4 text-center">To Do Tasks</h1>
      <div className="container">
        <Row className="mt-5">
          {currentTasks.map((task, index) => {
            const globalIndex = indexOfFirstTask + index; // Track the index for the doneTasks array
            return (
              <Col md="4" sm="6" xs="12" key={index}>
                <Card className="modern-card shadow-lg mb-4">
                  <div className="card-title-modern">{task.title}</div>
                  <CardBody>
                    <p className="date-modern"><span>Due Date:</span> {task.dueDate}</p>
                    <CardText className="card-text-modern">{task.details}</CardText>
                    <div className="task-state d-flex align-items-center">
                      <span style={{fontSize:'19px', color:'#2c5f6e'}}>Mark as Done  </span>
                      <i 
                        className={`bi ${doneTasks[globalIndex] ? 'bi-check-square' : 'bi-square'} task-icon ms-2`}
                        onClick={() => toggleTaskCompletion(globalIndex)}
                        style={{ cursor: 'pointer', fontSize: '1.5rem', color: doneTasks[globalIndex] ? 'green' : 'gray' }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row className="mt-4 justify-content-center">
          {/* Pagination Controls */}
          <div className="pagination">
            <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            <i class="bi bi-caret-left-fill"></i>
            </Button>
            {paginationRange().map((pageNumber) => (
              <Button 
                key={pageNumber} 
                className={`mx-1 ${currentPage === pageNumber ? 'active' : ''}`} 
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </Button>
            ))}
            <Button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
            <i class="bi bi-caret-right-fill"></i>
            </Button>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default ShowTasks;
