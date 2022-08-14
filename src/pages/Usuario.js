import React from "react";
import { useParams } from "react-router-dom";

export default function Usuario() {
  //let params = useParams();
  
  let {username} = useParams();
  return (
    <div>
      <h3>perfil del usuario</h3>
      <p>nombre del {username}</p>
    </div>
  );
}
