import React from 'react';
import renderer from 'react-test-renderer';
import RatingsHeader from '../ratingsHeader';
import reviews from '../../mockData';

test('RatingsHeader renders', () => {
  const component = renderer.create(<RatingsHeader
    reviews={reviews}
    filterReviews={jest.fn()}
  />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
