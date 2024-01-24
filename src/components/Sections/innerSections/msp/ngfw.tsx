import React from 'react';
import { Image, Item } from 'semantic-ui-react';
// import intelimage from './../../../../../public/images/threat intelligence 1.png'

 import servers from './../../../../../public/images/servers.png'

const video = '/videos/video4.mp4';
const NGFW = () => {
    const description = "Manténgase un paso más adelante que las ciberamenazas actuales, incluso las más complejas, con Cyber Threat Intelligence";
    /* 
    ['Name', 'Image', 'certification', "completion"]
    */
   
    return (

        <React.Fragment>
            {/* <Arsenal which={"intel"}  description={description} mediaurl={video} video={true}/> */}
            <Item.Group >
                <Item >
                    <Item.Image size='huge'  >
                        {/* <FullStackModal /> */}
                        {/* https://react.semantic-ui.com/images/wireframe/image.png */}
                        {/* ./../../../../public/assets/users/Santiago/credenciales/Platzi/FullStackJS.png */}
                        <Image src={Object.entries(servers)[0].slice(1)} alt="No se pudo cargar la imagen"/>  <br />
                       

                       

                    </Item.Image>

                   
                </Item>
                <Item style={{overflowY:'scroll', maxHeight:300}}>
                    <h5>Un firewall de próxima generación (NGFW) es una solución de seguridad que ofrece una protección avanzada contra las amenazas cibernéticas. Un NGFW no solo bloquea el tráfico malicioso, sino que también analiza el comportamiento de los usuarios, las aplicaciones y los dispositivos para detectar y prevenir ataques sofisticados.
                    <br /><br />
Un NGFW utiliza la inteligencia artificial (AI) y Machine Learning (ML) e inteligencia de amenazas (Cyber Threat Intelligence) para mejorar la visibilidad de la red y reducir la complejidad del entorno de seguridad. Un NGFW es más poderoso que un firewall común, ya que puede filtrar el contenido, prevenir la intrusión y filtrar las amenazas que intentan evadir las defensas tradicionales.
<br /><br />
Un NGFW es una solución ideal para las organizaciones que buscan mejorar su seguridad cibernética y proteger sus datos, activos e infraestructura. Un NGFW ofrece una protección integral, eficaz y sofisticada contra las amenazas actuales y futuras.<br /><br />
                    <b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { NGFW };