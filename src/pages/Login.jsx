import React, { useState } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import logo from '../midea/GHLUIH Final Logo-01.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        // Perform authentication logic here
        onLogin();
        navigate('/tasks');
    };

    return (
        <Container fluid>
            <Row className="justify-content-center align-items-stretch vh-100">
                <Col
                    lg={6}
                    className="d-none d-lg-block"
                    style={{
                        height: '100%',
                        overflow: 'hidden',
                        marginLeft: '-12px',
                        backgroundColor: '#083c59',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div className="animation"></div>
                </Col>
                <Col lg={6} style={{ padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={logo} style={{ objectFit: 'contain', height: '200px', marginLeft: '20px' }} alt="Logo" />
                    <h2>AI-HEPS</h2>
                    <h5 style={{ textAlign: 'center', margin: '10px 0' }}>"Empowering Precision: Eliminate Human Error with Confidence."</h5>
                    <h4>Sign in</h4>
                    <form onSubmit={handleLoginFormSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email/Mobile Number"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Form.Group className="mb-3" controlId="role">
                            <Form.Label>Role</Form.Label>
                            <Form.Select aria-label="Role" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="">Select Role</option>
                                <option value="neurologist">Neurologist</option>
                                <option value="nephrologist">Nephrologist</option>
                                <option value="nurse">Nurse</option>
                                {/* Add more options here */}
                            </Form.Select>
                        </Form.Group>

                        <Link to="/tasks"><Button type="submit" style={{ width: '100%', marginTop: '10px', outline: 'none', backgroundColor: '#083c59' }}>
                            <span style={{ color: 'white', textDecoration: 'none' }}>Login</span>
                        </Button></Link>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
