import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  //This variable will create a PlantCard for each array object mapped. 
  const plantComponent = ( plants.map((plant) => (
    <PlantCard key={plant.id} plants={plant} /> 
  ))
  )

  return (
    <ul className="cards">
      {plantComponent}
    </ul>
  );
}

export default PlantList;
