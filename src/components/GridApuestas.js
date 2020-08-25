import React, {useState} from 'react'
import { Apuesta } from './Apuesta';

export const GridApuestas = ({initApuestas}) => {

    const [apuestas, setApuestas] = useState(initApuestas)

    return (
        <div>
            <div className="usuario-apuestas d-flex align-content-start flex-wrap justify-content-around">
                {apuestas?.map((objApuesta) => <Apuesta objApuesta={objApuesta} setApuestas={setApuestas} key={objApuesta['numero']}/>)}
                {console.log(apuestas)}
                </div>
        </div>
    )
}
