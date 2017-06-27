import React from 'react';
import {shallow} from 'enzyme';
import HomePage from './HomePage';
import expect from 'expect';

describe('<HomePage />', () =>{
  it('simple title', () =>{
    const wrapper = shallow(<HomePage />);
    const actual = wrapper.find('div').prop('className');
    const expected = 'homePage';
    expect(actual).toEqual(expected);
  });
});
