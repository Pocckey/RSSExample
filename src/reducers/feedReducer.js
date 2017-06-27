import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function feedReducer(state=initialState.feed, action){
  switch(action.type) {
    // [...state] is a spread operator, it passes the whole object in
    case types.CONST.CREATE_FEED:
      return [...state, Object.assign({}, action.feed)];
    case types.CONST.LOAD_FEED_SUCCESS:
      return action.feed;
    default:
      return state;
  }
}
