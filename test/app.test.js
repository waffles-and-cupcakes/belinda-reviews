import React from 'react';
import {shallow} from 'enzyme';
import App from '../client/components/app';
import renderer from 'react-test-renderer';
import { componentDidMount } from 'react-dom';
jest.mock('react-dom');

test('App renders', () => {
  const component = renderer.create(
    <App />
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('App retrieves data on server during componentDidMount', () => {
  // console.log('COMPONENT DID MOUNT', componentDidMount);
  // const component = mount(
  //   <App />
  // )
  // expect(componentDidMount).toHaveBeenCalledTimes(1);
    const mounted = mount(<App />);
    const inst = mounted.instance();
    mounted.update();
    console.log(mounted);

    return Promise
      .resolve(mounted)
      .then(() => mounted.update())
      .then(() => mounted.update())
      .then(() => {
        console.log(mounted);
        expect(mounted.text()).not.toContain("Error");
      });
    // expect(inst).to.be.instanceOf(App);

    // expect(wrapper.props().bar).to.equal('baz');
    // wrapper.setProps({ bar: 'foo' });
    // expect(wrapper.props().bar).to.equal('foo');
});
