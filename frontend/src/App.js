// src/App.js
import React from 'react';
import './App.css';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      {/* Add header content */}
      <main>
        <AppRoutes />
      </main>
      {/* Add footer content */}
    </div>
  );
}

export default App;
