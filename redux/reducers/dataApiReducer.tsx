import { HYDRATE } from "next-redux-wrapper";
import { CALL_API } from "../action/actionType";

interface IinitialState {
  data: {
    page: number,
    totalPages: number,
    itemsPerPage: number,
    totalItems: number,
    items: [],
  },
}

const initialState: IinitialState = {
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
