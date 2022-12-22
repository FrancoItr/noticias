import Header from "../components/Header/Header";
import Buscador from "../components/Buscador/Buscador";
import "./PaginaNoticias.css";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
import { useState } from "react";
import { obtenerNoticias } from "../servicios/noticias";
import { ListaNoticias } from "../components/Noticias/Noticia";
import Paginador from "../components/Paginador/Paginador";
import { useSearchParams } from 'react-router-dom';
import { useEffect } from "react";


const PaginaNoticias = () => {
    const [noticias, setNoticias] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [pagina, setPagina] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        if(searchParams.get('query')) {
            buscarNoticia(pagina)
        }
    }, [searchParams, pagina]);

    const buscarNoticia = async () => {
        setIsLoading(true);
        const { totalResults, articles: news } = await obtenerNoticias(searchParams.get('query'), pagina);
        setNoticias(news);
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10));
        setIsLoading(false);
    }

    const onBuscar = (criterioBusqueda) => {
        setSearchParams({ query: criterioBusqueda });    
    };
    const onCambioPagina = (pagina) => {
        console.log(pagina);
        setPagina(pagina);
    };
    

    return (
        <main className="paginaNoticias">
            <Header/>
            <Buscador onBuscar={onBuscar} />
            { isLoading && <Loading />}
            { noticias &&  <ListaNoticias noticias={noticias} /> }
            { noticias && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} />}
            <Footer />
        </main>
    );
}

export default PaginaNoticias;