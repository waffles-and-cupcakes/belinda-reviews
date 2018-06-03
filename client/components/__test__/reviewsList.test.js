import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from '../reviewsList';
import reviews from '../../mockData';

test('ReviewsList renders', () => {
  const component = renderer.create(<ReviewsList
    changePage={jest.fn()}
    activePage="1"
    reviews={reviews}
  />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
