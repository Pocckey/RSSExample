import * as types from './actionTypes';

export function beginAjaxCall(){
  return {type: types.CONST.BEGIN_AJAX_CALL};
}

export function ajaxCallError(){
  return {type: types.CONST.AJAX_CALL_ERROR};
}
