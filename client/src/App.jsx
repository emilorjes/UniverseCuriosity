import React from 'react';
import Router from './routes/Router';
import Navigations from './components/navigations/Navigations';
import Footer from './components/footer/Footer';
import PlanetsProvider from './shared/provider/PlanetsProvider';
import './shared/global/Global.css';

function App() {
  return (
    <PlanetsProvider>
      <Router>
        <Navigations />
        <Footer />
      </Router>
    </PlanetsProvider>
  );
}

export default App;
