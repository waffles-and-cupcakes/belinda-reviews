import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app';

jest.mock('react-dom');

describe('App', () => {
  it('renders', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('retrieves data on server during componentDidMount', () => {
    const mounted = mount(<App />);
    const inst = mounted.instance();
    mounted.update();

    return Promise
      .resolve(mounted)
      .then(() => mounted.update())
      .then(() => mounted.update())
      .then(() => {
        expect(mounted.text()).not.toContain('Error');
      });
  });
});
