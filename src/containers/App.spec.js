// Must have at least one test file in this directory or Mocha will throw an error.
import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import App from './App';

// enzyme helper library to test in memory dom
// doc https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md

describe('<App />', () => {
  it('should have a ul of dropdown-menu'), () => {
    const wrapper = shallow(<App />);
    const actual = wrapper.find('ul').prop('className');
    const expected = 'dropdown-menu';

    expect(actual).toEqual(expected);
  };

  it('Have Links to different paths', () =>{

  });
});
