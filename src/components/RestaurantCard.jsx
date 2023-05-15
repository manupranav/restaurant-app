import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  console.log(restaurant);
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      style={{ textDecoration: "None" }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "350px", borderRadius: "30px" }}
          className="p-3"
          variant="top"
          src={restaurant.photograph}
        />
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Text>
            {restaurant.cuisine_type} <br />
            {restaurant.address}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default RestaurantCard;
