import { failure, success } from "../constants/restaurantConstant";

export const homeReducer = (state = { restaurants: [] }, action) => {
  console.log(action.type);
  switch (action.type) {
    case success:
      return {
        restaurants: action.payload,
      };
    case failure:
      return {
        restaurants: action.payload,
      };
    default:
      return state;
  }
};
