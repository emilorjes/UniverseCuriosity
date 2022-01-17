import React from 'react';
import { NavLink } from 'react-router-dom';
import RoutingPath from '../../../routes/RoutingPath';
import './DesktopNavigation.css';

/**
 * Uses NavLink and RoutingPath to navigate between diffrent views.
 * @returns NavLinks with routes to diffrent views.
 */
function DesktopNavigation() {
  return (
    <header>
      <NavLink to={RoutingPath.universeView} className="logo">
        UNIVERSE CURIOSITY
        <span className="logo-slogan">A JOURNEY TROUGH SPACE AND TIME</span>
      </NavLink>
      <nav>
        <ul>
          <NavLink to={RoutingPath.universeView}>UNIVERSE</NavLink>
          <NavLink to={RoutingPath.planetsView}>PLANETS</NavLink>
          <NavLink to={RoutingPath.aboutView}>ABOUT</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default DesktopNavigation;
