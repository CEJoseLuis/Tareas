import { useState } from "react"
import Header from "./components/Header"
import Tareas from "./components/Tareas"
import AddTarea from "./components/AddTarea"
    //Header es una etiqueta semantica, por eso los componentes se llaman con la primera letra en mayuscula
function App() {

  //Estado para esconder formulario
  const [showAddTarea, setShowAddTarea] = useState(false) 

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
  //Agregar tarea a nuestro estado
  const id = Math.floor(Math.random()*10000) + 1
  const nuevaTarea = {id, ...tarea}
  setTareas([...tareas, nuevaTarea])
}

//Borrar Tarea
const deleteTarea = (id) => {
  console.log("borrar", id);
  setTareas(tareas.filter((tarea) => tarea.id !== id))
}

//Toggle terminado
const toggleTerminado = (id) => {
  console.log(id);
  //El spread clona por completo el objeto tarea, y modifica si esta terminada, si no se utiliza ..., entonces solo se devuelve el valor de terminado, se eliman los otros atributos como, texto y fecha
  setTareas(tareas.map((tarea) => tarea.id === id ? {...tarea, terminada: !tarea.terminada} : tarea))
}

  return (
    //De una sola condicion el &&
    <div className="container">
      <Header titulo="Administrador de tareas" nombre="LUIS" edad="22" onAdd={() => setShowAddTarea(!showAddTarea)} showAdd={showAddTarea}/>
      {showAddTarea && <AddTarea onAdd={addTarea}/>}
      {tareas.length > 0 ? (<Tareas tareas={tareas} onDelete={deleteTarea} onToggle={toggleTerminado} />): ("No hay Tareas para mostrar")}
    </div>
  )
}

export default App
