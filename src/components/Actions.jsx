import React, { useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

function Actions(){

    const [contadorValue, setContadorValue] = useState(0);


    function handleClick(){
        setContadorValue(contadorValue + 1);
    }

    return(
        <div className='action'>
            <button onClick={handleClick}><AddRoundedIcon sx={{fontSize: 150}}/></button>
            <button><RemoveRoundedIcon sx={{fontSize: 150}}/></button>
        </div>
    )
    
}

export default Actions;