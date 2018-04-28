import React from 'react';
import {shallow} from 'enzyme';
import Review from '../review';
import renderer from 'react-test-renderer';
import reviews from '../../mockData';


test('Reviews renders', () => {
  const component = renderer.create(
    <Review key={0} review={reviews[0]}/>
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});