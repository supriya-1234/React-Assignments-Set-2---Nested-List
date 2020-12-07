import React from "react";
import Town from "./Town";

export default function City({ city, index }) {
  const [townIndex, setTownIndex] = React.useState(index);

  const handleTown = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;
    if (townIndex === index) {
      setTownIndex(-1);
      return;
    }
    setTownIndex(index);
  };
  return (
    <>
      {city.cities.map((item, index) => (
        <li onClick={handleTown} id={`city${index + 1}`} key={index}>
          {item.name}
        </li>
      ))}
      {townIndex !== -1 && <Town town={city.cities[townIndex]} />}
    </>
  );
}
