import React from "react";
function City(props) {
  return (
    <button id={`city${props.index}`} onClick={() => handleCity(props.index)}>
      {props.city}
    </button>
  );
}
export default City;
