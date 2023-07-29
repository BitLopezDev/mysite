import React from "react";
import Head from "next/head";
import bitlopezmsp from './../../public/images/BitLopez MSP.png'
const cybermap = "https://cybermap.kaspersky.com/es/widget/dynamic/dark";
import { Image, Item } from 'semantic-ui-react';
import Fortinet from "./../../public/assets/users/Santiago/services/Fortinet.png";
import IBM from "./../../public/assets/users/Santiago/services/IBM.jpeg";
import Intezer from "./../../public/assets/users/Santiago/services/Intezer.jpeg";
import Kaspersky from "./../../public/assets/users/Santiago/services/Kaspersky.png";
import VirusTotal from './../../public/assets/users/Santiago/services/VirusTotal.jpeg';
import Trellix from "./../../public/assets/users/Santiago/services/Trellix.jpeg";
import Comodo from "./../../public/assets/users/Santiago/services/Comodo.ico";
import Cloudflare from "./../../public/assets/users/Santiago/services/cloudflare.png";
import Bitwarden from './../../public/assets/users/Santiago/services/Bitwarden.ico';
import Sophos from "./../../public/assets/users/Santiago/services/Sophos.ico";
import {MSPTitle} from "../components/Sections/innerSections/msp/msptitle";
import { Navbar } from "../components/Layout/Navbar";
import Layout from '../components/Layout/Layout';

//
// import Kaspersy from "./../../public/images/kaspersky.png";
// import VirusTotal from "./../../public/images/VirusTotal.jpeg";
// import Trellix from "./../../public/images/trellix.png";


import Bitdefender from "./../../public/assets/users/Santiago/services/Bitdefender.ico";
import MSPWhiteICO from "./../../public/assets/users/Santiago/services/MSPWhiteICO.ico";
import Microsoft from "./../../public/assets/users/Santiago/services/Microsoft.png";
import { Nav } from "react-bootstrap";


