import { useState } from 'react'
import './Estilos/App.css'
import Card from './components/Card'
import Form from './components/Form'

function App() {

  const[suerte, setSuerte] = useState(false)

  let peliculas = [
    {id: 1, nombre:'Oppenheimer', direccion: 'Christopher Nolan'},
    {id: 2, nombre:'Barbie', direccion: 'Greta Gerwig'},
  ]

  return (
    <>

<h3 className='titulo'>Sorteo 🎥 entradas para el cine</h3>

    {peliculas.map((pelicula) => {
      return <Card pelicula={pelicula} Key={pelicula.id} setSuerte={setSuerte} />
    } )}
    {suerte && <Form/>}
  
    </>
  )
}

export default App
