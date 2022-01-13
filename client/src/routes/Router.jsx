import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UniverseView from '../views/universeview/UniverseView';
import PlanetsView from '../views/planetsview/PlanetsView';
import AboutView from '../views/aboutview/AboutView';
import RoutingPath from './RoutingPath';

// eslint-disable-next-line react/prop-types
function Router({ children }) {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route exact path={RoutingPath.planetsView} element={<PlanetsView />} />
        <Route exact path={RoutingPath.aboutView} element={<AboutView />} />
        <Route path={RoutingPath.universeView} element={<UniverseView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
