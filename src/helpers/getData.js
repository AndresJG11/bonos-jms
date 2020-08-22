
export const getData = (id) => {
    const createData = (id, fechaMontado, usuario, wplay, proxApuesta, apuestas) => {
        return { id, fechaMontado, usuario, wplay, proxApuesta, apuestas};
    }

    const createApuesta = (id, estado='pendiente') => {
        return {numero: id, nombreEvento: 'De Greef, Arthur vs Maden, Yannick', estado, mercado: 'Ganador Evento Team 1', fecha: '18/8/2020', horaInicio: '13:30', horaFinal: '15:00'}
    }
    
    const rows = [
            createData(0, '19/08/2020 10:00', 'Andrés Jiménez García', [true, true, true, false, false, false], '20/08/20 15:32', [createApuesta(1, 'ganada'), createApuesta(2, 'ganada'), createApuesta(3, 'perdida'), createApuesta(4), createApuesta(5)] ),
            createData(1, '19/08/2020 10:00', 'Andrés Jiménez García', [true, true, true, false, false, false], '20/08/20 15:32', [createApuesta(1, 'ganada'), createApuesta(2, 'ganada'), createApuesta(3, 'perdida'), createApuesta(4), createApuesta(5)] ),
            createData(2, '19/08/2020 10:00', 'Andrés Jiménez García', 'liberado', '20/08/20 15:32', [createApuesta(1, 'ganada'), createApuesta(2, 'ganada'), createApuesta(3, 'perdida'), createApuesta(4), createApuesta(5)] ),
            createData(3, '19/08/2020 10:00', 'Andrés Jiménez García', [true, true, true, false, false, false], '20/08/20 15:32', [createApuesta(1, 'ganada'), createApuesta(2, 'ganada'), createApuesta(3, 'perdida'), createApuesta(4), createApuesta(5)] ),
            createData(4, '19/08/2020 10:00', 'Andrés Jiménez García', [true, true, true, false, false, false], '20/08/20 15:32', [createApuesta(1, 'ganada'), createApuesta(2, 'ganada'), createApuesta(3, 'perdida'), createApuesta(4), createApuesta(5)] ),
            createData(5, '19/08/2020 10:00', 'Andrés Jiménez García', [true, true, true, false, false, false], '20/08/20 15:32', [createApuesta(1, 'ganada'), createApuesta(2, 'ganada'), createApuesta(3, 'perdida'), createApuesta(4), createApuesta(5)] ),
            
        ];
        
    if (!!!id) {
        return (rows);
    } else {
        return(rows[id])
    }
}
