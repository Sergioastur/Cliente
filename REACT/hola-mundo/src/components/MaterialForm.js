import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import HomeIcon from '@mui/icons-material/Home'
const MaterialForm = () => {
return (
<>
<h3>Botones</h3>
<Box component='form' noValidate autoComplete='off'
sx = {{'& .MuiTextField-root': {m: 1, width: '25ch'}, }}>
<div>
<TextField required id='outlined-required' label="Required"
defaultValue="Hola, mundo" />
</div>
<Button variant='contained'>
Inicio<HomeIcon fontSize='small' />
</Button>
</Box>
</>
)
}
export default MaterialForm;