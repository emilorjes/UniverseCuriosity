import React from 'react';
import { Link } from 'react-router-dom';
import RoutingPath from '../../../routes/RoutingPath';
import './DesktopNavigation.css';

function DesktopNavigation() {
  return (
    <header>
      <Link to={RoutingPath.universeView} className="logo">
        UNIVERSE CURIOSITY
        <span className="logo-slogan">A JOURNEY TROUGH SPACE AND TIME</span>
      </Link>
      <nav>
        <ul>
          <Link to={RoutingPath.universeView}>UNIVERSE</Link>
          <Link to={RoutingPath.planetsView}>PLANETS</Link>
          <Link to={RoutingPath.aboutView}>ABOUT</Link>
        </ul>
      </nav>
    </header>
  );
}

export default DesktopNavigation;
