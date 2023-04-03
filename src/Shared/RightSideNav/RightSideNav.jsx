import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaDiscord, FaFacebook, FaGithub, FaGoogle, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import BrancCarousel from '../BrancCarousel/BrancCarousel';
import { useContext } from "react";
import { Authcontext } from "../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import "../RightSideNav/RightSideNav.css";
const provider = new GoogleAuthProvider();
const RightSideNav = () => {
  const { googleSignIn } = useContext(Authcontext);

  const handleSignInWithGoogle = () => {
    googleSignIn(provider)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" header-container">
      <ButtonGroup vertical>
        <Button
          onClick={handleSignInWithGoogle}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us </h5>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaYoutube /> Youtube
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaDiscord /> Discord
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-2">
        <BrancCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;