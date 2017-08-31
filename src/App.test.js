import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme'

import App from './App';
import Login from './component/Login/Login'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
