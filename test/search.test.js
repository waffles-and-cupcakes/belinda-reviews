import React from 'react';
import {shallow} from 'enzyme';
import Search from '../client/components/search';
import renderer from 'react-test-renderer';
import reviews from '../client/mockData';


test('Search renders', () => {
  const component = renderer.create(
    <Search reviews={reviews} filterReviews={() => jest.fn()}/>
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
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
