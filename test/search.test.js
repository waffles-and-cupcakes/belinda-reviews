import React from 'react';
import {shallow} from 'enzyme';
import Search from '../client/components/search';
import renderer from 'react-test-renderer';
import reviews from '../client/mockData';
import expect from "expect";
// import jest from 'jest';
// jest.mock('react-dom');

test('Search renders', () => {
  const component = renderer.create(
    <Search reviews={reviews} filterReviews={() => jest.fn()}/>
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Search should search on pressing enter', () => {
  const spy = expect.spyOn(Search.prototype, "sampleMethod");
const wrapper = mount(<Search reviews={reviews} filterReviews={() => jest.fn()} />);
expect(spy).toNotHaveBeenCalled();
wrapper.find(".rev-search").simulate("click");
expect(spy).toHaveBeenCalled();
  // console.log(wrapper);
//   const spy = jest.spyOn(Search.prototype, 'handleChange');
//   const wrapper = mount(<Search reviews={reviews} filterReviews={() => jest.fn()}/>);
//   // console.log(spy);
// expect(spy).toNotHaveBeenCalled();

// // const input = wrapper.find('input').get(0);
// wrapper.find('input').simulate('focus');
// wrapper.find('input').simulate('keydown', { which: 'a' });
// wrapper.update();
//   // input.props.onKeyPress({key: 'Enter'});
//   expect(spy).toHaveBeenCalled();
  // expect(wrapper.state().isOpen).toBe(true);  
  
  //  console.log('input', input, 'wrapper', wrapper);



  // const wrapper = mount(<App />);
  // const spy = jest.spyOn(wrapper.instance(), 'handleAnchorClick');
  // wrapper.update();
  // wrapper.find('a').simulate('click');
  // expect(spy).toHaveBeenCalled();
});

// test('Search changes the styles when in focus', () => {
//   const component = renderer.create(
//     <Search reviews={reviews} filterReviews={() => (console.log('filtering reviews'))}/>
//   )
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // tree.props.handleChange();

//   // tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();  

//   // tree.props.
// });
