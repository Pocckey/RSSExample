import expect from 'expect';
import {shallow, mount} from 'enzyme';
import React from 'react';
import FeedListRows from './FeedListRows';

// UI testing
function setup(){
  let props = {
    key: 123,
    feed:{
      id: 123,
      title: 'testing',
      description: 'description'
    }
  };
  return shallow(<FeedListRows {...props}/>);
}

describe('FeedListRows test', () =>{
  it('renders tr', () =>{
    const wrapper = setup();
    expect(wrapper.find('tbody').length).toBe(1);
  });

  it('props value', () =>{
    const wrapper = setup();
    expect(wrapper.find('tr .feedTitle').length).toBe(1);
  });
});
