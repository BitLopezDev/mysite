import React from 'react';
import { Image, Item } from 'semantic-ui-react';
// import intelimage from './../../../../../public/images/threat intelligence 1.png'

 import edrxdr from './../../../../../public/images/EDRXDR.png'

const video = '/videos/video4.mp4';
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
                <Item>
                    <h5>Proteja sus Endpoints con seguridad premiada por autónomos de los líderes de la Industra Bitdefender y Sophos con EDR y XDR, antivirus Next-Gen y tranquilidad garantizada.
                        <br /><b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { EndpointProtection };