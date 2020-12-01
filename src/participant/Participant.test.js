import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participant';
import renderer from 'react-test-renderer';
describe('Participant Component', () => {
  // smoke test for app component

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer.create(<Participant />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
