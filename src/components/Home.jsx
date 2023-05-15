import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { RestaurantsList } from "../actions/homeAction";
import RestaurantCard from "./RestaurantCard";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // const [restaurants, setRestaurants] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    //fetchData();
    dispatch(RestaurantsList());
  }, []);

  // const fetchData = async () => {
  //   const result = await fetch("/restaurants.json");
  //   result.json().then((data) => {
  //     setRestaurants(data.restaurants);
  //   });
  // };
  const { restaurants } = useSelector((state) => state.restaurantReducer);

  return (
    <Row>
      {restaurants.map((item) => (
        <Col className="p-5" sm={6} md={4} lg={3}>
          <RestaurantCard restaurant={item} />
        </Col>
      ))}
    </Row>
  );
};

export default Home;
