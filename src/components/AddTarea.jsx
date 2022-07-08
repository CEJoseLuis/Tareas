import { useState } from "react"
const AddTarea = ({onAdd}) => {
  //Mismos que en el json o info
  const [texto, setTexto] = useState("")
  const [fecha, setFecha] = useState("")
  const [terminada, setTerminada] = useState(false)

  const onSubmit = (e) => {
    //Todos los formularios deben de tener esto para evitar recargar la pagina
    e.preventDefault()
    if(!texto){
        alert("Profavor teclea algo")
        return 
    }
    onAdd({texto, fecha, terminada})
    setTexto("")
    setFecha("")
    setTerminada(false)

  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Tareas</label>
            <input type="text" placeholder="Teclea una Tarea" value={texto} onChange={(e) => setTexto(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Fecha</label>
            <input type="text" placeholder="Teclea una Fecha" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Terminada</label>
            <input type="checkbox" checked={terminada} value={terminada} onChange={(e) => setTerminada(e.currentTarget.checked)}/>
        </div>
        <input className="btn btn-block" type="submit" value="Agregar tarea"/>
    </form>
  )
}
//Los estados controlan como la aplicacion se va moviendo
export default AddTarea