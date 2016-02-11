import React from 'react';
import ReactDOM from 'react-dom';
import Test from './lib/thing';

const test = new Test();
test.hello();

console.log('Webpack!');

ReactDOM.render(
  <h1>Hello, World</h1>,
  document.getElementById('outlet')
);
