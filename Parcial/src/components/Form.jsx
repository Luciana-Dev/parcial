import React, { useState } from 'react'

const Form = () => {

    const [participante, setparticipante] = useState({
    nombre: '',
    dni: ''
    })

    const [enviado, setEnviado] = useState(false)
    const [error, setError] = useState(false)

    console.log(participante)
    const handleSubmit = () => {
        if(participante.nombre.length > 3 || participante.dni.length > 6) {
            setEnviado(true) 
            setError(false) 
        } else { 
            setError(true)}
}
return (
    <div>
        <label>Nombre y apellido</label>
        <input type="text" onChange={(event) => setparticipante({...participante, nombre: event.target.value})}/>
        <label> DNI</label>
        <input type="text" onChange={(event) => setparticipante({...participante, dni: event.target.value})}/>
        <button onClick={handleSubmit}> Enviar </button>
        {enviado && <h3> Ya estas participando por las entradas </h3>}
        {error && <h3 style={{color: 'red'}}> Por favor chequea que la información sea correcta </h3>}

    </div>
)
}
export default Form