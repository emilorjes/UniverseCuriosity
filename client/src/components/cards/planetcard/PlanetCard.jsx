/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useContext, useState } from 'react';
import { PlanetsContext } from '../../../shared/provider/PlanetsProvider';
import PlanetModal from '../../modal/planetmodal/PlanetModal';
import './PlanetCard.css';

/**
 * Maps over PlanetsContext and shows a card for each planet.
 * If the card is clicked a model with more info about the planet is shown.
 * @returns Card for each planet. If modalOpen is true the modal of specific planet is returned to.
 */
function PlanetCard() {
  const { listOfPlanets } = useContext(PlanetsContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  /**
   * When handleClick function is used setModalData is set to the the planets info.
   * And modalOpen is set to true.
   */
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
