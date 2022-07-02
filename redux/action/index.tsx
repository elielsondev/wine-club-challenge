import { useEffect } from 'react';
import { CALL_API } from './actionType';

export const dataApi = (payload: any) => (
  {
    type: CALL_API,
    payload,
  }
);
