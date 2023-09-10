import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';

import SemComp from './pages/SemCompPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/semcomp" element={<SemComp/>} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
