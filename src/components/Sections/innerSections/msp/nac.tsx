import React from 'react';
import { Image, Item } from 'semantic-ui-react';
// import intelimage from './../../../../../public/images/threat intelligence 1.png'

 import nacpic from './../../../../../public/images/NAC.png'


const NAC = () => {
    
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
                        <Image src={Object.entries(nacpic)[0].slice(1)} alt="No se pudo cargar la imagen"/>  <br />
                       

                       

                    </Item.Image>

                   
                </Item>
                <Item>
                    <h5> Los cybercriminales son capaces de penetrar más del 90% de las redes corpotarivas. Defienda su red y sus recursos de agentes externos, incluidos dispositivos IoT, mediante un control de accesso fuerte, eficiente y eficaz. La seguridad de su negocio está definida por su eslabón más débil, que muchas veces son dispositivos IoT. Con un NAC, puede proteger su red.
                        <br />
                        <b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { NAC };