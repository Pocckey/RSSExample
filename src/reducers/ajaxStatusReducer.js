import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function actionTypeEndsInSuccess(type){
  return type.substring(type.length - 8) == 'SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action){
  if (action.type == types.CONST.BEGIN_AJAX_CALL){
    return state + 1;
  } else if(action.type == types.CONST.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)){
    return state - 1;
  }
  return state;
}
