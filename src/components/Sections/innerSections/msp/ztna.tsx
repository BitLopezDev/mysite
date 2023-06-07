import React from 'react';
import { Image, Item } from 'semantic-ui-react';
// import intelimage from './../../../../../public/images/threat intelligence 1.png'

 import zerotrust from './../../../../../public/images/zerotrustnetwork.png'

const video = '/videos/video4.mp4';
const ZTNA = () => {
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
                        <Image src={Object.entries(zerotrust)[0].slice(1)} alt="No se pudo cargar la imagen"/>  <br />
                       

                       

                    </Item.Image>

                   
                </Item>
                <Item>
                    <h5>Defienda su red y su organización a través de una arquitectura ZERO TRUST. Impida el acceso de dispositivos y personal que no haya verificado sus credenciales.<br />
                    Gracias a software como el ZTNA de Sophos Labs, se puede garantizar que el dispositivo que accede a la red es <i>el</i> dispositivo del usuario y que está libre de cualquier programa malicioso que pudiere representar una amenaza para la organización, sus recursos y la continuidad del negocio.<br />
                    <b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { ZTNA };