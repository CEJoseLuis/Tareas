import Tarea from "./Tarea"
const Tareas = ({tareas, onDelete, onToggle}) => {
  return (
    <>
        {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} onDelete={onDelete} onToggle={onToggle}/>))}
    </>
    )
}
//Estados ayudan a que podamos trabjar como si fuera un avariable toda la informacion
export default Tareas