import { GET_HOMES } from '../actions/types';
import { HomeState } from './types';

const initialState: HomeState = {
  home: null,
  homes: []
};

export function HomeReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_HOMES:
      return {
        ...state,
        homes: action.payload
      };
    default:
      return state;
  }
}
