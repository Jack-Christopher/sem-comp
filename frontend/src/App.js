// src/App.js
import React from 'react';
import './App.css';
import AppRoutes from './routes';
import ResponsiveAppBar from './components/layout/ResponsiveAppBar';

function App() {
  return (
    <div className="App">
      {/* Add header content */}
      <ResponsiveAppBar />
      <main>
        <AppRoutes />
      </main>
      {/* Add footer content */}
    </div>
  );
}

export default App;
