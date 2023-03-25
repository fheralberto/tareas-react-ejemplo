import { useContext } from "react";
import { ContextoTareas } from "../context/ContextoTareas";

function TarjetaTareas({ tarea }) {
  const { eliminaTarea } = useContext(ContextoTareas);
  return (
    <div className=" bg-gray-800 text-white p-4 rounded-md ">
      <h2 className=" text-xl font-bold capitalize ">{tarea.titulo}</h2>
      <p className="text-gray-500 text-sm ">{tarea.descripcion}</p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-600 " onClick={() => eliminaTarea(tarea.id)}>Eliminar tarea</button>
    </div>
  );
}

export default TarjetaTareas;
