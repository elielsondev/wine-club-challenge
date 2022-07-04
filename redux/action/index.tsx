import { CALL_API, ADD_BAG } from './actionType';

export const dataApiAction = (payload: any) => (
  {
    type: CALL_API,
    payload,
  }
);

export const shoppingBagAction = (payload: any) => (
  {
    type: ADD_BAG,
    payload,
  }
)

// export const myApi = async () => {
//   const data = await fetch("https://wine-back-test.herokuapp.com/products?page=1&limit=9");
//   const res = await data.json();
//   return res;
// };
