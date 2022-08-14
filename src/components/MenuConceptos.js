import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function MenuConceptos() {
  return (
    <nav>
      <ol>
        <li>
          <span>menu con enlaces html</span>
          <a href="/">home</a>
          <a href="/about">about</a>
          <a href="/contact">contact</a>
        </li>
        <li>
          <span>componente link</span>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <span>componente NavLink</span>
          <NavLink to="/">home</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </li>
        <li>
          <span>paso de parametris</span>
          <Link to="/user/herrera">herrera</Link>
          <Link to="/user/robert">robert</Link>
        </li>
        <li>
          <span>parametros de consulta</span>
          <Link to="/productos">productos</Link>
        </li>

        <li>
          <span>redirecciones </span>
          <Link to="/sobre">about</Link>
          <Link to="/contacto">contact</Link>
        </li>
        <li>
          <span>rutas anidadas</span>
          <Link to="/react">react</Link>
        </li>
        <li>
          <span>rutas privadas</span>
          <Link to="login">Login</Link>
          <Link to="dashboard">dashboard</Link>
        </li>
      </ol>
    </nav>
  );
}
