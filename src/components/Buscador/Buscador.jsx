import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Buscador = ({ onBuscar }) => {
    const [criterioBusqueda, setCriterioBusqueda] = useState('');


    return (
        <Box
            sx={{
                display: 'inline',
                alignItems: 'center',
                '& > :not(style)': { m: 1 },
            }}
        >
            <TextField 
                sx={{ display: 'block' }}
                id="demo-helper-text-misaligned-no-helper"  
                label=""
                value={criterioBusqueda}
                onChange={(e)=> {
                    setCriterioBusqueda(e.target.value)
                    let longitud = e.target.value.length
                    if (longitud > 2) {
                        let botonBuscar = document.getElementById('botonBuscar');
                        botonBuscar.classList.remove('Mui-disabled');
                        }else {
                            let botonBuscar = document.getElementById('botonBuscar');
                            botonBuscar.classList.add('Mui-disabled');
                            botonBuscar.removeAttribute('disabled');
                    }
                }}
            />
                <Button 
                    id='botonBuscar'
                    variant="outlined"
                    onClick={() => {
                        onBuscar(criterioBusqueda);
                    }}
                    role="button"
                >Buscar</Button>
        </Box>
    );
}

export default Buscador;
