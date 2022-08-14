import React from "react";
import { BrowserRouter, Routes, Route, Navigate, HashRouter, Link } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import DashBoard from "../pages/DashBoard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./MenuConceptos";
import PrivateRoute from "./PrivateRoute";

export default function ConceptosBasicos() {
  return (
    <div>
      <h2>hash raouter</h2>
      <HashRouter>
        <nav>
          <Link to="/">home</Link>
          <Link to="/about">acerca</Link>
          <Link to="/contact">contancto</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Acerca />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>

      <hr />

      <h2>conceptos basicos</h2>
      <BrowserRouter>
        <MenuConceptos />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Acerca />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/user/:username/" element={<Usuario />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/sobre" element={<Navigate to="/about" />} />
          <Route path="/contacto" element={<Navigate to="/contact" />} />

          <Route path="react/*" element={<ReactTopics />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
