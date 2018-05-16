import React from 'react';
import ReactDOM from 'react-dom';
import OldApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OldApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
