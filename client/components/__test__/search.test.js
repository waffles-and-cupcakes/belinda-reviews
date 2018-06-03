import React from 'react';
import expect from 'expect';
import renderer from 'react-test-renderer';
import Search from '../search';
import reviews from '../../mockData';

test('Search renders', () => {
  const component = renderer.create(<Search reviews={reviews} filterReviews={() => jest.fn()} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
