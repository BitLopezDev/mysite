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
import Bitwarden from './../../public/assets/users/Santiago/services/Bitwarden.ico'
//
// import Kaspersy from "./../../public/images/kaspersky.png";
// import VirusTotal from "./../../public/images/VirusTotal.jpeg";
// import Trellix from "./../../public/images/trellix.png";


import Bitdefender from "./../../public/assets/users/Santiago/services/Bitdefender.ico";
import MSPWhiteICO from "./../../public/assets/users/Santiago/services/MSPWhiteICO.ico";
import Microsoft from "./../../public/assets/users/Santiago/services/Microsoft.png";


export default function Labs() {
 
  return (
    <React.Fragment>
        
        {/* <iframe
      width={"100%"}
      height={600}
      src={cybermap}
      style={{ paddingBottom: 0, marginBottom: 0 }}
    /> */}



  {/* 
  
  
  */}

<br />
<center>
  <h2>Nuestros vendors de preferencia</h2>
</center>
<br />
<div className="scrollmenu">
   <div className='scrollchild'><Image src={Object.entries(Fortinet)[0].slice(1)} alt="Chania" Height={100} /></div>
   <div className='scrollchild'><Image src={Object.entries(IBM)[0].slice(1)} alt="Chania" Height={100} /></div>
   <div className='scrollchild'><Image src={Object.entries(Bitdefender)[0].slice(1)} alt="Chania" Height={100} /></div>  
   <div className='scrollchild'><Image src={Object.entries(Intezer)[0].slice(1)} alt="Chania" Height={100} /></div>
   <div className='scrollchild'><Image src={Object.entries(Kaspersky)[0].slice(1)} alt="Chania" Height={100} /></div>
   <div className='scrollchild'><Image src={Object.entries(VirusTotal)[0].slice(1)} alt="Chania" Height={100} /></div> 
   <div className='scrollchild'><Image src={Object.entries(Trellix)[0].slice(1)} alt="Chania" Height={100} /></div> 
   <div className='scrollchild'><Image src={Object.entries(Comodo)[0].slice(1)} alt="Chania" Height={100} /></div> 
   <div className='scrollchild'><Image src={Object.entries(Microsoft)[0].slice(1)} alt="Chania" Height={100} /></div> 
  
   <div className='scrollchild'><Image src={Object.entries(Bitwarden)[0].slice(1)} alt="Chania" Height={100} /></div> 
   <div className='scrollchild'><Image src={Object.entries(Cloudflare)[0].slice(1)} alt="Chania" Height={100} /></div>  
</div>
           
    <style jsx>{`
      
    div.scrollmenu {
  
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu .scrollchild {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}


      `}</style>
    </React.Fragment>
  );
}


