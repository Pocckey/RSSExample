import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function decodeUnicodeReducer(state = initialState.decodedFeed, action){
  switch(action.type) {
    case types.CONST.DECODE_UNICODE:
      return action.decodedFeed;
    default:
      return state;
  }
}
