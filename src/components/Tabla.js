import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { getData } from '../helpers/getData';
import getIconStatus from '../helpers/getIconsStatus';

import './css/Tabla.css';

import { useHistory } from "react-router-dom";

/*
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});*/

const data = getData();


export function Tabla() {

    const history = useHistory();

    
    //const classes = useStyles();
    
    const handleClick = (id) => {
        history.push(`usuario/${id}`);
    }
    
  return (
      <div className='table-wrapper'>
          <table className='fl-table'>
            <thead>
                <tr>
                    <th> ID </th>
                    <th> Fecha y hora de inicio </th>
                    <th> Usuario </th> 
                    <th> Wplay </th> 
                    <th> Próxima apuesta </th> 
                </tr>
            </thead>
            <tbody>
            {data.map((row) => (
                <tr key={row.id} onClick={() => handleClick(row.id) } id={row.id} style={{ cursor: "pointer" }}>
                    <td> {row.id} </td>
                    <td>{row.fechaMontado}</td>            
                    <td>{row.usuario}</td>            
                    <td> { getIconStatus(row.wplay) } </td>                
                    <td>{row.proxApuesta}</td>            
                </tr>
          ))}
            </tbody>
          </table>
      </div>
  );
}

//<CheckCircleIcon style={{ color: 'green' }}/>
