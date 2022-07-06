//Usando react funcional
//En react al principio se usaban clases, pero era mas dificil y muy extenso, por eso se migra a react funcional

// snp: rafce
//Se paso de App.jsx al componenete hijo Header.jsx
//Desestructurando es con llaver en vez de props y luego props.titulo
//Solo recibimos titulo
const Header = ({titulo}) => {
  return (
    <header>
        <h1>{titulo}</h1>
    </header>
    )
}

export default Header