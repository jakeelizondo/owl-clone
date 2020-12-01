import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import renderer from 'react-test-renderer';

describe('Message Component', () => {
  // smoke test for app component

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Message
        avatar="https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1"
        message="hello"
        name="my name"
        time="10:47"
        type="message"
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  // snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <Message
          avatar="https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1"
          message="hello"
          name="my name"
          time="10:47"
          type="message"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
