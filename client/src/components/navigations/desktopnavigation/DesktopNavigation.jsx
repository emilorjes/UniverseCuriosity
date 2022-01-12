import React from 'react';
import { Link } from 'react-router-dom';
import RoutingPath from '../../../routes/RoutingPath';
import './DesktopNavigation.css';

function DesktopNavigation() {
  return (
    <header>
      <h1 className="logo">UNIVERSE CURIOSITY</h1>
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
