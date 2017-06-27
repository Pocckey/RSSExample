import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as feedActions from '../actions/feedActions';
import * as ajaxRSSFeedAction from '../actions/ajaxRSSFeedAction';

describe('Store test', () => {
  it('should handle create feeds', () =>{
    const store = createStore(rootReducer, initialState);
    const feed = [
      {
        title: 'test store'
      }
    ];
    // expected result
    const expected = [{
      title: 'test store'
    }];
    //act
    const action = feedActions.loadFeedSuccess(feed);
    store.dispatch(action);
    //assert
    const actual = store.getState().feed;
    expect(actual).toEqual(expected);
  });

  it('should feed from ajax call from ajaxRSSFeedAction', () =>{
    // const store = createStore(rootReducer, initialState);
    // const RSSFeed = [];
    // const action = ajaxRSSFeedAction.loadRSSFeedXML();
    // store.dispatch(action.getActions());
    // const actual = store.getState();
    // console.log(actual);
  });
});
