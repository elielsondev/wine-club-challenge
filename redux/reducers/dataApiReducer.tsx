import { HYDRATE } from "next-redux-wrapper";
import { CALL_API } from "../action/actionType";

const initialState = {
  data: {
    page: 0,
    totalPages: 0,
    itemsPerPage: 0,
    totalItems: 0,
    items: [],
  },
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        data: {
          ...action.payload,
        }
      }
    case CALL_API:
      return {
        ...state,
        data: {
          ...action.payload,
        }
      }
    default:
      return state;
  }
}

export default reducer;
