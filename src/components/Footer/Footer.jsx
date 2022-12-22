import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { lightBlue } from '@mui/material/colors';

const Footer = () => {
    return (
        <footer>
            <Box sx={{
                width: '100%',
                maxWidth: '100%',
                bgcolor: lightBlue,
            }}> 
                <Box sx={{
                    my: 3,
                    mx: 2 
                }}>
                </Box>
                <Divider variant="middle" />
                Copyright 2022 - Sobre nosotros - Contacto
                <Box sx={{ m: 2 }}>
                    <Typography gutterBottom variant="body1">
                    </Typography>
                </Box>
            </Box>
        </footer>
    );
}

export default Footer;