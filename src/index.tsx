import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import './fonts/OpenSans-Regular.ttf'
import './fonts/OpenSans-SemiBold.ttf'
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

