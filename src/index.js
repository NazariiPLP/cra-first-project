import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import Greeting from './components/Greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Greeting name="Alex" />
    <Greeting name="John" />
    <Greeting name="Simon" />
    <Greeting name="Draco" />
  </React.StrictMode>
);
