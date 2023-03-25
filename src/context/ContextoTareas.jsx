import { createContext, useState, useEffect } from "react";
import { tareas as datos } from "../data/tareas";

export const ContextoTareas = createContext();

export function ContextoTareasProvider(props) {
  // Las tareas estarán disponibles hasta que carge el componente
  // console.log(datos);

  const [tareas, setTareas] = useState([]);

  // Recibe tarea como un objeto
  function crearTarea(tarea) {
    setTareas([
      ...tareas,
      {
        id: tareas.length,
        titulo: tarea.titulo,
        descripcion: tarea.descripcion,
      },
    ]);
  }

  function eliminaTarea(id) {
    console.log(tareas);
    // console.log(id);
    const nuevoArreglo = tareas.filter((tarea) => tarea.id != id);
    // console.log(nuevoArreglo);
    setTareas(nuevoArreglo);
  }

  // Al cargar el Contexto se asignan las tareas
  useEffect(() => {
    setTareas(datos);
  }, []);

  return (
    <ContextoTareas.Provider
      value={{
        tareas,
        crearTarea,
        eliminaTarea,
      }}
    >
      {props.children}
    </ContextoTareas.Provider>
  );
}
