import React from 'react';
import {shallow} from 'enzyme';
import RatingsHeader from '../ratingsHeader';
import renderer from 'react-test-renderer';
import reviews from '../../mockData';


test('RatingsHeader renders', () => {
  const component = renderer.create(
    <RatingsHeader reviews={reviews} filterReviews={jest.fn()}/>
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});