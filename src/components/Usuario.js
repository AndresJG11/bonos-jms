import React from 'react'
import { useParams } from "react-router-dom";
import { getData } from '../helpers/getData';
import getIconsStatus from '../helpers/getIconsStatus';

import "./css/Usuario.css"

export const Usuario = () => {

    let { id } = useParams();

    const userData = getData(id);

    return (<>
        <div className="usuario-nombre">
            <h1> <span >Usuario:</span> {userData.usuario} </h1>
        </div>

        <div className="container usuario-info">
            <h2>Apuestas</h2> {getIconsStatus(userData['wplay'])}
            <hr />

            <div className="usuario-apuestas d-flex align-content-start flex-wrap justify-content-around">
                {userData["apuestas"].map((objApuesta, idx) => <div className={(userData['apuestas'][idx]['estado'])?'card col-sm-5 carta-success':'card col-sm-5 bg-light' } key={idx} >
                    <div className="card-header"> <h4 className="card-title"> Apuesta #{objApuesta['numero']} </h4> </div>
                    <div className="card-body">

                        <div className="input-group mb-3 ">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> Evento </span>
                            </div>
                            <input type="text" className="form-control" value={objApuesta['nombreEvento']} disabled />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> Mercado </span>
                            </div>
                            <input type="text" className="form-control" value={objApuesta['mercado']} disabled />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> Fecha </span>
                            </div>
                            <input type="text" className="form-control" value={objApuesta['fecha']} disabled />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> Hora de inicio </span>
                            </div>
                            <input type="text" className="form-control" value={objApuesta['horaInicio']} disabled />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> Hora Final Estimada </span>
                            </div>
                            <input type="text" className="form-control" value={objApuesta['horaFinal']} disabled />
                        </div>
                    </div>
                </div>)}
            </div>


        </div>

        <div className="order-form">
            <div className="container usuario-info">
                <form className="form-horizontal">
                    <h2>Datos</h2>
                    <hr />

                    <div className="form-group row" key={userData['id']}>
                        <label className="col-sm-2 control-label"> ID </label>
                        <div className="col-sm-9 in">
                            <input
                                className="form-control"
                                type="text"
                                disabled
                                value={userData['id']}
                            />
                        </div>
                    </div>

                    <div className="form-group row" key={userData['fechaMontado']}>
                        <label className="col-sm-2 control-label"> Fecha de Inicio </label>
                        <div className="col-sm-9 in">
                            <input
                                className="form-control"
                                type="text"
                                disabled
                                value={userData['fechaMontado']}
                            />
                        </div>
                    </div>

                    <div className="form-group row" key={userData['usuario']}>
                        <label className="col-sm-2 control-label"> Usuario </label>
                        <div className="col-sm-9 in">
                            <input
                                className="form-control"
                                type="text"
                                disabled
                                value={userData['usuario']}
                            />
                        </div>
                    </div>
                    <div className="form-group row" key={userData['proxApuesta']}>
                        <label className="col-sm-2 control-label"> Próxima Apuesta </label>
                        <div className="col-sm-9 in">
                            <input
                                className="form-control"
                                type="text"
                                disabled
                                value={userData['proxApuesta']}
                            />
                        </div>
                    </div>



                </form>
            </div>
        </div>

    </>
    )
}
