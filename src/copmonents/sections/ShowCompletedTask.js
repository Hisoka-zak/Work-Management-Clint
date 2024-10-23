import React, { useState } from 'react';
import { Card, CardBody, CardText, Button, Col, Row } from 'reactstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons

const ShowCompletedTask = () => {
  const tasks = [
    { title: 'System Update', dueDate: '2024-12-20', details: 'Update all system drivers and software to the latest versions.' },
    { title: 'Security Patch', dueDate: '2024-12-25', details: 'Install security patches on all critical systems to mitigate vulnerabilities.' },
    { title: 'Backup Verification', dueDate: '2025-01-01', details: 'Verify that all backup procedures are functioning correctly and ensure data integrity.' },
    { title: 'Firewall Configuration', dueDate: '2025-01-05', details: 'Reconfigure the firewall to allow access to new services without compromising security.' }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 3;
  const totalPages = Math.ceil(tasks.length / tasksPerPage);


  // Calculate the index of the first task to be displayed on the current page
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


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
      <h1 className="mt-5 mb-4 text-center">Completed Tasks</h1>
      <div className="container">
        <Row className="mt-5">
          {currentTasks.map((task, index) => {
            return (
              <Col md="4" sm="6" xs="12" key={index}>
                <Card className="modern-card shadow-lg mb-4">
                  <div className="card-title-modern">{task.title}</div>
                  <CardBody>
                    <p className="date-modern"><del>Due Date: {task.dueDate}</del></p>
                    <CardText className="card-text-modern">{task.details}</CardText>
                    <div className="task-state d-flex align-items-center">
                      <span style={{fontSize:'19px', color:'green'}}> Completed  </span>
                      <i 
                        className='bi bi-check-square task-icon ms-2'
                        style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'green' }}
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

export default ShowCompletedTask;
