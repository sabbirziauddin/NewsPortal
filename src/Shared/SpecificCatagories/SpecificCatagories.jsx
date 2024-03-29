import React from 'react';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const SpecificCatagories = ({news}) => {
    console.log(news);
    const { title, details, author, _id, rating, total_view, image_url } = news;
    return (
      <Card className="mb-2">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image
              src={author?.img}
              style={{ height: "60px" }}
              roundedCircle
            ></Image>
            <div className="ms-4">
              <p className="mb-0"> {author?.name}</p>
              <p>{author?.published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-2"></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 200) +"..."}{" "}
                <Link to={`/news/${_id}`}>read more</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
          <div>
            <FaStar className='text-warning'></FaStar>
            <span className="ms-2">{rating?.number}</span>
          </div>
          <div>
            <FaEye></FaEye>
            <span className="ms-2">{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    );
};

export default SpecificCatagories;