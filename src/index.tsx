import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'resources/index.css';
import reportWebVitals from 'resources/reportWebVitals';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

reportWebVitals(console.log);

if (import.meta.hot) {
  import.meta.hot.accept();
}
