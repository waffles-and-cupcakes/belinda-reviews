import React from 'react';
import {shallow} from 'enzyme';
import App from '../app';
import renderer from 'react-test-renderer';
import { componentDidMount } from 'react-dom';
jest.mock('react-dom');


describe('App', () => {
  it('renders', () => {
    const component = renderer.create(
      <App />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('retrieves data on server during componentDidMount', () => {
    // console.log('COMPONENT DID MOUNT', componentDidMount);
    // const component = mount(
    //   <App />
    // )
    // expect(componentDidMount).toHaveBeenCalledTimes(1);
    const mounted = mount(<App />);
    const inst = mounted.instance();
    mounted.update();
    // console.log(mounted);
  
    return Promise
      .resolve(mounted)
      .then(() => mounted.update())
      .then(() => mounted.update())
      .then(() => {
        // console.log(mounted);
        expect(mounted.text()).not.toContain('Error');
      });
    // expect(inst).to.be.instanceOf(App);
  
    // expect(wrapper.props().bar).to.equal('baz');
    // wrapper.setProps({ bar: 'foo' });
    // expect(wrapper.props().bar).to.equal('foo');
  });
 
});
