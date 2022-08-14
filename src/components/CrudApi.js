import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader.js";
import Message from "./Message.js";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";

export default function CrudApi() {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let api = helpHttp();
  let url = "http://localhost:5000/waifus";

  useEffect(() => {
    setLoading(true);

    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res);

        setError(null);
      } else {
        setDb(null);

        setError(res);
      }

      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((item) => (item.id === data.id ? data : item));
        setDb(newData);
      } else {
        setError(res);
      }
    });
    //let newData = db.map((item) => (item.id === data.id ? data : item));
    //setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("esta seguro?");

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((item) => item.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <HashRouter>
        <header>
          <h2>CRUD Api con Rutas</h2>
          <nav>
            <NavLink className="active" to="waifus/">
              Waifus
            </NavLink>
            <NavLink className="active" to="waifus/agregar">
              Agregar
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route
            path="waifus/*"
            element={
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <h2>Home de Waifus</h2>
                      <h2>CRUD API</h2>

                      {loading && <Loader />}
                      {error && (
                        <Message
                          msg={`Error ${error.status} : ${error.statusText}`}
                          bgColor="#dc3545"
                        />
                      )}
                      {db && (
                        <CrudTable
                          data={db}
                          setDataToEdit={setDataToEdit}
                          deleteData={deleteData}
                        />
                      )}
                    </>
                  }
                />
                <Route
                  path="/agregar"
                  element={
                    <>
                      <h2>Agregar Waifus</h2>
                      <CrudForm
                        createData={createData}
                        updateData={updateData}
                        dataToEdit={dataToEdit}
                        setDataToEdit={setDataToEdit}
                      />
                    </>
                  }
                />
                <Route
                  path="/editar/:id"
                  element={
                    <>
                      <h2>Agregar Waifus</h2>
                      <CrudForm
                        createData={createData}
                        updateData={updateData}
                        dataToEdit={dataToEdit}
                        setDataToEdit={setDataToEdit}
                      />
                    </>
                  }
                />
                <Route path="*" element={<Error404 />} />
              </Routes>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}
