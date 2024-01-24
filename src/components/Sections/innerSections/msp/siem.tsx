import React from 'react';
import { Image, Item } from 'semantic-ui-react';
// import intelimage from './../../../../../public/images/threat intelligence 1.png'

 import MicrosoftSIEM from './../../../../../public/images/MicrosoftSIEM.png'


const SIEM = () => {
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
                        <Image src={Object.entries(MicrosoftSIEM)[0].slice(1)} alt="No se pudo cargar la imagen"/>  <br />
                       

                       

                    </Item.Image>

                   
                </Item>
                <Item style={{overflowY:'scroll', maxHeight:300}}>
                    <h5>Los sistemas SIEM (Security Information and Event Management) son soluciones de ciberseguridad que recopilan, analizan y alertan sobre los datos de seguridad de múltiples fuentes en una organización. Los sistemas SIEM utilizan inteligencia artificial para filtrar las alertas y aliviar la sobrecarga de trabajo para el equipo SOC (Security Operations Center). De esta forma, los sistemas SIEM permiten detectar y responder a las amenazas de forma rápida y eficaz.
                    <br /><br />
Los sistemas SIEM ofrecen las siguientes ventajas para la seguridad de la información:
<br /><br />
- Recopilan datos de seguridad de aplicaciones, dispositivos, servidores y usuarios en tiempo real, lo que proporciona una visión centralizada y completa de la actividad de la red.
- Analizan los datos de seguridad para identificar patrones, anomalías y correlaciones que puedan indicar una actividad maliciosa o un intento de intrusión.
- Alertan a los equipos de seguridad sobre las amenazas potenciales y les proporcionan información relevante para investigar y resolver los incidentes.
- Los sistemas SIEM pueden ayudar a los equipos de seguridad a responder a las amenazas con acciones automatizadas o manuales, como bloquear el acceso, aislar el dispositivo o enviar notificaciones.
- Los sistemas SIEM facilitan el cumplimiento normativo al generar informes y auditorías sobre la gestión de los datos de seguridad.
<br /><br />
Los sistemas SIEM son soluciones sofisticadas y poderosas que pueden mejorar la protección y la resiliencia de una organización frente a los ciberataques. Al utilizar un sistema SIEM, se puede obtener una mayor visibilidad, inteligencia y capacidad de respuesta sobre la seguridad de la información.
<br /> <br /><b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { SIEM };