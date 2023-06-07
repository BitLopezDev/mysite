import React from 'react';
import { Image, Item } from 'semantic-ui-react';
// import intelimage from './../../../../../public/images/threat intelligence 1.png'

 import officesecurity from './../../../../../public/images/officesecurity.png'


const OfficeSecurity = () => {
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
                        <Image src={Object.entries(officesecurity)[0].slice(1)} alt="No se pudo cargar la imagen"/>  <br />
                       

                       

                    </Item.Image>

                   
                </Item>
                <Item>
                    <h5>
                        Proteja su negocio con seguridad específica para Microsoft Office y su correo. Es ideal para empresas cuyo trabajo depende altamente de documentos de ofimática y correo. <br />
                        Microsoft Defender for Office 365 y Microsoft 365 Defender ofrecen seguridad dirigida a esos servicios y aplicaciones para su tranquilidad, la de sus empleados, la de sus clientes, y la suya.
                    <br /><b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { OfficeSecurity };