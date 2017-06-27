import * as types from '../actions/actionTypes';
import GetRSSFeedCall from '../api/GetRSSFeedCall';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

//action creators
export function getFeedFromRSSFeed(RSSFeedObj){
  return { type: types.CONST.LOAD_RSSFEED_SUCCESS, RSSFeedObj: RSSFeedObj };
}

export function linkStringReplace(link){
  //rss to json api call requires string replacement
  let newLink = encodeURIComponent(link);
  return newLink;
}

export function joinLink(rsstoJSonLink, newLink){
   return rsstoJSonLink + newLink;
}

export function loadRSSFeed(){
  let link = 'https://news.google.com/news?cf=all&hl=en&pz=1&ned=ca&topic=tech&output=rss';
  let newLink = joinLink('https://api.rss2json.com/v1/api.json?rss_url=', linkStringReplace(link));
  return dispatch => {
    dispatch(beginAjaxCall());
    return GetRSSFeedCall.getRSSFeedJSON(newLink)
    .then(RSSFeedObj =>{
      dispatch(getFeedFromRSSFeed(RSSFeedObj));
    })
    .catch(err =>{
      dispatch(ajaxCallError(err));
      throw err;
    });
  };
}

// export function httpRequest(){
//   return dispatch => {
//     return GetRSSFeedCall.httpRequest('https://itunes.apple.com/hk/rss/topalbums/limit=10/json')
//       .then(RSSFeedObj => {
//         dispatch(getFeedFromRSSFeed(RSSFeedObj));
//       })
//       .catch(err =>{
//         throw(err);
//       });
//   };
// }
