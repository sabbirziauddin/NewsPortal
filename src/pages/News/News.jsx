import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

const News = () => {
  const selectedNews = useLoaderData();
  console.log(selectedNews);
  const { image_url, title, author, rating, details, category_id } =
    selectedNews;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-bold">
            Author:
            <span style={{ fontSize: "10px" }}>{author?.name}</span>
          </p>
          <p className="fw-bold">
            Published Date:{" "}
            <span style={{ fontSize: "10px" }}>{author?.published_date}</span>
          </p>
          <div className="d-flex align-items-center">
            <FaStar
              style={{ fontSize: "14px" }}
              className="text-warning me-1"
            ></FaStar>
            <span style={{ fontSize: "10px" }}>{rating?.number}</span>
          </div>
        </div>
        <Card.Text className="text-wrap fs-6">{details}</Card.Text>
        <Link to={`/catagory/${category_id}`}>Go to Same news catagory</Link>
      </Card.Body>
    </Card>
  );
};

export default News;