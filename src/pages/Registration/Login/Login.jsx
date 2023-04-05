import React, { useContext, useState } from "react";
import { Authcontext } from "../../../contexts/AuthProvider/AuthProvider";
import Header from "../../../Shared/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";

const Login = () => {
  const { user, signInWithEmail } = useContext(Authcontext);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();
  // nice user experience after login .
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInWithEmail(email, password)
      .then((res) => {
        const user = res.user;
        console.log("user from login ", user);
        setInfo("login successful");
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };
  return (
    <>
      <Header></Header>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Registration form
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={submitForm}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="Enter email"
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          name="password"
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>

                      <Form.Text className="text-muted">
                        <h3 className="text-danger">{error}</h3>
                        {user?.uid && <h3 className="text-success">{info}</h3>}
                      </Form.Text>
                      <br />
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
