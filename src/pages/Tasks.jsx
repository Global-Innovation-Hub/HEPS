import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Tasks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCardMouseEnter = (taskId) => {
    setHoveredCard(taskId);
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
  };

  const filteredTasks = [
    { id: 1, title: 'Task a 1', checklist: ['Item 1', 'Item 2', 'Item 3', 'acknowledged'] },
    { id: 2, title: 'Task d  2', checklist: ['Item A', 'Item B', 'Item C', 'acknowledged'] },
    { id: 3, title: 'Task  c3', checklist: ['Step 1', 'Step 2', 'Step 3', 'acknowledged'] },
    { id: 4, title: 'Task  d4', checklist: ['Item A', 'Item B', 'Item C', 'acknowledged'] },
    { id: 5, title: 'Task e5', checklist: ['Step 1', 'Step 2', 'Step 3', 'acknowledged'] },
    { id: 6, title: 'Task f 6', checklist: ['Item A', 'Item B', 'Item C', 'acknowledged'] },
    { id: 7, title: 'gTask g7', checklist: ['Step 1', 'Step 2', 'Step 3', 'acknowledged'] },
  ].filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container fluid>
      <div className="d-flex align-items-center flex-column mb-3">
        <h2 className="mb-0 mt-2 text-start" style={{ color: '#083c59' }}>
          Tasks
        </h2>
        <div className="mt-3" style={{ alignSelf: 'flex-start' }}>
          <Form.Control
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-100"
            style={{ minWidth: '595px', height: "42px", border: "1px solid " }}
          />
        </div>
      </div>
      <Row>
        {filteredTasks.map((task) => (
          <Col key={task.id} xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4">
            <Link to={`/tasks/${task.id}`} className="card-link" style={{ textDecoration: 'none' }}>
              <Card
                className={hoveredCard === task.id ? 'zoom-out-card' : ''}
                style={{
                  backgroundColor: hoveredCard === task.id ? '#f5f5f5' : '',
                  color: '',
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  transition: 'transform 0.3s',
                  transform: hoveredCard === task.id ? 'scale(0.95)' : 'scale(1)',
                }}
                onMouseEnter={() => handleCardMouseEnter(task.id)}
                onMouseLeave={handleCardMouseLeave}
              >
                <Card.Body>
                  <Card.Title className="text-start">{task.title}</Card.Title>
                  <Button className="mt-4" size="small" variant="outlined" style={{ fontWeight: "bold" }}>View Checklist</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Tasks;
