import expect from 'expect';
import feedReducer from './feedReducer';
import * as actions from '../actions/feedActions';

describe('Feed Redcuer', () =>{
  it('should load Feed and pass Load_Feed_SUCCESS', () =>{
    const initialState = [
      {title: 'A'}
    ];
    const newFeed = {title: 'C'};
    const action = actions.loadFeedSuccess(newFeed);
    
    //act
    const newState = feedReducer(initialState, action);

    // assert
    expect(newState.title).toEqual('C');
  });
});
