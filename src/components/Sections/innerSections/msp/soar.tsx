import React from 'react';
import { Image, Item } from 'semantic-ui-react';
// import intelimage from './../../../../../public/images/threat intelligence 1.png'

 import SOARIBM from './../../../../../public/images/IBM SOAR.png'


const SOAR = () => {
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
                        <Image src={Object.entries(SOARIBM)[0].slice(1)} alt="No se pudo cargar la imagen"/>  <br />
                       

                       

                    </Item.Image>

                   
                </Item>
                <Item>
                    <h5>
                       Proteja su negocio con seguridad orquestada y automática. Por la abrumante cantidad de alertas, los equipos de seguridad revisan en promedio la mitad de las alertas de seguridad.
                       Evite agotar a su equipo y obtener los mejores resultados con SOAR.
                       A medida que las empresas crecen, se van dando cuenta de la necesidad de SIEM y SOAR. 
                       <br /><b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { SOAR };