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
                <Item style={{overflowY:'scroll', maxHeight:300}}>
                    <h5>Secure Access Service Edge (SASE) es una arquitectura de seguridad que combina las capacidades de red definida por software (SD-WAN) y las soluciones de seguridad de confianza cero (Zero Trust) en una plataforma integrada en la nube que conecta de forma segura a los usuarios, sistemas, endpoints y redes remotas con las aplicaciones y recursos.
                    <br /><br />
SASE tiene cuatro características principales:
<br /><br />
- Basada en la identidad: el acceso se concede en función de la identidad de los usuarios y los dispositivos.<br />
- Nativa de la nube: tanto la infraestructura como las soluciones de seguridad se entregan en la nube.<br />
- Compatible con todos los bordes: se protege cada borde físico, digital y lógico.<br />
- Distribuida globalmente: los usuarios están protegidos independientemente de dónde trabajen.
<br /><br />
El objetivo principal de la arquitectura SASE es proporcionar una experiencia de usuario fluida, una conectividad optimizada y una seguridad integral de una forma que apoye las necesidades dinámicas de acceso seguro de las empresas digitales. En lugar de reenviar el tráfico a los centros de datos tradicionales o a las redes privadas para las inspecciones de seguridad, SASE permite a los dispositivos y sistemas remotos acceder sin problemas a las aplicaciones y recursos dondequiera que estén y en cualquier momento, de manera segura.
<br /><br />
SASE se puede descomponer en seis elementos esenciales:
<br /><br />
- Red definida por software de área amplia (SD-WAN): una red definida por software de área amplia es una arquitectura superpuesta que utiliza software de enrutamiento o conmutación para crear conexiones virtuales entre endpoints, tanto físicos como lógicos. Las SD-WAN proporcionan caminos casi ilimitados para el tráfico de los usuarios, lo que optimiza la experiencia del usuario, y permiten una gran flexibilidad en el cifrado y la gestión de políticas.<br />
- Pasarela web segura (SWG): una pasarela web segura es un servicio de seguridad web que filtra el tráfico no autorizado para acceder a una red determinada. El objetivo de una SWG es detectar las amenazas antes de que penetren en el perímetro virtual. Una SWG lo consigue combinando tecnologías como la detección de código malicioso, la eliminación de malware y el filtrado de URL.<br />
- Agente de seguridad de acceso a la nube (CASB): un agente de seguridad de acceso a la nube es una aplicación SaaS que actúa como un punto de control de seguridad entre las redes locales y las aplicaciones basadas en la nube y hace cumplir las políticas de seguridad de datos. Un CASB protege los datos corporativos mediante una combinación de técnicas de prevención, monitorización y mitigación. También puede identificar comportamientos maliciosos y advertir a los administradores sobre violaciones del cumplimiento.<br />
- Firewall como servicio (FWaaS): el firewall como servicio traslada la protección del firewall a la nube en lugar del perímetro tradicional. Esto permite a las organizaciones conectar de forma segura a una fuerza laboral remota y móvil con la red corporativa, a la vez que hacen cumplir políticas de seguridad coherentes que van más allá del alcance geográfico de la organización.<br />
- Acceso a la red basado en confianza cero (ZTNA): el acceso a la red basado en confianza cero es un modelo que elimina el concepto tradicional del perímetro seguro y asume que ningún usuario o dispositivo es digno de confianza por defecto. En su lugar, ZTNA verifica continuamente la identidad y el contexto del usuario antes y durante cada sesión, aplicando políticas granulares para conceder o denegar el acceso según sea necesario.

                        <br /><br />
                        <b>Hoy, la seguridad está en sus manos.</b>
                    </h5>
                </Item>
            </Item.Group>
        </ React.Fragment>

    );

}

export { SASE };