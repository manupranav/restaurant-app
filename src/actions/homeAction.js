import axios from "axios";
import { failure, success } from "../constants/restaurantConstant";

export const RestaurantsList = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/restaurants.json");
    console.log(data.restaurants);
    dispatch({
      payload: data.restaurants,
      type: success,
    });
  } catch (error) {
    dispatch({
      payload: error,
      type: failure,
    });
  }
};
