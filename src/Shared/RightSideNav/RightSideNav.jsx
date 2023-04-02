import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaDiscord, FaFacebook, FaGithub, FaGoogle, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import BrancCarousel from '../BrancCarousel/BrancCarousel';

//"Facebook", "youtube", "Twitter", "whatsapp", "Discord";
const RightSideNav = () => {
    
    return (
      <div>
        <ButtonGroup vertical>
          <Button className="mb-2" variant="outline-primary">
            <FaGoogle></FaGoogle> Login with Google
          </Button>
          <Button variant="outline-dark">
            <FaGithub /> Login with Github
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