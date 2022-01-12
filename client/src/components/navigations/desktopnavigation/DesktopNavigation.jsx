import React from 'react';
import { Link } from 'react-router-dom';
import RoutingPath from '../../../routes/RoutingPath';
import './DesktopNavigation.css';

function DesktopNavigation() {
  return (
    <div className="navbar">
      <div className="nav-items">
        <Link to={RoutingPath.universeView}>UNIVERSE</Link>
        <Link to={RoutingPath.planetsView}>PLANETS</Link>
        <Link to={RoutingPath.aboutView}>ABOUT</Link>
      </div>
    </div>
  );
}

export default DesktopNavigation;
