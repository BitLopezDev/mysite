import React from 'react';
import { Image, Item } from 'semantic-ui-react';
// import intelimage from './../../../../../public/images/threat intelligence 1.png'

 import secure from './../../../../../public/images/sassy.png'


const SASE = () => {
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
                        <Image src={Object.entries(secure)[0].slice(1)} alt="No se pudo cargar la imagen"/>  <br />
                       

                       

                    </Item.Image>

                   
                </Item>
                <Item>
                    <h5>Defienda su red y sus recursos sin perder capacidad de conectar a sus usuarios, sistemas, endpoints, servidores y redes externas a aplicaciones y recursos aumentando la capacidad del tradicional SD-WAN siéndole fiel a la filosofía Zero Trust.
                        <br />
                        <b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { SASE };