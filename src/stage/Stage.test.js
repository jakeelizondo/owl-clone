import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage';
import renderer from 'react-test-renderer';
import participants from '../participants';

describe('Stage Component', () => {
  // smoke test for stage component

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage participants={participants} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Stage participants={participants} key={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
