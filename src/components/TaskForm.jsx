import { useState, useContext } from "react";
import { ContextoTareas } from "../context/ContextoTareas";

// Recibe crearTarea como una función
function TaskForm() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const { crearTarea } = useContext(ContextoTareas);

  const manejaSubmit = (e) => {
    e.preventDefault();
    crearTarea({
      titulo,
      descripcion,
    });
    setTitulo("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto ">
      <form onSubmit={manejaSubmit} className="bg-slate-800 p-10 mb-4  ">
        <h1 className="text-2xl font-bold text-white mb-3 ">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitulo(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2 "
          value={titulo}
          autoFocus
        />
        <textarea
          placeholder="Escrbe la descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2 "
          value={descripcion}
        ></textarea>
        <button
          className="bg-indigo-500 px-3 py-1 text-white "
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
