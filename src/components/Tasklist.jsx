import { useContext } from "react";
import TarjetaTareas from "./TarjetaTareas";
import { ContextoTareas } from "../context/ContextoTareas";

function Tasklist() {
  const { tareas } = useContext(ContextoTareas);

  if (tareas.length === 0) {
    return (
      <div>
        {/* <h2>Lista de tareas vacía</h2> */}
        <h2 className="text-white text-4xl font-bold text-center ">
          No hay tareas
        </h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 ">
      {/* <h1>Lista de tareas</h1> */}
      {tareas.map((tarea) => (
        <TarjetaTareas key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}

export default Tasklist;
