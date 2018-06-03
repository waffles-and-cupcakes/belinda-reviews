import React from 'react';
import {shallow} from 'enzyme';
import ReviewsList from '../reviewsList';
import renderer from 'react-test-renderer';
import reviews from '../../mockData';


test('ReviewsList renders', () => {
  const component = renderer.create(
    <ReviewsList changePage={jest.fn()} activePage={'1'} reviews={reviews}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});