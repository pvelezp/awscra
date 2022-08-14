import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import styled from 'styled-components';

const ImageContainer = styled.div`
    >img{
        border-radius:5px;
        width:100%;
 
        margin-bottom:1rem
    }
    >p {
        color:white;
    }
`

const Title = styled.h1`
    margin-bottom:2rem;
    color:white;
    >span{
        margin-left:0.5rem;
        font-size:1rem;
    }
`

const photos = [
    {id:1, description:'Tomar 5 huevos y separarlos en yemas y claras'},
    {id:2, description:'Cortar por la mitad 5 limones'},
    {id:3, description:'Exprimir todos los limones en una taza'},
    {id:4, description:'Licuar todo un paquete grande de galletas de vainilla Field'},
    {id:5, description:'Poner toda la galleta en el pirex'},
    {id:6, description:'Poner mantequilla en la sarten hasta que se derrita'},
    {id:7, description:'Echar mantequilla derretida a la galleta del pirex'},
    {id:8, description:'Mezclarlos bien con la manos...'},
    {id:9, description:'Hasta que quede uniforme así en el pirex'},
    {id:10, description:'Ahora en la licuadora echar toda una tarrita de leche condensada'},
    {id:11, description:'Luego echar toda la tasa de yemas'},
    {id:12, description:'Y echar la tasa de limones'},
    {id:13, description:'Licuar bien los 3 ingredientes'},
    {id:14, description:'Echar el licuado encima de la base de galleta y mantequilla'},
    {id:15, description:'...Hasta que quede bonito y uniforme'},
    {id:16, description:'Prender cuidadosamente el horno'},
    {id:17, description:'Poner el pirex 2 niveles arriba del fuego'},
    {id:18, description:'Cerrar horno y dejar que se cocine por 12 minutos'},
    {id:19, description:'Ahora para hacer el merengue, batiamos las claras de huevo en un bol'},
    {id:20, description:'Le vamos echando un poco de azucar finita al gusto'},
    {id:21, description:'Tip secreto: echar un poco de limón al gusto'},
    {id:22, description:'Luego de que haya pasado 12 minutos sacar el pirex del horno'},
    {id:23, description:'Echar el merengue y ondearlo con cariño '},
    {id:24, description:'Tip: Echarle poquitos de azucar a las puntas'},
    {id:25, description:'Y finalmente meter al horno por 16 minutos. Tip final: Dejar un buen rato que se enfrie para que se no desarme. Tips adicionales: Escuchar 5 buenas canciones para que el pie salga riquísimo. Eso fue todo y a disfrutar!!'},
]

export const Recipe = () => {
    return (
        <>
            <Title>Pie de limón 
            <span>by Laly V.</span>
            </Title>
        <Carousel 
        autoFocus
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        >
       {photos.map(({id,description}) => (
        <ImageContainer key={id}>
            <img alt={id} src={`/assets/${id}.jpeg`} />
            <p >{description}</p>
        </ImageContainer>
       )) }
    </Carousel>
        </>
    )
}
