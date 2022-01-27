import React from 'react';
import Router from './routes/Router';
import Navigations from './components/navigations/Navigations';
import PlanetsProvider from './shared/provider/PlanetsProvider';
import './shared/global/Global.css';

function App() {
  return (
    <PlanetsProvider>
      <Router>
        <Navigations />
      </Router>
    </PlanetsProvider>
  );
}

export default App;
