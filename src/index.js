// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

ReactDOM.render(
  <React.StrictMode>
    <div className="d-flex justify-content-center"> {/* Add this line */}
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
