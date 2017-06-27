import { combineReducers } from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import feed from './feedReducer';
import feedLink from './RSSFeedReducer';
import initState from './initialState';
import numAjaxCallsInProgress from './ajaxStatusReducer';
import decodedFeed from './decodeUnicodeReducer';

//Root reducer declare function names here
// reducers should only have pure functions
const rootReducer = combineReducers({
  routing: routing,
  feed: feed,
  RSSFeedObj: feedLink,
  numAjaxCallsInProgress: numAjaxCallsInProgress,
  decodedFeed: decodedFeed
});

export default rootReducer;
