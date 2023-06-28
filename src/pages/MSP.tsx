import React from "react";
import Head from "next/head";
import bitlopezmsp from './../../public/images/BitLopez MSP.png'
import { MSPVideo } from "../components/Sections/innerSections/msp/mspvideo";
import {MSPTitle} from "../components/Sections/innerSections/msp/msptitle";
import { MSPBootAnimation } from "../components/Sections/innerSections/msp/mspbootanimation";
import { MSPVendors } from "../components/Sections/innerSections/msp/mspvendors";
import { MSPExtra1 } from "../components/Sections/innerSections/msp/mspextra1";
import Sophos from "./../../public/assets/users/Santiago/services/Sophos.ico";
import Bitdefender from "./../../public/assets/users/Santiago/services/Bitdefender.ico";
import MSPWhiteICO from "./../../public/assets/users/Santiago/services/MSPWhiteICO.ico";
import Microsoft from "./../../public/assets/users/Santiago/services/Microsoft.png";
import "../scripts/charts/AVScores.js";
import "../scripts/charts/databreachyears.js";
import "../scripts/charts/IBMpercentages";
import "../scripts/charts/IBMPrices";

export default function MSP() {
  
  return (
    <React.Fragment>
        
     <div className='hideMSP fade-in'>
     <Head>
        <title>BitLopez MSP</title>
      </Head>
      <header>
        
      <div
        style={{
          position: 'relative',
          width: '100%',
          // background: '#0d0c15',
          background:'black',
          marginTop: 60,
          paddingLeft: 50,
          height:500
        }}
        className='masterMSPTitle'
      >
        <MSPTitle />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            textAlign: 'right',
            paddingRight: 0,
            
            marginRight: 0,
            zIndex: 1,
          }}
          className='videoMSP'
        >
            <MSPVideo  />
           
          {/* <Image className="" src={Object.entries(MSPBlack)[0].slice(1)} alt='imagen' height={400} />  */}
        </div>
      </div>
      {/* TODO: if screen.width < (n+1)px => Descanse tranquilo en adelante : display:none;  */}
    </header>
     </div>
     <MSPBootAnimation />
      <div className="showMSP">

      <center>
          <h1 className="antigradienttext">
           Sitio no disponible para pantallas tan pequeñas.
           
          </h1>
          <h3><a href='https://www.bitlopez.bio'>Volver al dominio principal</a></h3>
          
        </center>
        </div>
    <div className='hideMSP fade-in'>
      <MSPVendors S={Sophos} B={Bitdefender} M={Microsoft} />
      
      <MSPExtra1 MSPWhiteICO = {MSPWhiteICO} bitlopezmsp={bitlopezmsp} />
      
      {/* <section className='barraLateral fixed-top '>
                <LateralBar />
            </section> */}
           
    </div>
  
    </React.Fragment>
  );
}


