import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantLog from './ParticipantLog';
import renderer from 'react-test-renderer';
import participants from '../participants';

describe('ParticipantLog Component', () => {
  // smoke test for app component

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantLog participants={participants} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ParticipantLog key={1} participants={participants} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