export default function Labs() {
 
  return (
    <div className='backgradient'>
        
        {/* <iframe
      width={"100%"}
      height={600}
      src={cybermap}
      style={{ paddingBottom: 0, marginBottom: 0 }}
    /> */}



  {/* 
  
  
  */}

<br />
<Head>
          <title>BitLopez MSP</title>
        </Head>
<header >
<Navbar/> 
<h1 className="antigradienttext" style={{ fontSize: "6em", paddingTop:60, paddingLeft:25 }}>
      <i>BitLopez MSP</i>
    </h1>
    <h4 style={{ color: "white", marginLeft: 60 }}>
      Cybersecurity Managed Services Provider y Managed Detection and Response Provider
    </h4>
    <br />
    <h2
      className="antigradienttext"
      style={{ marginLeft: 0, paddingLeft: 25, fontSize: "3.5em" }}
    >
      <i>Seguridad Líder</i>
    </h2>
        </header>
        
        {/* <Layout nav={true} footer={true} paddTop={100} head={true}></Layout> */}
<center style={{paddingTop:10}}>
  <h2 className='colorwhite'>Nuestros vendors de preferencia</h2>

<br />
<div className="scrollmenu">
  <>
  <div className='scrollchild'>
    <Image src={Object.entries(Bitdefender)[0].slice(1)} alt="Chania" Height={100} /></div>  
   
   
   <div className='scrollchild'><Image src={Object.entries(Fortinet)[0].slice(1)} alt="Chania" Height={100} /></div>
   <div className='scrollchild'><Image src={Object.entries(Sophos)[0].slice(1)} alt="Chania" Height={100} /></div> 
   <div className='scrollchild'><Image src={Object.entries(Intezer)[0].slice(1)} alt="Chania" Height={100} /></div>
   <div className='scrollchild'><Image src={Object.entries(Kaspersky)[0].slice(1)} alt="Chania" Height={100} /></div>
   <div className='scrollchild'><Image src={Object.entries(VirusTotal)[0].slice(1)} alt="Chania" Height={100} /></div> 
   {/* <div className='scrollchild'><Image src={Object.entries(Trellix)[0].slice(1)} alt="Chania" Height={100} /></div>  */}
   {/* <div className='scrollchild'><Image src={Object.entries(Comodo)[0].slice(1)} alt="Chania" Height={100} /></div>  */}
   <div className='scrollchild'><Image src={Object.entries(Microsoft)[0].slice(1)} alt="Chania" Height={100} /></div> 
   <div className='scrollchild'><Image src={Object.entries(IBM)[0].slice(1)} alt="Chania" Height={100} /></div>
   <div className='scrollchild'><Image src={Object.entries(Bitwarden)[0].slice(1)} alt="Chania" Height={100} /></div></>
   {/* <h5>Haga scroll a los costados</h5>  */}
   {/* <div className='scrollchild'><Image src={Object.entries(Cloudflare)[0].slice(1)} alt="Chania" Height={100} /></div>   */}
</div>
</center>
<br />
<br />
<center>
<div className="container">
  <h1 className='colorwhite'>Parte de nuestro Arsenal</h1>
<div className="row" id="row0">
    <div className="col">
    <div className="card">
        <div className="card-body">
          <h5 className="card-title">Next-Gen software</h5>
          <p className="card-text">Next Generation Software con las más avanzadas tecnologías, IA y la mejor Threat Intelligence</p>
        </div>
      </div> 
    </div>
    <div className="col">
    <div className="card">
        <div className="card-body">
          <h5 className="card-title">Tecnologías <i>State of the art</i></h5>
          <p className="card-text">Lo último en ciberseguridad con Inteligencia Artificial y Machine Learning, para su seguridad</p>
        </div>
      </div>
    </div>
  </div>
  <br />
  <div className="row" id="row1">
  <h3 className='colorwhite'>Centralización, respuesta y automatización</h3>

<br />
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" data-bs-toggle="collapse" data-bs-target="#soar">SOAR</h5>
          <p className="card-text">Orquestación y automatización de respuestas de su SOC.</p>
          <br />
          <h6><a data-bs-toggle="collapse" data-bs-target="#soar"> Expandir / Colapsar</a></h6>
          <div id="soar" className="collapse">
          Una de las soluciones más avanzadas y eficaces para la gestión de la seguridad cibernética es el SOAR, que significa Security Orchestration, Automation and Response (Orquestación, Automatización y Respuesta de Seguridad). El SOAR utiliza la inteligencia artificial para filtrar las alertas de seguridad que recibe de múltiples fuentes, aliviando así la sobrecarga de trabajo que sufre el equipo SOC (Security Operations Center). 
                    <br /><br />
Además, el SOAR analiza los datos de seguridad para detectar las amenazas más relevantes y alerta a los equipos de seguridad para que puedan actuar rápidamente. 
<br /><br />
Los SOAR también pueden ayudar a los equipos de seguridad a responder a las amenazas de forma eficiente y efectiva, mediante la automatización y la orquestación de una variedad de procesos de seguridad. La automatización implica que el SOAR puede ejecutar acciones predefinidas para mitigar o resolver los incidentes de seguridad, sin necesidad de intervención humana. La orquestación implica que el SOAR puede coordinar las acciones de los diferentes equipos de seguridad, como el equipo de análisis, el equipo de respuesta y el equipo de gestión de riesgos, para que puedan trabajar juntos y compartir información. De esta forma, el SOAR mejora la capacidad de respuesta a las amenazas y reduce el tiempo y el coste de la resolución de incidentes. El SOAR es una solución sofisticada, innovadora e imprescindible para cualquier gran organización que quiera protegerse de las amenazas cibernéticas actuales y futuras.

<br /> <br /><b>Hoy, la seguridad está en sus manos.</b>
<h6><a href='#row0' ><p data-bs-toggle="collapse"  data-bs-target="#soar">Colapsar</p></a></h6>
  </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" data-bs-toggle="collapse" data-bs-target="#xdr">XDR</h5>
          <p className="card-text">Rápida respuesta a eventos y recopilación de datos.</p>
          <br />
          <h6><a data-bs-toggle="collapse" data-bs-target="#xdr"> Expandir / Colapsar</a></h6>
          <div id="xdr" className="collapse">
          Si busca una solución de ciberseguridad que le ofrezca una mayor visibilidad, protección y respuesta para sus endpoints, XDR y EDR son las opciones ideales para usted. Estas son las ventajas que le ofrecen:
                    <br />
                    <br />- Visibilidad: XDR y EDR le permiten monitorizar y analizar la actividad de sus endpoints en tiempo real, detectando cualquier anomalía o indicador de compromiso (IoC). Así, podrá identificar y responder a las amenazas antes de que causen daños mayores.
<br />- Protección: XDR y EDR le proporcionan una serie de capas de defensa para sus endpoints, que incluyen antivirus, antimalware, firewall, prevención de intrusiones, control de aplicaciones, cifrado y más. Así, podrá prevenir y bloquear los ataques más sofisticados y variados.
<br />- Respuesta: XDR y EDR le facilitan la investigación y la respuesta a las amenazas, al ofrecerle herramientas como el aislamiento de endpoints, la eliminación de malware, la restauración de archivos, el análisis forense y la automatización de acciones. Así, podrá contener y remediar los incidentes de forma rápida y eficaz.
<br /><br />
XDR y EDR son soluciones integradas que le permiten gestionar la seguridad de sus endpoints desde una única plataforma, ahorrando tiempo y recursos. Además, son soluciones escalables y flexibles que se adaptan a las necesidades de su organización. <br /><br /><b>Hoy, la seguridad está en sus manos.</b>
<h6><a href='#row0' ><p data-bs-toggle="collapse"  data-bs-target="#xdr">Colapsar</p></a></h6>
  </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" data-bs-toggle="collapse" data-bs-target="#siem">SIEM</h5>
          <p className="card-text">Centralice notificaciones y evite la fatiga por exceso de alertas.</p>
          <br />
          <h6><a data-bs-toggle="collapse" data-bs-target="#siem"> Expandir / Colapsar</a></h6>
          <div id="siem" className="collapse">
          Los sistemas SIEM (Security Information and Event Management) son soluciones de ciberseguridad que recopilan, analizan y alertan sobre los datos de seguridad de múltiples fuentes en una organización. Los sistemas SIEM utilizan inteligencia artificial para filtrar las alertas y aliviar la sobrecarga de trabajo para el equipo SOC (Security Operations Center). De esta forma, los sistemas SIEM permiten detectar y responder a las amenazas de forma rápida y eficaz.
                    <br /><br />
Los sistemas SIEM ofrecen las siguientes ventajas para la seguridad de la información:
<br /><br />
- Recopilan datos de seguridad de aplicaciones, dispositivos, servidores y usuarios en tiempo real, lo que proporciona una visión centralizada y completa de la actividad de la red.
- Analizan los datos de seguridad para identificar patrones, anomalías y correlaciones que puedan indicar una actividad maliciosa o un intento de intrusión.
- Alertan a los equipos de seguridad sobre las amenazas potenciales y les proporcionan información relevante para investigar y resolver los incidentes.
- Los sistemas SIEM pueden ayudar a los equipos de seguridad a responder a las amenazas con acciones automatizadas o manuales, como bloquear el acceso, aislar el dispositivo o enviar notificaciones.
- Los sistemas SIEM facilitan el cumplimiento normativo al generar informes y auditorías sobre la gestión de los datos de seguridad.
<br /><br />
Los sistemas SIEM son soluciones sofisticadas y poderosas que pueden mejorar la protección y la resiliencia de una organización frente a los ciberataques. Al utilizar un sistema SIEM, se puede obtener una mayor visibilidad, inteligencia y capacidad de respuesta sobre la seguridad de la información.
<br /> <br /><b>Hoy, la seguridad está en sus manos.</b>

<h6><a href='#row0' ><p data-bs-toggle="collapse"  data-bs-target="#siem">Colapsar</p></a></h6>
  </div>
        </div>
      </div>
    </div>
    </div>
    <br /> <br />
    <div className="row" id="row2">
    <h3 className='colorwhite'>Protección de red y recursos</h3>

<br />
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" data-bs-toggle="collapse" data-bs-target="#nac"> NAC</h5>
          <p className="card-text">Protección de acceso a la red corportativa por políticas y reglas automatizadas.</p>
          <br />
          <h6><a data-bs-toggle="collapse" data-bs-target="#nac">Expandir / Colapsar</a></h6>
          <div id="nac" className="collapse">
          Una de las soluciones más avanzadas y efectivas para proteger las redes de las organizaciones es el Network Access Control (NAC). El NAC permite controlar el acceso a la red de forma dinámica y flexible, basándose en la identidad, el rol y el estado de los dispositivos. De esta forma, el NAC puede ayudar a las organizaciones a proteger sus redes contra una variedad de amenazas, incluyendo malware, dispositivos y usuarios no autorizados.<br /><br />

El NAC puede ayudar a las organizaciones a ser más eficientes al automatizar el proceso de autorización de acceso a la red. El NAC puede verificar el cumplimiento de las políticas de seguridad de los dispositivos antes de permitirles el acceso, y aplicar medidas correctivas si es necesario. Así, el NAC puede evitar que los dispositivos vulnerables o comprometidos pongan en riesgo la seguridad de la red.<br /><br />

El NAC puede ayudar a las organizaciones a reducir sus costes de seguridad al evitar que los dispositivos no autorizados accedan a la red. El NAC puede detectar y bloquear el acceso a la red a dispositivos no autorizados, como dispositivos infectados con malware, dispositivos personales o dispositivos robados. De esta forma, el NAC puede prevenir la pérdida de datos, el robo de información y la propagación de ataques.<br /><br />

El NAC es una herramienta valiosa para las organizaciones que buscan proteger sus redes contra una variedad de amenazas. El NAC puede ayudar a las organizaciones a mejorar su seguridad, eficiencia y costes. El NAC es una solución sofisticada y tecnológica que ofrece múltiples beneficios para las organizaciones que quieren mantener sus redes seguras y protegidas. <br /><br />
                        <b>Hoy, la seguridad está en sus manos.</b>
                       
                        <h6><a href='#row1' ><p data-bs-toggle="collapse"  data-bs-target="#nac">Colapsar</p></a></h6>
  </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" data-bs-toggle="collapse" data-bs-target="#fw">NEXT-GEN FIREWALL</h5>
          <p className="card-text">Firewalls Powered by Inteligencia Artificial con tecnología de punta.</p>
          <br />
          <h6><a data-bs-toggle="collapse" data-bs-target="#fw"> Expandir / Colapsar</a></h6>
          <div id="fw" className="collapse">
          Un firewall de próxima generación (NGFW) es una solución de seguridad que ofrece una protección avanzada contra las amenazas cibernéticas. Un NGFW no solo bloquea el tráfico malicioso, sino que también analiza el comportamiento de los usuarios, las aplicaciones y los dispositivos para detectar y prevenir ataques sofisticados.
                    <br /><br />
Un NGFW utiliza la inteligencia artificial (AI) y Machine Learning (ML) e inteligencia de amenazas (Cyber Threat Intelligence) para mejorar la visibilidad de la red y reducir la complejidad del entorno de seguridad. Un NGFW es más poderoso que un firewall común, ya que puede filtrar el contenido, prevenir la intrusión y filtrar las amenazas que intentan evadir las defensas tradicionales.
<br /><br />
Un NGFW es una solución ideal para las organizaciones que buscan mejorar su seguridad cibernética y proteger sus datos, activos e infraestructura. Un NGFW ofrece una protección integral, eficaz y sofisticada contra las amenazas actuales y futuras.<br /><br />
                    <b>Hoy, la seguridad está en sus manos.</b>
                  
                    <h6><a href='#row1' ><p data-bs-toggle="collapse"  data-bs-target="#fw">Colapsar</p></a></h6>
                    
  </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" data-bs-toggle="collapse" data-bs-target="#ndr">NDR</h5>
          <p className="card-text">Defienda su red de movimiento lateral, DDoS y responda rápidamente.</p>
          <br />
          <h6><a data-bs-toggle="collapse" data-bs-target="#ndr"> Expandir / Colapsar</a></h6>
          <div id="ndr" className="collapse">
          NDR es una tecnología que utiliza el machine learning para analizar el comportamiento de la red y detectar anomalías que puedan indicar la presencia de un ataque. NDR no solo alerta sobre las posibles amenazas, sino que también proporciona información contextual y recomendaciones para facilitar la respuesta y la remediación. NDR mejora la visibilidad de la red y su tráfico, lo que permite identificar los puntos débiles, optimizar el rendimiento y reducir los riesgos.
                        <br /> <br />
NDR es una solución innovadora, eficiente y efectiva para garantizar la seguridad de la red y la continuidad del negocio. Con NDR, se puede contar con una protección proactiva, inteligente y automatizada, que se anticipa a los ataques y los neutraliza antes de que causen daños irreparables. NDR es la mejor opción para enfrentar los desafíos actuales y futuros de la ciberseguridad.

                        <br /><br />
                        <b>Hoy, la seguridad está en sus manos.</b>
                       
                        <h6><a href='#row1' ><p data-bs-toggle="collapse"  data-bs-target="#ndr">Colapsar</p></a></h6>
  </div>
        </div>
      </div>
    </div>
  </div>
  <br /> <br />
  <div className="row" id="row3">
  <h3 className='colorwhite'>Arquitecturas, modelos, recursos</h3>

<br />
  <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" data-bs-toggle="collapse" data-bs-target="#sase">SASE</h5>
          <p className="card-text">Centralice su seguridad en una arquitectura idónea para ZERO TRUST.</p>
          <br />
          <h6><a data-bs-toggle="collapse" data-bs-target="#sase"> Expandir / Colapsar</a></h6>
          <div id="sase" className="collapse">
          Secure Access Service Edge (SASE) es una arquitectura de seguridad que combina las capacidades de red definida por software (SD-WAN) y las soluciones de seguridad de confianza cero (Zero Trust) en una plataforma integrada en la nube que conecta de forma segura a los usuarios, sistemas, endpoints y redes remotas con las aplicaciones y recursos.
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
                        
                        <h6><a href='#row1' ><p data-bs-toggle="collapse"  data-bs-target="#sase">Colapsar</p></a></h6>
  </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" data-bs-toggle="collapse" data-bs-target="#zt">ZERO TRUST</h5>
          <p className="card-text">Use el modelo de seguridad más efectivo y proteja su red y sus recursos.</p>
          <br />
          <h6><a data-bs-toggle="collapse" data-bs-target="#zt"> Expandir / Colapsar</a></h6>
          <div id="zt" className="collapse">
          El modelo Zero Trust es una estrategia de seguridad de la información que no confía implícitamente en nada dentro o fuera del perímetro de red de una organización. En cambio, requiere autenticación o verificación antes de otorgar acceso a datos confidenciales o recursos protegidos. <br />
Una de las formas de implementar el modelo Zero Trust es desde la perspectiva centrada en la identidad, que se basa en el principio de acceso con privilegios mínimos. Esto significa que solo se otorga el acceso necesario y justo a tiempo a los usuarios y dispositivos, según el contexto y el riesgo de cada solicitud. De esta forma, se limita la superficie de ataque y se evita el movimiento lateral de los atacantes dentro de la red.
<br /><br />
El modelo Zero Trust centrado en la identidad ofrece múltiples beneficios para las organizaciones que quieren mejorar su seguridad y su productividad. Algunos de estos beneficios son:
<br /><br />
- Es lo novedoso: El modelo Zero Trust representa una transformación digital de la seguridad, que se adapta a las necesidades actuales de las organizaciones que operan con una infraestructura de cloud híbrido, una fuerza de trabajo dispersa y una gran cantidad de datos sensibles.<br />
- Es lo más seguro: El modelo Zero Trust supera las limitaciones de la seguridad perimetral tradicional, que se basaba en cortafuegos y otras herramientas basadas en la red para inspeccionar y validar a los usuarios que entraban y salían de la red. Estas herramientas ya no son suficientes para proteger los recursos que se encuentran fuera del perímetro, como las aplicaciones en la nube, los dispositivos móviles o los usuarios remotos. El modelo Zero Trust asume que la red está siempre comprometida y aplica controles estrictos a todos los niveles: usuario, dispositivo, aplicación y dato.<br />
- Es lo más eficaz: El modelo Zero Trust permite a las organizaciones optimizar sus recursos y reducir sus costes al eliminar las soluciones de seguridad redundantes o poco integradas. Además, al ofrecer una experiencia de usuario más fluida y segura, el modelo Zero Trust mejora la productividad y la satisfacción de los empleados, clientes y socios.<br />
El modelo Zero Trust centrado en la identidad es una solución innovadora, segura y eficaz para proteger los recursos más valiosos de una organización en un entorno complejo y dinámico. Al adoptar este modelo, las organizaciones pueden obtener una ventaja competitiva y estar preparadas para enfrentar los desafíos actuales y futuros de la seguridad.

<br /><br />
                    <b>Hoy, la seguridad está en sus manos.</b>
                    <h6><a href='#row1' ><p data-bs-toggle="collapse"  data-bs-target="#zt">Colapsar</p></a></h6>
</div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body" >
          <h5 className="card-title" data-bs-toggle="collapse" data-bs-target="#threatintel">Threat Intelligence</h5>
          <p className="card-text">Defienda su organización de amenazas 0-day sin afectar sus recursos.</p>
          <br />
          <h6><a data-bs-toggle="collapse" data-bs-target="#threatintel"> Expandir / Colapsar</a></h6>
          <div id="threatintel" className="collapse">
          Inline Sandbox es una herramienta de tecnología de punta que permite proteger la organización de cyberamenazas desconocidas sin afectar al negocio por vía de análisis dinámico de archivos.  
                    <br /><br />
Esta solución ofrece una cyberinteligencia avanzada y tiene la mejor comprensión sobre las cyberamenazas que pueden comprometer la seguridad y la continuidad de las operaciones. Inline Sandbox utiliza inteligencia artificial (AI) de punta para detectar y prevenir las amenazas nóveles más sofisticadas y evasivas que escapan a los sistemas tradicionales de protección. Con Inline Sandbox, se puede contar con una solución sofisticada, eficaz y confiable para garantizar la cyberseguridad de la organización.


<br /> <br /><b>Hoy, la seguridad está en sus manos.</b>
<h6><a href='#row2' ><p data-bs-toggle="collapse"  data-bs-target="#threatintel">Colapsar</p></a></h6>

</div>
        </div>
      </div>
    </div>
  </div>
</div>
<br /> <br />




</center> 
 <iframe
      width={"100%"}
      height={600}
      src={cybermap}
      style={{ paddingBottom: 0, marginBottom: 0 }}
    />  
    <br /><br />
    <center><h1 className="colorwhite">La seguridad está en sus manos, ¡hoy!</h1></center>
    <br />
    <Image
              src={Object.entries(bitlopezmsp)[0].slice(1)}
              wrapped
              ui={false}
              alt="No se pudo cargar la imagen"
              height={'auto'}
              width={'100%'}
              style={{ padding:0, margin:0, bottom:0}}
            />
    <style jsx>{`
      .backgradient{
        background: linear-gradient(90deg, rgba(27, 164, 216, 1) 0%, rgba(67, 127, 227, 1) 35%, rgba(151, 53, 252, 1) 100%);
      }
      
    div.scrollmenu {
  background:white;
  overflow: auto;
  white-space: nowrap;
  width:80%;
  -webkit-border-radius: 5px;
-webkit-border-top-left-radius: 50px;
-moz-border-radius: 5px;
-moz-border-radius-topleft: 50px;
border-radius: 5px;
border-top-left-radius: 50px;

}

div.scrollmenu::-webkit-scrollbar {
  /*  background-color: rgba(67, 127, 227, 1);*/ /* color of the top and bottom buttons */
  background-color: rgba(67, 127, 227, 1);
 /*background-color:black;*/
    height: 12px; /* height of the top and bottom buttons */
}

div.scrollmenu::-webkit-scrollbar-thumb {
    background-color: rgba(151, 53, 252, 1); /* color of the scroll thumb */
    /*background-color: white;*/
    max-width:150px;
}

div.scrollmenu {
    scrollbar-width: auto; /* "auto" or "thin" */
    scrollbar-color: rgba(151, 53, 252, 1) rgba(67, 127, 227, 1); /* scroll thumb and track */
}

div.scrollmenu .scrollchild {
  display: inline-block;
  color: white;
  
  padding: 14px;
  
}
.colorwhite {
  color:white;
}

header{
  height:350px;
  background:black;

}
@media screen and (max-width: 485px) {
  header{
  height:450px;
  background:black;

}
    
}
body {
   
}


      `}</style>
    </div>
  );
}


