
export const getData = (id) => {
    const createData = (id, fechaMontado, usuario, wplay, proxApuesta, apuestas) => {
        return { id, fechaMontado, usuario, wplay, proxApuesta, apuestas};
    }

    const createApuesta = (id, estado=false) => {
        return {numero: id, nombreEvento: 'De Greef, Arthur vs Maden, Yannick', estado, mercado: 'Ganador Evento Team 1', fecha: '18/8/2020', horaInicio: '13:30', horaFinal: '15:00'}
    }
    
    const rows = [
            createData(0, '19/08/2020 10:00', 'Andrés Jiménez García', [true, true, true, false, false, false], '20/08/20 15:32', [createApuesta(1, true), createApuesta(2, true), createApuesta(3, true), createApuesta(4), createApuesta(5)] ),
            createData(1, '19/08/2020 10:00', 'Esteban Salazar Martinez', [true, true, true, true, false, false], '20/08/20 15:32', [createApuesta(1, true), createApuesta(2, true), createApuesta(3, true), createApuesta(4), createApuesta(5)] ),
            createData(2, '19/08/2020 10:00', 'Yusbay Alexis Medina', 'liberado', '20/08/20 15:32', [createApuesta(1, true), createApuesta(2, true), createApuesta(3, true), createApuesta(4, true), createApuesta(5, true), createApuesta(6, true) ] ),
            createData(3, '19/08/2020 10:00', 'Ivan Andrés Guapacha', [true, false, false, false, false, false], '20/08/20 15:32', [createApuesta(1, true), createApuesta(2, true), createApuesta(3, true), createApuesta(4), createApuesta(5)] ),
            createData(4, '19/08/2020 10:00', 'Natali Diaz Sepulveda', [true, true, true, true, true, false], '20/08/20 15:32', [createApuesta(1, true), createApuesta(2, true), createApuesta(3, true), createApuesta(4), createApuesta(5)] ),
        ];
        
    if (!!!id) {
        return (rows);
    } else {
        return(rows[id])
    }
}
