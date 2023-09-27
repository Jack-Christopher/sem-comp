import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';

import SemComp from './pages/SemCompPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<div>Home</div>} />
        <Route exact path="/semcomp" element={<SemComp/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
