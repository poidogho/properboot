import { Dispatch } from 'redux';
import { axios, getServer } from '../../utils';
import { GET_HOMES, ERROR } from './types';
// import { Home } from '../reducers/types';

const server = getServer();

export const getHomes = () => async (dispatch: Dispatch) => {
  await axios
    .get(`${server}/homes`)
    .then((res) => {
      dispatch({
        type: GET_HOMES,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};
