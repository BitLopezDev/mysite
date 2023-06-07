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
                    <Item.Image size='giant'  >
                        {/* <FullStackModal /> */}
                        {/* https://react.semantic-ui.com/images/wireframe/image.png */}
                        {/* ./../../../../public/assets/users/Santiago/credenciales/Platzi/FullStackJS.png */}
                        <Image src={Object.entries(MicrosoftSIEM)[0].slice(1)} alt="No se pudo cargar la imagen"/>  <br />
                       

                       

                    </Item.Image>

                   
                </Item>
                <Item>
                    <h5>Proteja su organización reconociendo amenazas externas o internas, vulnerabilidades y operaciones maliciosas antes de que interrumpas sus operaciones comerciales, violen la continuidad de negocio y lo perjudiquen económica, reputacional o, incluso, legalmente.<br />
                    Para ello utilizmos Microsoft Azure Sentinel: un SIEM que utiliza Inteligencia Artificial de punta para protegerlo a usted y a su nnegocio.
                    <br /><b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { SIEM };