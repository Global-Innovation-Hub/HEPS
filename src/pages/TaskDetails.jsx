import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';

const TaskDetails = () => {
  const { id } = useParams();
  const taskDetails = [
    { id: 1, title: 'Task a 1', description: 'Description of Task 1', stages: ['Stage 1', 'Stage 2', 'Stage 3'] },
    { id: 2, title: 'Task d  2', description: 'Description of Task 2', stages: ['Stage A', 'Stage B', 'Stage C'] },
    { id: 3, title: 'Task  c3', description: 'Description of Task 3', stages: ['Step 1', 'Step 2', 'Step 3'] },
    { id: 4, title: 'Task  d4', description: 'Description of Task 4', stages: ['Item A', 'Item B', 'Item C'] },
    { id: 5, title: 'Task e5', description: 'Description of Task 5', stages: ['Step 1', 'Step 2', 'Step 3'] },
    { id: 6, title: 'Task f 6', description: 'Description of Task 6', stages: ['Item A', 'Item B', 'Item C'] },
    { id: 7, title: 'gTask g7', description: 'Description of Task 7', stages: ['Step 1', 'Step 2', 'Step 3'] },
  ].find((task) => task.id === parseInt(id));

  const [expand, setExpand] = useState(false);

  if (!taskDetails) {
    return <div>Task not found.</div>;
  }

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <Container fluid>
      <h2 className="text-center mb-4">Task Details</h2>
      <Row>
        <Col>
          <h3>{taskDetails.title}</h3>
          <p>Description: {taskDetails.description}</p>

          <Card className="mb-3" onClick={toggleExpand}>
            <Card.Body>
              <Card.Title  >Task Checklist</Card.Title>
             
              {expand && (
                <>
                  <Form.Check label="Checkbox 1" />
                  <Form.Check label="Checkbox 2" />
                  <Form.Check label="Checkbox 3" />
                  <Form.Check label="Checkbox 4" />
                  <Form.Check label="Checkbox 5" />
                  <Form.Check label="Checkbox 6" />
                  <Form.Check label="acknowledge" />
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col xs="auto">
          <Link to="/Stepperr">
            <Button variant="primary" style={{width:"200px"}}>Need Help</Button>
          </Link>
        </Col>
        <Col xs="auto">
          <Button variant="success"  style={{width:"200px"}}>Save</Button>
        </Col>
        <Col xs="auto">
          <Button variant="danger"  style={{width:"200px"}}>Cancel</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskDetails;
