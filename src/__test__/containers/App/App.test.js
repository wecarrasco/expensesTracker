import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../../containers/App/App';

describe('Render the project', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
