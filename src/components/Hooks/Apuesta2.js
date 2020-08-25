import React, { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import {useApuestas} from './Hooks/useApuestas';

export const Apuesta = ({ objApuesta, idx, setApuestas, userData}) => {

    const handleEdit = (e) => {
        setEditable(!editable);
    }

    const handleSelectChange = (e) => {
        //objApuesta['estado'] = e.target.value.toLowerCase()
        //funciones.cambiarEstado(e.target.value.toLowerCase());
        //console.log(estado[4]['estado'])
        let selectValue = e.target.value.toLowerCase();
        setApuestaInfo({...apuestaInfo, estado: selectValue});
    }

    const handleDelete = (e) => {
        let eliminarID = Number.parseInt(e.target.id.split('_')[1]);
        //funciones.eliminarApuesta(eliminarID);
        console.log('elimina', eliminarID)
        console.log('numero', objApuesta['numero'])
        //setApuestaInfo(null)
        setApuestas( (apuesta) => apuesta.filter( (obApuesta) => eliminarID!==obApuesta['numero'] ) );
   }

    const handleChange = (e) => {
        let valor = e.target.value;
        switch (e.target.id.split('_')[0]) {
            case 'evento':
                //funciones.setApuestaInfo(idx, 'nombreEvento', valor)
                setApuestaInfo({ ...apuestaInfo, nombreEvento: valor })
                break;
            case 'mercado':
                setApuestaInfo({ ...apuestaInfo, mercado: e.target.value })
                break;
            case 'fecha':
                setApuestaInfo({ ...apuestaInfo, fecha: e.target.value })
                break;
            case 'horaInicio':
                setApuestaInfo({ ...apuestaInfo, horaInicio: e.target.value })
                break;
            case 'horaFinal':
                setApuestaInfo({ ...apuestaInfo, horaFinal: e.target.value })
                break;

            default:
                console.warn("ERROR", e.target.id);
                break;
        }

    }

    const [editable, setEditable] = useState(false);
    //const {state, funciones} = useApuestas(objApuesta);
    const [apuestaInfo, setApuestaInfo] = useState(objApuesta)


    const getBackgroundCarta = (estado) => {
        let estilo = 'card col-sm-5 '
        if (estado === 'ganada') {
            estilo = estilo + 'carta-success'
        } else if (estado === 'pendiente') {
            estilo = estilo + 'bg-light'
        } else {
            estilo = estilo + 'carta-perdida'
        }

        return (estilo)
    }
    //console.log("numero", apuestaInfo['numero'])
    // id={`evento_${idx}`}
    return (
        <div className={getBackgroundCarta(apuestaInfo['estado'])} key={apuestaInfo['numero']} >
            <div className="card-header">
            
                <h4> Apuesta #{objApuesta['numero']} </h4>
                <span hidden={editable} >{apuestaInfo['estado'].toUpperCase()}</span>

                <div className="form-group">
                    <select className="form-control" id="controlSelect" hidden={!editable} onChange={handleSelectChange} value={apuestaInfo['estado']} style={{ cursor: "pointer" }}>
                        <option value="ganada"> Ganada </option>
                        <option value="perdida"> Perdida </option>
                        <option value="pendiente"> Pendiente </option>
                    </select>
                </div>
            </div>

            <div className="card-body">
                <form onChange={handleChange}>
                    <div className="input-group mb-3 ">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> Evento </span>
                        </div>
                        <input type="text" className="form-control" value={apuestaInfo['nombreEvento']} disabled={!editable} id={`evento_${apuestaInfo['numero']}`} />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> Mercado </span>
                        </div>
                        <input type="text" className="form-control" value={apuestaInfo['mercado']} disabled={!editable} id={`mercado_${apuestaInfo['numero']}`} />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> Fecha </span>
                        </div>
                        <input type="text" className="form-control" value={apuestaInfo['fecha']} disabled={!editable} id={`fecha_${apuestaInfo['numero']}`} />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> Hora de inicio </span>
                        </div>
                        <input type="text" className="form-control" value={apuestaInfo['horaInicio']} disabled={!editable} id={`horaInicio_${apuestaInfo['numero']}`} />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> Hora Final Estimada </span>
                        </div>
                        <input type="text" className="form-control" value={apuestaInfo['horaFinal']} disabled={!editable} id={`horaFinal_${apuestaInfo['numero']}`} />
                    </div>

                    <div className="usuario-options d-flex justify-content-around " >
                        <button type="button" className="btn btn-outline-dark btn--bg-white" onClick={handleEdit} hidden={editable}> <EditIcon />Editar</button>
                        <button type="button" className="btn btn-outline-dark btn--bg-white" onClick={handleEdit} hidden={!editable}> <SaveIcon />Guardar</button>
                        <button type="button" className="btn btn-danger" id={`delete_${apuestaInfo['numero']}`} onClick={handleDelete} hidden={!editable}> <DeleteIcon />Eliminar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
