import React from 'react';
import {mount, shallow} from 'enzyme';
import Pagination from '../client/components/pagination';
import renderer from 'react-test-renderer';
import reviews from '../client/mockData';


test('Pagination renders', () => {
  const component = renderer.create(
    <Pagination numPages={Math.ceil(reviews.length / 7)} changePage={jest.fn()} activePage={'1'}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Pagination changes page on handlePageClick', () => {
  const component = renderer.create(
      <Pagination numPages={Math.ceil(reviews.length / 7)} changePage={jest.fn()} activePage={'1'} />
  );
  let tree = component.toJSON();
  // console.log(tree);

  tree.children[0].props.onClick({target: {textContent: '3'}});

  expect(tree).toMatchSnapshot();
});

// test('Pagination should respond to change event and change the state of the Login Component', () => {
//   const wrapper = mount(<Pagination numPages={Math.ceil(reviews.length / 7)} changePage={jest.fn()} activePage={'1'} />)
//   console.log(wrapper);
//   // expect(checkbox.text()).toEqual('On');

//   wrapper.setState({ activePage: '2' });

//   expect(wrapper.find('.pagination')).to.have.length(1);

// })

