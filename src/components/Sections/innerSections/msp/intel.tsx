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
                    <Item.Image size='giant'  >
                        {/* <FullStackModal /> */}
                        {/* https://react.semantic-ui.com/images/wireframe/image.png */}
                        {/* ./../../../../public/assets/users/Santiago/credenciales/Platzi/FullStackJS.png */}
                       <video autoPlay loop style={{ width: '100%' }}>
            <source src= '/videos/video4.mp4' type="video/mp4" />
            Sorry, your browser does not support videos.
          </video>  <br />
                       

                       

                    </Item.Image>

                   
                </Item>
                <Item>
                    <h5>Manténgase un paso más adelante que las ciberamenazas actuales, incluso las más complejas, con <b>Cyber Threat Intelligence</b>.<br />
                    Herramientas como <b>Microsoft Defender Threat Intelligence</b>, <b>Intezer</b>, <b>Kaspersky Threat Intelligence Portal</b> y <b>VirusTotal</b> a su alcance para mantenerlo seguro a usted, sus empleados, y su negocio.<br />
                    <b>Hoy, la seguridad está en sus manos.</b>
                    
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { Intel };