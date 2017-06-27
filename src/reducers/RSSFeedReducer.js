import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function RSSFeedReducer(state = initialState.RSSFeedObj, action){
  switch(action.type){
    // case types.CONST.LOAD_FEEDLINK_SUCCESS:
    //   return action.feedLink;
    // case types.CONST.LOAD_FEED_SUCCESS:
    //   return action.feed;
    case types.CONST.LOAD_RSSFEED_SUCCESS:
      console.log('LOAD_RSSFEED_SUCCESS');
      return action.RSSFeedObj;
      // return [Object.assign({}, action.RSSFeedObj)];
      // return state.push(action.RSSFeedObj);
    default:
      return state;
  }
}
