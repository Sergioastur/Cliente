import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import MaterialForm from './MaterialForm';
import Box from '@mui/material/Box';
import { useState } from 'react';

const MaterialUI = () => {
    const [tabVisible, setTabVisible] = useState(0);
    const manejador = (evento, indice) => {
        console.log(indice);
        setTabVisible(indice);
    }

    return(
        <>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabVisible} onChange={manejador} aria-label='basic tabs example'>
                <Tab label='Inicio' /> 
                <Tab label='Formulario' />
                <Tab label='Otro' />
            </Tabs>
        </Box>
        {tabVisible === 0 && <h2>Inicio</h2>}
        {tabVisible === 1 && <h2>Formulario</h2>}
        {tabVisible === 2 && <h2>Otro</h2>}
        <MaterialForm />
        </>
    )
}
export default MaterialUI;