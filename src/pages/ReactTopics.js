import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

export default function ReactTopics() {
  const Topic = () => {
    let { topic } = useParams();
    
    return (
      <div>
        <h4>{topic}</h4>
        <p>lorem</p>
      </div>
    );
  };
  return (
    <div>
      <h3>temas de react</h3>
      <ul>
        <li>
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="props">Props</Link>
        </li>
        <li>
          <Link to="estado">Estado</Link>
        </li>
        <li>
          <Link to="componentes">Componentes</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":topic" element={<Topic />} />
      </Routes>
    </div>
  );
}
