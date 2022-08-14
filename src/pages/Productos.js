import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Productos() {
  //let location = useLocation();
  let { search } = useLocation();
  let query = new URLSearchParams(search);

  const LIMIT = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;
  //console.log(location);

  let navigate = useNavigate();

  const handlePrev = (e) => {
    navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`);
  };

  const handleNext = (e) => {
    navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`);
  };

  return (
    <div>
      <h2>productos</h2>
      <p>
        mostrando productos del{" "}
        <b>
          {start} al {end}
        </b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>atras</button>}
      <button onClick={handleNext}>adelante</button>
    </div>
  );
}
