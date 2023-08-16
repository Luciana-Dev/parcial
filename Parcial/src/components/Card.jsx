import React from 'react'
import "../Estilos/Card.css"

const Card = ({pelicula, setSuerte}) => {
  return (
    <div className= 'caja' style ={{display: 'flex', justifyContent:'center'}}>
        <div><h3 style={{marginRight: 10, color:'black', padding: 10 }}>{pelicula.nombre}</h3></div>
        <div><h4 style={{marginRight: 10}}>{pelicula.direccion}</h4></div>
        <button className= 'boton' style ={{display: 'flex', backgroundColor: 'pink'}}onClick={() => setSuerte(true)}>Participar🤞</button>
    </div>
  )
}

export default Card