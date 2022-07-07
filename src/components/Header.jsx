//Usando react funcional
//En react al principio se usaban clases, pero era mas dificil y muy extenso, por eso se migra a react funcional
// snp: rafce
//Se paso de App.jsx al componenete hijo Header.jsx
//Desestructurando es con llaves en vez de props y luego la propiedad props.titulo
//Solo recibimos titulo
import PropTypes from 'prop-types';
import Boton from './Boton';
const Header = ({titulo = "default", nombre, edad}) => {

  const onClick = () => {
    console.log("Click desde el padre (Header)");
  }

  return (
    <header className='header'>
        <h2>{titulo}, de {nombre}, {edad}</h2>
        <Boton color="green" text="Nueva" onClick={onClick}/>
        <Boton color="red" text="Borrar"/>
    </header>
    )
}

//Definir si tiene un prop default
/*Header.defaultProps = {
    titulo: "default"
}*/

Header.propTypes = { 
    //Espera un string
    titulo: PropTypes.string.isRequired
  }
/*  
const estilos = {
  color: "red", backgroundColor: "black"
}*/

export default Header