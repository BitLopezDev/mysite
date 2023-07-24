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
<h1 className="antigradienttext" style={{ fontSize: "6em", paddingTop:60 }}>
      <i>BitLopez MSP</i>
    </h1>
    <h4 style={{ color: "white", marginLeft: 60 }}>
      Cybersecurity Managed Services Provider y Managed Detection and Response Provider
    </h4>
    <br />
    <h2
      className="antigradienttext"
      style={{ marginLeft: 0, paddingLeft: 0, fontSize: "3.5em" }}
    >
      <i>Seguridad Líder</i>
    </h2>
        </header>
        
        {/* <Layout nav={true} footer={true} paddTop={100} head={true}></Layout> */}
<center style={{paddingTop:10}}>
  <h2 className='colorwhite'>Nuestros vendors de preferencia</h2>

<br />
<div className="scrollmenu">
  <div className='scrollchild'><Image src={Object.entries(Bitdefender)[0].slice(1)} alt="Chania" Height={100} /></div>  
   
   
   <div className='scrollchild'><Image src={Object.entries(Fortinet)[0].slice(1)} alt="Chania" Height={100} /></div>
   <div className='scrollchild'><Image src={Object.entries(Sophos)[0].slice(1)} alt="Chania" Height={100} /></div> 
   <div className='scrollchild'><Image src={Object.entries(Intezer)[0].slice(1)} alt="Chania" Height={100} /></div>
   <div className='scrollchild'><Image src={Object.entries(Kaspersky)[0].slice(1)} alt="Chania" Height={100} /></div>
   <div className='scrollchild'><Image src={Object.entries(VirusTotal)[0].slice(1)} alt="Chania" Height={100} /></div> 
   <div className='scrollchild'><Image src={Object.entries(Trellix)[0].slice(1)} alt="Chania" Height={100} /></div> 
   <div className='scrollchild'><Image src={Object.entries(Comodo)[0].slice(1)} alt="Chania" Height={100} /></div> 
   <div className='scrollchild'><Image src={Object.entries(Microsoft)[0].slice(1)} alt="Chania" Height={100} /></div> 
   <div className='scrollchild'><Image src={Object.entries(IBM)[0].slice(1)} alt="Chania" Height={100} /></div>
   <div className='scrollchild'><Image src={Object.entries(Bitwarden)[0].slice(1)} alt="Chania" Height={100} /></div> 
   <div className='scrollchild'><Image src={Object.entries(Cloudflare)[0].slice(1)} alt="Chania" Height={100} /></div>  
</div>
</center>
<br />
<br />
<center>
<div className="container">
  <h1 className='colorwhite'>Parte de nuestro Arcenal</h1>
<div className="row">
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
  <div className="row">
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
          Proteja su negocio con seguridad orquestada y automática. Por la abrumante cantidad de alertas, los equipos de seguridad revisan en promedio la mitad de las alertas de seguridad. Evite agotar a su equipo y obtener los mejores resultados con SOAR. A medida que las empresas crecen, se van dando cuenta de la necesidad de SIEM y SOAR.
<br /><b>Hoy, la seguridad está en sus manos.</b>
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
          Proteja sus Endpoints con seguridad premiada por autónomos de los líderes de la industra Bitdefender y Sophos, antivirus Next-Gen con Endpoint Detection and Repsonse (EDR) y eXtended Detection and Response (XDR, también conocido como NEXT-GEN SIEM) en el núcleo para asegurar la mejor defensa para sus endpoints y su red.
<br /><b>Hoy, la seguridad está en sus manos.</b>
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
          Proteja su organización reconociendo amenazas externas o internas, vulnerabilidades y operaciones maliciosas antes de que interrumpas sus operaciones comerciales, violen la continuidad de negocio y lo perjudiquen económica, reputacional o, incluso, legalmente.
Para ello utilizmos Microsoft Azure Sentinel: un SIEM que utiliza Inteligencia Artificial de punta para protegerlo a usted y a su nnegocio.
<br /><b>Hoy, la seguridad está en sus manos.</b>
  </div>
        </div>
      </div>
    </div>
    </div>
    <br /> <br />
    <div className="row">
    <h3 className='colorwhite'>Protección de red y recursos</h3>

<br />
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" data-bs-toggle="collapse" data-bs-target="#ips"> NEXT-GEN IPS</h5>
          <p className="card-text">Prevensión de intrusos Next Gen para proteger su red y sus recursos.</p>
          <br />
          <h6><a data-bs-toggle="collapse" data-bs-target="#ips"> Expandir / Colapsar</a></h6>
          <div id="ips" className="collapse">
    Bloquee tráfico sospechos, amenazas, y proteja su red y sus recursos más valiosos con un IPS de próxima Generación.
    <br /><b>Hoy, la seguridad está en sus manos.</b>
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
          Defienda sus endpoints, servidores, dispositivos IoT, recursos, aplicaciones, correo y red con un Firewall de red Next-Gen, con Sistema de Prevensión de Intrusos Next-Gen (IPS), análisis dinámico de archivos y DLP incorporado contra ataques de día cero, exploits, ransomware, phising, fraude, virus, rootkits, troyanos, movimiento lateral, acceso de terceros no autorizados, entre tantas otras cosas.
<br /><b>Hoy, la seguridad está en sus manos.</b>
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
    Mejore la visibilidad del tráfico de su red, obtenga más detalles sobre las amenazas y responda con mayor eficacia, eficiencia y velocidad para mantener seguros sus recursos y su red.
    <br /><b>Hoy, la seguridad está en sus manos.</b>
  </div>
        </div>
      </div>
    </div>
  </div>
  <br /> <br />
  <div className="row">
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
          Defienda su red y sus recursos sin perder capacidad de conectar a sus usuarios, sistemas, endpoints, servidores y redes externas a aplicaciones y recursos aumentando la capacidad del tradicional SD-WAN siéndole fiel a la filosofía Zero Trust.
<br /><b>Hoy, la seguridad está en sus manos.</b>
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
          Defienda su red, sus recursos y su organización a través de una arquitectura ZERO TRUST. Impida el acceso de dispositivos y personal cuyas credenciales sean inválidas o no se hayan verificado.
Gracias a software como el ZTNA de Sophos Labs, se puede garantizar que quien accede a la red y a los recursos es el usuario autorizado en el dispositivo autorizado y que este está libre de cualquier programa malicioso que pudiere representar una amenaza para su organización, su red, sus recursos y la continuidad del negocio.
<br /><b>Hoy, la seguridad está en sus manos.</b>
</div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" data-bs-toggle="collapse" data-bs-target="#sand">Threat Intelligence</h5>
          <p className="card-text">Defienda su organización de amenazas 0-day sin afectar sus recursos.</p>
          <br />
          <h6><a data-bs-toggle="collapse" data-bs-target="#sand"> Expandir / Colapsar</a></h6>
          <div id="sand" className="collapse">
          Manténgase un paso más adelante que las ciberamenazas actuales, incluso las más complejas, con Cyber Threat Intelligence.
Herramientas como Microsoft Defender Threat Intelligence, Intezer, Kaspersky Threat Intelligence Portal y VirusTotal a su alcance para mantenerlo seguro a usted, sus empleados, y su negocio.
<br /><b>Hoy, la seguridad está en sus manos.</b>
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

      `}</style>
    </div>
  );
}


