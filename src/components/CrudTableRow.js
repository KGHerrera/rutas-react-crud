import React from "react";
import { useNavigate } from "react-router-dom";

const CrudTableRow = ({ item, setDataToEdit, deleteData }) => {
  let { name, image, id } = item;
  let navigate = useNavigate();
  const handleEdit = () => {
    setDataToEdit(item);
    navigate(`editar/${id}`);
  };
  return (
    <tr>
      <td>
        <div
          style={{
            width: 100 + "px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: 100 + "px",
            backgroundImage: `url('${image}')`,
            borderRadius: 100 + "px",
          }}
        ></div>
      </td>
      <td>{name}</td>

      <td>
        <button onClick={handleEdit}>editar</button>
        <button onClick={() => deleteData(id)}>eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
