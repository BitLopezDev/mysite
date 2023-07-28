import React from 'react';
import { Image, Item } from 'semantic-ui-react';
// import intelimage from './../../../../../public/images/threat intelligence 1.png'

 import ndrpic from './../../../../../public/images/NDR.png'


const NDR = () => {
    
    /* 
    ['Name', 'Image', 'certification', "completion"]
    */
   
    return (

        <React.Fragment>
            {/* <Arsenal which={"intel"}  description={description} mediaurl={video} video={true}/> */}
            <Item.Group >
                <Item >
                    <Item.Image size='giant'  >
                        {/* <FullStackModal /> */}
                        {/* https://react.semantic-ui.com/images/wireframe/image.png */}
                        {/* ./../../../../public/assets/users/Santiago/credenciales/Platzi/FullStackJS.png */}
                        <Image src={Object.entries(ndrpic)[0].slice(1)} alt="No se pudo cargar la imagen"/>  <br />
                       

                       

                    </Item.Image>

                   
                </Item>
                <Item style={{overflowY:'scroll', maxHeight:300}}>
                    <h5> NDR es una tecnología que utiliza el machine learning para analizar el comportamiento de la red y detectar anomalías que puedan indicar la presencia de un ataque. NDR no solo alerta sobre las posibles amenazas, sino que también proporciona información contextual y recomendaciones para facilitar la respuesta y la remediación. NDR mejora la visibilidad de la red y su tráfico, lo que permite identificar los puntos débiles, optimizar el rendimiento y reducir los riesgos.
                        <br /> <br />
NDR es una solución innovadora, eficiente y efectiva para garantizar la seguridad de la red y la continuidad del negocio. Con NDR, se puede contar con una protección proactiva, inteligente y automatizada, que se anticipa a los ataques y los neutraliza antes de que causen daños irreparables. NDR es la mejor opción para enfrentar los desafíos actuales y futuros de la ciberseguridad.

                        <br /><br />
                        <b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { NDR };