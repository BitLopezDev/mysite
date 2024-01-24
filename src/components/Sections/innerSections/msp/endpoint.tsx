import React from 'react';
import { Image, Item } from 'semantic-ui-react';
// import intelimage from './../../../../../public/images/threat intelligence 1.png'

 import edrxdr from './../../../../../public/images/processorEdrXdr.png'


const EndpointProtection = () => {
    const description = "Manténgase un paso más adelante que las ciberamenazas actuales, incluso las más complejas, con Cyber Threat Intelligence";
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
                        <Image src={Object.entries(edrxdr)[0].slice(1)} alt="No se pudo cargar la imagen"/>  <br />
                       

                       

                    </Item.Image>

                   
                </Item>
                <Item style={{overflowY:'scroll', maxHeight:300}}>
                    <h5>Si busca una solución de ciberseguridad que le ofrezca una mayor visibilidad, protección y respuesta para sus endpoints, XDR y EDR son las opciones ideales para usted. Estas son las ventajas que le ofrecen:
                    <br />
                    <br />- Visibilidad: XDR y EDR le permiten monitorizar y analizar la actividad de sus endpoints en tiempo real, detectando cualquier anomalía o indicador de compromiso (IoC). Así, podrá identificar y responder a las amenazas antes de que causen daños mayores.
<br />- Protección: XDR y EDR le proporcionan una serie de capas de defensa para sus endpoints, que incluyen antivirus, antimalware, firewall, prevención de intrusiones, control de aplicaciones, cifrado y más. Así, podrá prevenir y bloquear los ataques más sofisticados y variados.
<br />- Respuesta: XDR y EDR le facilitan la investigación y la respuesta a las amenazas, al ofrecerle herramientas como el aislamiento de endpoints, la eliminación de malware, la restauración de archivos, el análisis forense y la automatización de acciones. Así, podrá contener y remediar los incidentes de forma rápida y eficaz.
<br /><br />
XDR y EDR son soluciones integradas que le permiten gestionar la seguridad de sus endpoints desde una única plataforma, ahorrando tiempo y recursos. Además, son soluciones escalables y flexibles que se adaptan a las necesidades de su organización.
<br />  <br /><b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { EndpointProtection };