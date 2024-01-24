import React from 'react';
import { Image, Item } from 'semantic-ui-react';
import intelimage from './../../../../../public/images/threat intelligence 1.png'


const video = '/videos/video4.mp4';
const Intel = () => {
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
                       <video autoPlay loop style={{ width: '100%' }}>
            <source src= '/videos/video4.mp4' type="video/mp4" />
            Sorry, your browser does not support videos.
          </video>  <br />
                       

                       

                    </Item.Image>

                   
                </Item>
                <Item style={{overflowY:'scroll', maxHeight:300}}>
                    <h5>
                    Threat Intelligence es una disciplina que consiste en recopilar, procesar y analizar datos sobre las amenazas informáticas que pueden afectar a una organización. El objetivo es comprender los motivos, objetivos y comportamientos de los actores maliciosos, sus Técnicas, tácticas y Procedimientos (TTPs), y así tomar mejores decisiones de seguridad basadas en evidencia.<br /><br />
Una de las ventajas de Threat Intelligence es que mejora la visibilidad de la seguridad, al proporcionar una mayor comprensión de las amenazas a las que se enfrenta una organización. Esto permite identificar las vulnerabilidades, priorizar los incidentes, bloquear los ataques y contener y erradicar las amenazas en tiempo real.<br /><br />
Otra ventaja del Threat Intelligence es que reduce el riesgo de seguridad, al facilitar la respuesta a incidentes y la toma de decisiones de seguridad. Al conocer las tácticas, técnicas y procedimientos (TTPs) de los adversarios, se puede anticipar sus movimientos, mitigar su impacto y evitar que se repitan.<br /><br />
Threat Intelligence es un recurso valioso para los diferentes niveles de una organización, desde los equipos operativos hasta los ejecutivos y gerentes. Threat Intelligence ayuda a informar sobre el panorama de las amenazas informáticas (Threat Landscape), las tendencias, los riesgos y el impacto potencial de un ataque. Así, se puede invertir de forma inteligente, eficiente y rápida en la protección de los activos.<br /><br />
Threat Intelligence es un recurso y una solución sofisticada y eficaz para mejorar la ciberseguridad de una organización. Ofrece una visión integral y actualizada de las amenazas informáticas, y permite actuar de forma proactiva y preventiva frente a ellas.

<br /><br />
                        <b>Hoy, la seguridad está en sus manos.</b>
                    
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { Intel };