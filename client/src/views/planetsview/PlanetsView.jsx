import React from 'react';
import TestDb from '../../components/testdb/TestDb';

/**
 * A view for the Planets page.
 * @returns Planets view.
 */
function PlanetsView() {
  return (
    <main>
      <h1>PlanetsView</h1>
      <TestDb />
    </main>
  );
}

export default PlanetsView;
