import React from 'react';

import StarIcon from '@material-ui/icons/Star';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function getIconStatus(statusCasa){
    let iconReturn;
    if(statusCasa !== 'liberado' ){
        iconReturn = statusCasa.map( (status, idx) =>  <StarIcon key = {idx} color={status?'primary':'disabled'} /> );
    } else {
        iconReturn = <CheckCircleIcon style={{ color: 'green' }}/>
    }
    return iconReturn;
};