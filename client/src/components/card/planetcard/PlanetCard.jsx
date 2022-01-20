/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useContext, useState } from 'react';
import { PlanetsContext } from '../../../shared/provider/PlanetsProvider';
import PlanetModal from '../../modal/planetmodal/PlanetModal';
import './PlanetCard.css';

function PlanetCard() {
  const { listOfPlanets } = useContext(PlanetsContext);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleClick = (planet) => {
    setModalData(planet);
    setShowModal(true);
  };

  return (
    <>
      <div className="cards">
        {listOfPlanets.map((planet) => (
          <div
            onClick={() => handleClick(planet)}
            className="card"
            key={planet.name}
          >
            <h2> {planet.name}</h2>
            <img src={planet.image} alt="" />
          </div>
        ))}
      </div>
      {showModal && (
        <PlanetModal planet={modalData} closeModal={setShowModal} />
      )}
    </>
  );
}

export default PlanetCard;
