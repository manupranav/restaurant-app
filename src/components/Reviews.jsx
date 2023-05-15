import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

const Reviews = ({ reviews }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="my-3 "
      >
        View Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {reviews.map((item) => (
            <div>
              <h5>
                {item.name}{" "}
                <span>
                  <h6>{item.date}</h6>
                </span>{" "}
              </h5>
              <p>Rating: {item.rating}</p>
              <p>Comments: {item.comments}</p>
            </div>
          ))}
        </div>
      </Collapse>
    </>
  );
};

export default Reviews;
