import { useState } from "react"
import Header from "./components/Header"
import Tareas from "./components/Tareas"
import AddTarea from "./components/AddTarea"
    //Header es una etiqueta semantica, por eso los componentes se llaman con la primera letra en mayuscula
function App() {
 //estado tareas
 const [tareas, setTareas] = useState( [
  {
      id: 1,
      texto: "Ir al Doctor",
      fecha: "5 de Julio de 2022",
      terminada: true,
  },
  {
      id: 2,
      texto: "Ir al Cine",
      fecha: "10 de Julio de 2022",
      terminada: false,
  },
  {
      id: 3,
      texto: "Ir al Super",
      fecha: "11 de Julio de 2022",
      terminada: false,
  }
])

//Agregar Tarea
const addTarea = (tarea) => {
  console.log(tarea);
}

//Borrar Tarea
const deleteTarea = (id) => {
  console.log("borrar", id);
  setTareas(tareas.filter((tarea) => tarea.id !== id))
}

//Toggle terminado
const toggleTerminado = (id) => {
  console.log(id);
  setTareas(tareas.map((tarea) => tarea.id === id ? {...tarea, terminada: !tarea.terminada} : tarea))
}

  return (
    <div className="container">
      <Header titulo="Administrador de tareas" nombre="LUIS" edad="22"/>
      <AddTarea onAdd={addTarea}/>
      {tareas.length > 0 ? (<Tareas tareas={tareas} onDelete={deleteTarea} onToggle={toggleTerminado} />): ("No hay Tareas para mostrar")}
    </div>
  )
}

export default App
