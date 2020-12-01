import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatLog from './ChatLog';
import participants from '../participants';
import chatEvents from '../chatEvents';

describe('ChatLog Component', () => {
  // smoke test for app component

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ChatLog chatEvents={chatEvents} participants={participants} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  // snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ChatLog chatEvents={chatEvents} participants={participants} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
