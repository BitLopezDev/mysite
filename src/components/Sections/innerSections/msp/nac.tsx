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
                    <h5> Una de las soluciones más avanzadas y efectivas para proteger las redes de las organizaciones es el Network Access Control (NAC). El NAC permite controlar el acceso a la red de forma dinámica y flexible, basándose en la identidad, el rol y el estado de los dispositivos. De esta forma, el NAC puede ayudar a las organizaciones a proteger sus redes contra una variedad de amenazas, incluyendo malware, dispositivos y usuarios no autorizados.<br /><br />

El NAC puede ayudar a las organizaciones a ser más eficientes al automatizar el proceso de autorización de acceso a la red. El NAC puede verificar el cumplimiento de las políticas de seguridad de los dispositivos antes de permitirles el acceso, y aplicar medidas correctivas si es necesario. Así, el NAC puede evitar que los dispositivos vulnerables o comprometidos pongan en riesgo la seguridad de la red.<br /><br />

El NAC puede ayudar a las organizaciones a reducir sus costes de seguridad al evitar que los dispositivos no autorizados accedan a la red. El NAC puede detectar y bloquear el acceso a la red a dispositivos no autorizados, como dispositivos infectados con malware, dispositivos personales o dispositivos robados. De esta forma, el NAC puede prevenir la pérdida de datos, el robo de información y la propagación de ataques.<br /><br />

El NAC es una herramienta valiosa para las organizaciones que buscan proteger sus redes contra una variedad de amenazas. El NAC puede ayudar a las organizaciones a mejorar su seguridad, eficiencia y costes. El NAC es una solución sofisticada y tecnológica que ofrece múltiples beneficios para las organizaciones que quieren mantener sus redes seguras y protegidas. <br /><br />
                        <b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { NAC };