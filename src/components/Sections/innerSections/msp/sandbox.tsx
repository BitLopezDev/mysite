import React from 'react';
import { Image, Item } from 'semantic-ui-react';
// import intelimage from './../../../../../public/images/threat intelligence 1.png'

 import sandbox from './../../../../../public/images/sandbox.png'


const Sandbox = () => {
    
    /* 
    ['Name', 'Image', 'certification', "completion"]
    */
   
    return (

        <React.Fragment>
            {/* <Arsenal which={"intel"}  description={description} mediaurl={video} video={true}/> */}
            <Item.Group >
                <Item >
                    <Item.Image size='huge'  >
                        {/* <FullStackModal /> */}
                        {/* https://react.semantic-ui.com/images/wireframe/image.png */}
                        {/* ./../../../../public/assets/users/Santiago/credenciales/Platzi/FullStackJS.png */}
                        <Image src={Object.entries(sandbox)[0].slice(1)} alt="No se pudo cargar la imagen"/>  <br />
                       

                       

                    </Item.Image>

                   
                </Item>
                <Item style={{overflowY:'scroll', maxHeight:300}}>
                    <h5>
                    Inline Sandbox es una herramienta de tecnología de punta que permite proteger la organización de cyberamenazas desconocidas sin afectar al negocio por vía de análisis dinámico de archivos.  
                    <br /><br />
Esta solución ofrece una cyberinteligencia avanzada y tiene la mejor comprensión sobre las cyberamenazas que pueden comprometer la seguridad y la continuidad de las operaciones. Inline Sandbox utiliza inteligencia artificial (AI) de punta para detectar y prevenir las amenazas nóveles más sofisticadas y evasivas que escapan a los sistemas tradicionales de protección. Con Inline Sandbox, se puede contar con una solución sofisticada, eficaz y confiable para garantizar la cyberseguridad de la organización.


<br /> <br /><b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { Sandbox };