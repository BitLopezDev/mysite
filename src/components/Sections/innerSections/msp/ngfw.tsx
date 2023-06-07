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
                    <Item.Image size='giant'  >
                        {/* <FullStackModal /> */}
                        {/* https://react.semantic-ui.com/images/wireframe/image.png */}
                        {/* ./../../../../public/assets/users/Santiago/credenciales/Platzi/FullStackJS.png */}
                        <Image src={Object.entries(servers)[0].slice(1)} alt="No se pudo cargar la imagen"/>  <br />
                       

                       

                    </Item.Image>

                   
                </Item>
                <Item>
                    <h5>Defienda sus endpoints, servidores, dispositivos IoT, recursos, aplicaciones, correo y red con un Firewall de red Next-Gen, con Sistema de Prevensión de Intrusos Next-Gen (IPS), análisis dinámico de archivos y DLP incorporado contra ataques de día cero, exploits, ransomeware, phising, fraude, virus, rootkits, troyanos, movimiento lateral, acceso de terceros no autorizados, entre tantas otras cosas.<br />
                    <b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { NGFW };