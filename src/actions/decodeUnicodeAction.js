import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import he from 'he';

export function decodeUnicodeFeedSuccess(decodedFeed){
  console.log('return decodeUnicodeFeedSuccess');
  return {type: types.CONST.DECODE_UNICODE, decodedFeed: decodedFeed};
}

export function decodeUnicodeFeed(decodedFeed){
  return new Promise((resolve)=>{
      return resolve(decodedFeed);
  });
}

export function decodeUnicode(decodedFeed){
  return dispatch => {
    dispatch(beginAjaxCall());
    console.log('return decodeUnicodeFeed');
    return decodeUnicodeFeed(decodedFeed)
    .then((decodedFeed)=>{
      console.log('dispatch decodeUnicodeFeedSuccess');
      dispatch(decodeUnicodeFeedSuccess(decodedFeed));
    })
    .catch(err =>{
      dispatch(ajaxCallError(err));
      throw err;
    });
  };
}
