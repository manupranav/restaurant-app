import React, { useEffect, useState } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Reviews from "./Reviews";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantsList } from "../actions/homeAction";

function RestaurantView() {
  // const [restaurants, setRestaurants] = useState([]);
  const params = useParams();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const fetchData = async () => {
  //   const res = await fetch("/restaurants.json");
  //   res.json().then((data) => {
  //     setRestaurants(data.restaurants);
  //   });
  // };

  const dispatch = useDispatch();
  useEffect(() => {
    // fetchData();
    dispatch(RestaurantsList());
  }, []);
  const { restaurants } = useSelector((state) => state.restaurantReducer);
  const restaurant = restaurants.find((item) => item.id == params.id);
  console.log(restaurants);
  return (
    <div>
      {restaurant ? (
        <Row className="p-5">
          <Col md={3}>
            <Image
              className="rounded border p-2"
              src={restaurant.photograph}
              alt="rest-pic"
              fluid
            ></Image>
          </Col>
          <Col md={8}>
            <ListGroup>
              <ListGroup.Item>
                <h2>{restaurant.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>Cusine: {restaurant.cuisine_type}</ListGroup.Item>
              <ListGroup.Item>Place: {restaurant.neighborhood}</ListGroup.Item>

              <ListGroup.Item>Address: {restaurant.address}</ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <Button className="my-3" variant="dark" onClick={handleShow}>
                  Opening Hours
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Opening Hours</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        Monday: {restaurant.operating_hours.Monday}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Tuesday: {restaurant.operating_hours.Tuesday}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Wednesday: {restaurant.operating_hours.Wednesday}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Thursday: {restaurant.operating_hours.Thursday}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Friday: {restaurant.operating_hours.Friday}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Saturday: {restaurant.operating_hours.Saturday}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Sunday: {restaurant.operating_hours.Sunday}
                      </ListGroup.Item>
                    </ListGroup>
                  </Modal.Body>
                </Modal>
              </ListGroup.Item>
              <ListGroup.Item>
                <Reviews reviews={restaurant.reviews} />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ) : (
        "404 nothing to show here."
      )}
    </div>
  );
}

export default RestaurantView;
