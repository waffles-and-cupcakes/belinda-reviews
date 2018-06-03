import React from 'react';
import renderer from 'react-test-renderer';
import Review from '../review';
import reviews from '../../mockData';

test('Reviews renders', () => {
  const component = renderer.create(<Review key={0} review={reviews[0]} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
