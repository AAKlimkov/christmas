import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './app/App';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="toy" element={<App />} />
        {/* <Route path="game" element={<Game />} /> */}
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);
