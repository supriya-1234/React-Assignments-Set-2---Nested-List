import React from "react";
import City from "./City";

export default function State({ states }) {
  const [cityIndex, setCityIndex] = React.useState(-1);
  const [townIndex, setTownIndex] = React.useState(-1);

  const handleCity = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;
    if (cityIndex === index) {
      setCityIndex(-1);
      return;
    }
    setCityIndex(index);
    setTownIndex(-1);
  };
  return (
    <>
      {states.map((item, index) => (
        <li key={index} onClick={handleCity} id={`state${index + 1}`}>
          {item.name}
        </li>
      ))}
      {cityIndex !== -1 && <City index={townIndex} city={states[cityIndex]} />}
    </>
  );
}
