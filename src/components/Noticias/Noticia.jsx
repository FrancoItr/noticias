import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { DateTime } from 'luxon'

const Noticia = ({ noticia }) => {
    const theme = useTheme();
    // const ventana = document.getElementById('vent')
    // ventana.window.open(noticia.url, '_blank')
    return (
        <a>
            <Card sx={{ display: 'flex' }} id="vent">
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {noticia.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {noticia.description}
                    </Typography>
                    <Typography>
                        Publicado el ${DateTime.fromISO('noticia.publishedAt').toFormat('dd MM yy')};
                    </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151, margin: 5 }}
                    image={noticia.urlToImage}
                />
            </Card>
        </a>
    );
}

export const ListaNoticias = ({ noticias }) => {
    return noticias.map((noticia, index) => {
        return <Noticia 
            noticia={noticia} 
            key={index}
            {...noticia}
        />
    });
}

export default Noticia;