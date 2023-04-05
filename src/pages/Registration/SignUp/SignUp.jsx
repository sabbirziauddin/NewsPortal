import React, { useContext, useState } from "react";
import { Authcontext } from "../../../contexts/AuthProvider/AuthProvider";
import Header from "../../../Shared/Header/Header";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { user, createUser, updateUserProfile } = useContext(Authcontext);

  const [errorText, setErrorText] = useState("");
  const [info, setInfo] = useState("");
  const [diabaleBtn, setDisableBtn] = useState(false);
  //submit registration page
  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    console.log(email, password, name, photoUrl);
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log("user from create user with email password", user);
        form.reset();
        handleUpdateProfile(name, photoUrl);
        setInfo("Register successfully !");
      })
      .catch((err) => {
        setErrorText(err.message);
      });
  };
  //update profile
  const handleUpdateProfile = (name, photoUrL) => {
    const profile = {
      displayName: name,
      photoURL: photoUrL,
    };
    updateUserProfile(profile);
  };

  //disable the registration button
  const handleDisableBtnChk = (e) => {
    // console.log(e.target.checked);
    setDisableBtn(e.target.checked);
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
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          placeholder="Enter name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>photo url </Form.Label>
                        <Form.Control
                          name="photoUrl"
                          type="text"
                          placeholder="Enter photo url"
                        />
                      </Form.Group>
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
                      <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check
                          onClick={handleDisableBtnChk}
                          type="checkbox"
                          label={
                            <>
                              Accept{" "}
                              <Link to="/termscons">
                                Terms <span>&</span> condition
                              </Link>
                            </>
                          }
                        />
                      </Form.Group>

                      <Button
                        variant="primary"
                        type="submit"
                        disabled={!diabaleBtn}
                      >
                        Submit
                      </Button>
                      <p>
                        <span>{errorText}</span>
                      </p>
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

export default SignUp;
