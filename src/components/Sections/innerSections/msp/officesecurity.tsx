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
                <Item style={{overflowY:'scroll', maxHeight:300}}>
                    <h5>
                    El email es el vector de ataque más explotado, y la puerta de entrada más vulnerable. Por eso, es fundamental contar con una solución de seguridad que proteja el correo electrónico y las herramientas de colaboración contra amenazas avanzadas como la suplantación de identidad y el correo electrónico empresarial comprometido.<br /><br />

Microsoft 365 Defender ofrece seguridad integrada dentro de Office, con las ventajas de seguridad que eso implica. Microsoft 365 Defender utiliza inteligencia artificial para identificar y bloquear las amenazas de forma más rápida y eficaz. Además, Microsoft 365 Defender automatiza muchas tareas de seguridad, lo que ayuda a los equipos de seguridad a ser más eficientes.
<br /><br />
Microsoft 365 Defender proporciona una mejor visibilidad y protección en todos los puntos de conexión, identidades, correo electrónico y aplicaciones en la nube. Microsoft 365 Defender es escalable, por lo que puede adaptarse fácilmente a las necesidades de las organizaciones de cualquier tamaño. Microsoft 365 Defender es una herramienta valiosa para las organizaciones que buscan mejorar su postura de seguridad.
<br /><br />
Microsoft 365 Defender puede ayudar a las organizaciones a reducir sus costes de seguridad, al ofrecer una solución unificada que coordina la detección, prevención, investigación y respuesta entre los diferentes dominios. Microsoft 365 Defender evita automáticamente que las amenazas vulneren la organización y detiene ataques antes de que sucedan. Microsoft 365 Defender también realiza una acción automática para evitar o detener el ataque y recuperar automáticamente los buzones afectados, los puntos de conexión y las identidades de usuario.
<br /><br />
Microsoft 365 Defender es una solución líder del sector que ofrece una protección integrada contra ataques sofisticados.
<br /> <br /><b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { OfficeSecurity };