import {useState} from 'react'

export const useApuestas = (apuesta, setApuestas) => {
    const [state, setState] = useState(apuesta)

    const cambiarEstado = (estado) => {
        state['estado'] = estado
        setState(state)
        setApuestas( (apuestas) => apuestas.map( (objApuesta) => objApuesta['numero']===apuesta['numero']?state:objApuesta ) )
    }
    
    const eliminarApuesta = (eliminarID) => {
        setApuestas( (apuesta) => apuesta.filter( (objApuesta) => eliminarID!==objApuesta['numero'] ) );
    }
    
    const cambiarInfo = (clave, valor) => {
        state[clave] = valor;
        setState(state)
        setApuestas( (apuestas) => apuestas.map( (objApuesta) => objApuesta['numero']===apuesta['numero']?state:objApuesta ) )
    }
    
    return {state, funciones:{cambiarEstado, eliminarApuesta, cambiarInfo} }
}
