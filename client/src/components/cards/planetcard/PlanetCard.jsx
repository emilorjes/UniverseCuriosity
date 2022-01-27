/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useContext, useState } from 'react';
import { PlanetsContext } from '../../../shared/provider/PlanetsProvider';
import PlanetModal from '../../modal/planetmodal/PlanetModal';
import './PlanetCard.css';

function PlanetCard() {
  const { listOfPlanets } = useContext(PlanetsContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleClick = (planet) => {
    setModalData(planet);
    setModalOpen(true);
  };

  return (
    <div className="container">
      <div className="cards">
        {listOfPlanets.map((planet) => (
          <div
            onClick={() => handleClick(planet)}
            className="card"
            key={planet.name}
          >
            <h2> {planet.name}</h2>
            <img src={planet.image} alt={planet.name} />
          </div>
        ))}
      </div>
      {modalOpen && <PlanetModal planet={modalData} modalOpen={setModalOpen} />}
    </div>
  );
}

export default PlanetCard;
