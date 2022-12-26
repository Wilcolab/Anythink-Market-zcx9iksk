import { GET_CLICK } from "../constants/actionTypes";

const reducer = (state = {clicked: false}, action) => {
  switch (action.type) {
    case GET_CLICK:
      return {
        ...state,
        clicked: true
      };
    default:
      return {
        ...state,
        clicked: false
      };
  }
};

export default reducer;
