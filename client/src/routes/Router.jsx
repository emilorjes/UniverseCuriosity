import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UniverseView from '../views/universeview/UniverseView';
import PlanetsView from '../views/planetsview/PlanetsView';
import AboutView from '../views/aboutview/AboutView';
import RoutingPath from './RoutingPath';

/**
 * BrowserRouter is the parent component that is used to store all of the other components ({children}) so the user can change between diffrent views.
 * Routes is used to render only the first route that matches the location rather than rendering all matching routes.
 * Route is used to renders some UI when its path matches the current URL.
 * @param {children}
 * @returns Routing between views
 */
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
