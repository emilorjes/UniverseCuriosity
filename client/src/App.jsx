import React from 'react';
import Router from './routes/Router';
import Navigations from './components/navigations/Navigations';
import './shared/global/Global.css';

function App() {
  return (
    <Router>
      <Navigations />
    </Router>
  );
}

export default App;
