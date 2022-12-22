const API_KEY = '483acdcbfe2746a1a431a259182e5bb5'
const NOTICIA_API = 'https://newsapi.org/v2/everything';


export const obtenerNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${NOTICIA_API}?q=${criterioBusqueda}&apikey=${API_KEY}&page${paginaActual}&pageSize=10&language=es`);
    const noticias = await respuesta.json();
    console.log(noticias);
    return noticias;
}
