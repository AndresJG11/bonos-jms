import React, { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { useApuestas } from './Hooks/useApuestas';




export const Apuesta = ({ objApuesta, setApuestas }) => {

    const handleEdit = (e) => {
        setEditable(!editable);
    }

    const handleSelectChange = (e) => {
        let selectValue = e.target.value.toLowerCase();
        funciones.cambiarEstado(selectValue);
    }

    const handleDelete = (e) => {
        let eliminarID = Number.parseInt(e.target.id.split('_')[1]);
        funciones.eliminarApuesta(eliminarID);
    }

    const handleChange = (e) => {
        let valor = e.target.value;
        let id = e.target.id.split('_')[0];
        funciones.cambiarInfo(id, valor);
    }

    const [editable, setEditable] = useState(false);
    const { funciones } = useApuestas(objApuesta, setApuestas)



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

    return (
        <div className={getBackgroundCarta(objApuesta['estado'])} key={objApuesta['numero']} >
            <div className="card-header">

                <h4> Apuesta #{objApuesta['numero']} </h4>
                <span hidden={editable} >{objApuesta['estado'].toUpperCase()}</span>

                <div className="form-group">
                    <select className="form-control" id="controlSelect" hidden={!editable} onChange={handleSelectChange} value={objApuesta['estado']} style={{ cursor: "pointer" }}>
                        <option value="ganada"> Ganada </option>
                        <option value="perdida"> Perdida </option>
                        <option value="pendiente"> Pendiente </option>
                    </select>
                </div>
            </div>

            <div className="card-body">
                <form>
                    <div className="input-group mb-3 ">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> Evento </span>
                        </div>
                        <input type="text" className="form-control" onChange={handleChange} value={objApuesta['nombreEvento']} disabled={!editable} id={`nombreEvento_${objApuesta['numero']}`} />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> Mercado </span>
                        </div>
                        <input type="text" className="form-control" onChange={handleChange} value={objApuesta['mercado']} disabled={!editable} id={`mercado_${objApuesta['numero']}`} />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> Fecha </span>
                        </div>
                        <input type="text" className="form-control" onChange={handleChange} value={objApuesta['fecha']} disabled={!editable} id={`fecha_${objApuesta['numero']}`} />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> Hora de inicio </span>
                        </div>
                        <input type="text" className="form-control" onChange={handleChange} value={objApuesta['horaInicio']} disabled={!editable} id={`horaInicio_${objApuesta['numero']}`} />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> Hora Final Estimada </span>
                        </div>
                        <input type="text" className="form-control" onChange={handleChange} value={objApuesta['horaFinal']} disabled={!editable} id={`horaFinal_${objApuesta['numero']}`} />
                    </div>

                    <div className="input-group mb-3" >
                        <div className="input-group-prepend">
                            <span className="input-group-text"> Cuotas </span>
                        </div>
                        <div className="">
                            <div className="d-flex">
                                <label className="col-sm-4 col-form-label" for={`cuotas_${objApuesta['numero']}`}> Wplay </label>
                                <div className="col-sm-6">
                                    <input type="number" className="form-control" value={1.475} disabled={!editable} id={`cuotas_${objApuesta['numero']}`} />
                                </div>
                            </div>
                            <div className="d-flex">
                                <label className="col-form-label" style={{marginLeft:15}} for={`cuotas2_${objApuesta['numero']}`}> Wplay </label>
                                <div className="col-sm-6">
                                    <input type="number" className="form-control"  value={1.50} disabled={!editable} id={`cuotas2_${objApuesta['numero']}`} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="input-group mb-3" >
                        <div className="input-group-prepend">
                            <span className="input-group-text"> Perdida </span>
                        </div>
                        <input type="number" className="form-control" onChange={handleChange} value={2570} disabled={!editable} id={`perdida_${objApuesta['numero']}`} />
                    </div>

                    <div className="usuario-options d-flex justify-content-around " >
                        <button type="button" className="btn btn-outline-dark btn--bg-white" onClick={handleEdit} hidden={editable}> <EditIcon />Editar</button>
                        <button type="button" className="btn btn-outline-dark btn--bg-white" onClick={handleEdit} hidden={!editable}> <SaveIcon />Guardar</button>
                        <button type="button" className="btn btn-danger" id={`delete_${objApuesta['numero']}`} onClick={handleDelete} hidden={!editable}> <DeleteIcon />Eliminar</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
