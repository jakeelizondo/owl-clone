import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App Component', () => {
  // smoke test for app component

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
