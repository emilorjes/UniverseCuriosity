import React from 'react';
import Router from './routes/Router';
import Navigations from './components/navigations/Navigations';
import Footer from './components/footer/Footer';
import './shared/global/Global.css';

function App() {
  return (
    <Router>
      <Navigations />
      <Footer />
    </Router>
  );
}

export default App;
