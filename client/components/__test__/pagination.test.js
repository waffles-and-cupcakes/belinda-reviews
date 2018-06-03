import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../pagination';
import reviews from '../../mockData';

test('Pagination renders', () => {
  const component = renderer.create(<Pagination
    numPages={Math.ceil(reviews.length / 7)}
    changePage={jest.fn()}
    activePage="1"
  />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Pagination changes page on handlePageClick', () => {
  const component = renderer.create(<Pagination
    numPages={Math.ceil(reviews.length / 7)}
    changePage={jest.fn()}
    activePage="1"
  />);
  const tree = component.toJSON();

  tree.children[0].props.onClick({ target: { textContent: '3' } });

  expect(tree).toMatchSnapshot();
});

