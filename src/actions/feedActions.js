import * as types from '../actions/actionTypes';
import mockData from '../api/mockData';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

//action creators
export function feedActions(feed){
  console.log('feedActions');
  return { type: types.CONST.CREATE_FEED, feed: feed};
}

export function loadFeedSuccess(feed){
  console.log('loadFeedSuccess');
  return {type: types.CONST.LOAD_FEED_SUCCESS, feed: feed};
}

export function loadFeedLinkSuccess(feedLink){
  console.log('loadFeedLinkSuccess');
  return {type: types.CONST.LOAD_FEEDLINK_SUCCESS, feedLink: feedLink};
}

export function saveFeedLinkSuccess(feedLink){
  return {type: types.CONST.SAVE_FEEDLINK_SUCCESS, feedLink: feedLink};
}

// dispatch is the only way to change the state inside the store
// response data should have the same variable returned from the function, ex: "feed"
// all http calls, logics or action goes in here
// return functions in the dispatch return function must be a Promise
export function loadFeeds(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return mockData.getFeed()
      .then(RSSFeedObj => {
        dispatch(loadFeedSuccess(RSSFeedObj));
      })
      .catch(err =>{
        dispatch(ajaxCallError(err));
        throw(err);
      });
  };
}

export function loadRSSFeedLink(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return mockData.getFeedLink()
      .then(feedLink => {
        dispatch(loadFeedLinkSuccess(feedLink));
      })
      .catch(err =>{
        dispatch(ajaxCallError(err));
        throw(err);
      });
  };
}
