import React from 'react';
import {shallow} from 'enzyme';
import FeedPage from './FeedPage';
import expect from 'expect';

//UI testing
describe('<FeedPage />', () => {
  it('container name class', () => {
    const wrapper = shallow(<FeedPage />);
    const actual = wrapper.find('div').prop('className');
    const expected = 'FeedPageContainer';

    expect(actual).toEqual(expected);
  });
  it('should have save when click on onClickSave action', () =>{

  });

  it('Should have 20 feed max', () =>{
  });

});
