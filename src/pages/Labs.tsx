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
<Navbar anti={true}/> 
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
  <h2 className='colorwhite'>Parte de nuestro Arcenal</h2>
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
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">SOAR</h5>
          <p className="card-text">Orquestación y automatización de respuestas de su SOC</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">XDR </h5>
          <p className="card-text">Rápida respuesta a eventos y recopilación de datos.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">SIEM</h5>
          <p className="card-text">Centralice notificaciones y evite la fatiga por exceso de alertas</p>
        </div>
      </div>
    </div>
    </div>
    <br /> <br />
    <div className="row">
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">IPS</h5>
          <p className="card-text">Prevensión de intrusos Next Gen para proteger su red y sus recursos</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Next-Gen Firewall</h5>
          <p className="card-text">Firewalls <i>Powered by</i> Inteligencia Artificial con tecnología de punta</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">NDR</h5>
          <p className="card-text">Defienda su red de movimiento lateral, DDoS y responda rápidamente</p>
        </div>
      </div>
    </div>
  </div>
  <br /> <br />
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">SASE</h5>
          <p className="card-text">Centralice su seguridad en una arquitectura idónea para ZERO TRUST</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Zero Trust</h5>
          <p className="card-text">Use el modelo de seguridad más efectivo y proteja su red y sus recursos</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Inline Sandbox</h5>
          <p className="card-text">Defienda su organización de amenazas <i>0-day</i> sin afectar sus recursos</p>
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


