import React from "react";
import Head from "next/head";
import { useEffect } from "react";
import bitlopezmsp from "./../../public/images/BitLopez MSP.png";
import { MSPVideo } from "../components/Sections/innerSections/msp/mspvideo";
import { MSPTitle } from "../components/Sections/innerSections/msp/msptitle";
import { MSPBootAnimation } from "../components/Sections/innerSections/msp/mspbootanimation";
import { MSPVendors } from "../components/Sections/innerSections/msp/mspvendors";
import { MSPExtra1 } from "../components/Sections/innerSections/msp/mspextra1";
import { MSPPricing } from "../components/Sections/innerSections/msp/msppricing";
import { Arsenalcontainer } from "./../components/Sections/innerSections/msp/arsenal";

import Sophos from "./../../public/assets/users/Santiago/services/Sophos.ico";

// import Intezer from "./../../public/images/Intezer.png";
import Fortinet from "./../../public/assets/users/Santiago/services/Fortinet.png";
import IBM from "./../../public/assets/users/Santiago/services/IBM.jpeg";
import Intezer from "./../../public/assets/users/Santiago/services/Intezer.jpeg";
import Kaspersky from "./../../public/assets/users/Santiago/services/Kaspersky.png";
import VirusTotal from "./../../public/assets/users/Santiago/services/VirusTotal.jpeg";
import Trellix from "./../../public/assets/users/Santiago/services/Trellix.jpeg";
import Comodo from "./../../public/assets/users/Santiago/services/Comodo.ico";
import Cloudflare from "./../../public/assets/users/Santiago/services/cloudflare.png";
import Bitwarden from "./../../public/assets/users/Santiago/services/Bitwarden.ico";
//
// import Kaspersy from "./../../public/images/kaspersky.png";
// import VirusTotal from "./../../public/images/VirusTotal.jpeg";
// import Trellix from "./../../public/images/trellix.png";

import Bitdefender from "./../../public/assets/users/Santiago/services/Bitdefender.ico";
import MSPWhiteICO from "./../../public/assets/users/Santiago/services/MSPWhiteICO.ico";

import Microsoft from "./../../public/assets/users/Santiago/services/Microsoft.png";
import "../scripts/charts/AVScores.js";
import "../scripts/charts/databreachyears.js";
import "../scripts/charts/IBMpercentages";
import "../scripts/charts/IBMPrices";

export default function MSP() {
  useEffect(() => {
    const headerTimeout = setTimeout(() => {
      const header = document.getElementById("header");
      if (header) {
        header.removeAttribute("id");
      }
    }, 5321);
    const fadeInTimeout = setTimeout(() => {
      const divs = document.querySelectorAll("div.fade-in");
      divs.forEach((div) => div.classList.remove("fade-in"));
    }, 8000);
    return () => {
      clearTimeout(headerTimeout);
      clearTimeout(fadeInTimeout);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="hideMSP fade-in">
        <Head>
          <title>BitLopez MSP</title>
        </Head>
        <header id="header">
          <div
            style={{
              position: "relative",
              width: "100%",
              // background: '#0d0c15',
              background: "black",
              marginTop: 60,
              paddingLeft: 50,
              height: 500,
            }}
            className="masterMSPTitle"
          >
            <MSPTitle />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                textAlign: "right",
                paddingRight: 0,

                marginRight: 0,
                zIndex: 1,
              }}
              className="videoMSP"
            >
              <MSPVideo />
            </div>
          </div>
        </header>
      </div>
      <MSPBootAnimation />
      <div className="showMSP">
        <center>
          <h1 className="antigradienttext">
            Sitio no disponible para pantallas tan pequeñas.
          </h1>
          <h4>
            <a href="../MSPhone">Dirigirse a sitio para dispositivos móbiles</a>
          </h4>
          <h3>
            <a href="../">Volver al dominio principal</a>
          </h3>
        </center>
      </div>
      <div className="hideMSP fade-in">
        <center>
          <Arsenalcontainer />
        </center>
        <MSPVendors
          S={Sophos}
          B={Bitdefender}
          M={Microsoft}
          F={Fortinet}
          IBM={IBM}
          I={Intezer}
          T={Trellix}
          V={VirusTotal}
          K={Kaspersky}
          Bitwarden={Bitwarden}
          Comodo={Comodo}
          Cloudflare={Cloudflare}
        />

        <MSPExtra1 MSPWhiteICO={MSPWhiteICO} bitlopezmsp={bitlopezmsp} />
      </div>
    </React.Fragment>
  );
}
