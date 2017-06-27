import expect from 'expect';
import RSSFeedReducer from './RSSFeedReducer';
import * as actions from '../actions/feedActions';
import * as ajaxActions from '../actions/ajaxRSSFeedAction';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../actions/actionTypes';
import initialState from './initialState';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('RSSFeed Reducer test', () =>{
  it('should load RSS feed link', () => {
    // const initState = initialState.RSSFeedObj;
    // const newFeedLink =
    //   {
    //     topic: 'w',
    //     source: 'news.google.com',
    //     link: 'https://news.google.com/news?cf=all&hl=en&pz=1&ned=ca&topic=w&output=rss'
    //   };
    // const action = actions.loadFeedLinkSuccess(newFeedLink);
    //
    // //act
    // const newState = RSSFeedReducer(initState, action);
    // expect(newState.topic).toEqual('w');
  });
  it('should load multiple feed link', () =>{
    // const initialState = {};
    // const newFeedLinkArr =[
    //   {
    //     topic: 'w',
    //     source: 'news.google.com',
    //     link: 'https://news.google.com/news?cf=all&hl=en&pz=1&ned=ca&topic=w&output=rss'
    //   },
    //   {
    //     topic: 'tech',
    //     source: 'news.google.com',
    //     link: 'https://news.google.com/news?cf=all&hl=en&pz=1&ned=ca&topic=tech&output=rss'
    //   }
    // ];
    // const action = actions.loadFeedLinkSuccess(newFeedLinkArr);
    // const newState = RSSFeedReducer(initialState, action);
    // expect(newState[0].topic).toEqual('w');
    // expect(newState[1].topic).toEqual('tech');
  });

  // it('should fetch xml from RSSFeed Link', (done) =>{
  //   const feed = [];
  //   const expectedActions = [
  //     {type: types.CONST.LOAD_RSSFEED_SUCCESS, body: {RSSFeedObj: 'test http request'}}
  //   ];
  //   const store = mockStore({RSSFeedObj: []}, expectedActions);
  //   store.dispatch(ajaxActions.loadRSSFeed()).then(()=>{
  //     const action = store.getActions();
  //     expect(action[0].type).toEqual(types.CONST.LOAD_RSSFEED_SUCCESS);
  //     done();
  //   });
  // });
});
