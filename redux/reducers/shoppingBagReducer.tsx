import { HYDRATE } from "next-redux-wrapper";
import { ADD_BAG } from "../action/actionType";

const initialState: any = [];

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return [
        ...state,
        {
          id: Math.random(),
          product: action.payload,
        }
      ]

    case ADD_BAG:
      return [
        ...state,
        {
          id: Math.random(),
          product: action.payload,
        }
      ]

    default:
      return state;
  };
};

export default reducer;