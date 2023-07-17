import React from 'react';
import { Grid, Card } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import Layout from "../../../Layout/Layout";
import { StaticImageData } from 'next/image';
import { Hcard } from "styles/components/hcard";
import { Arsenalcontainer } from './../../../Sections/innerSections/msp/arsenal';
const cybermap = "https://cybermap.kaspersky.com/es/widget/dynamic/dark";
// import Sophos from "/assets/users/Santiago/services/Sophos.ico";
// import Bitdefender from "./../../public/assets/users/Santiago/services/Bitdefender.ico";
// import Microsoft from "./../../public/assets/users/Santiago/services/Microsoft.png";
export function MSPExtra1({MSPWhiteICO, bitlopezmsp} :any) {
  

  return (
    <center>
    <center>
     
      <h1 className="antigradienttext">
        <i>Productos Líder certificados por la industria</i>
      </h1>
      <br />
      <h4>Reconocimiento AV-Test</h4>
      <h5>Haga click en los vendors de la leyenda para mostrar/ocultar sus resultados</h5>
    </center>
    {/* */}
    <br />
    <canvas id="AVScores" style={{ maxWidth: "80%" }}></canvas>
    <br /> <br />
    <iframe
      width={"100%"}
      height={600}
      src={cybermap}
      style={{ paddingBottom: 0, marginBottom: 0 }}
    />
      
      <br />
      <Layout nav={false}>
  
      
      <center>
      <h1 className="antigradienttext">
        Las amenazas en el mundo {" "}
      </h1>
      <br />
      
      <br />
    </center>
    <Hcard imgurl={MSPWhiteICO}  pcontent={'Según el Reporte de estado de Ciberseguridad del instituto Ponemon, 66% de las pymes ha expermentado un cyberataque en los últimos 12 meses, y el 45% afirma que sus medidas de seguridad no son efectivas para mitigar los ataques.  '} /> <br />
    <Hcard imgurl={MSPWhiteICO}  pcontent={'Según Accenture\'s Cost of Cybercrime Study el 43% de los ciberataques tienen como objetivo a los pequeños negocios, de los que solamente el 14% está preparado para defenderse.   '} /> <br />
    </Layout>
    <canvas id="databreach" style={{ maxWidth: "80%" }}></canvas>
              <br />
              <canvas id="porcentages" style={{ maxWidth: "90%" }}></canvas>
              <br />
              <canvas id="IBMPrices" style={{ maxWidth: "90%" }}></canvas>

<br /><br /><br />
    <Layout nav={false} footer={false}>
    {/* <Hcard imgurl={Comodo} pcontent={'Lady'} /> */}
   
   
   <h4>Los cybercriminales son capaces de penetrar el 93% de las redes corporativas del mudo. <br /> <b>NO sea parte de esta estadística</b></h4>
    
    <br />
    <br />
    </Layout>
    <Image
              src={Object.entries(bitlopezmsp)[0].slice(1)}
              wrapped
              ui={false}
              alt="No se pudo cargar la imagen"
              height={'auto'}
              width={'100%'}
              style={{ padding:0, margin:0, bottom:0}}
            />
    {/* <Layout nav={false}>
    <center>
        <hr />
    <h1 className="antigradienttext" style={{ fontSize: "4.5em" }}>
        <i>Nuestra respuesta</i>
      </h1>
      <h1 className="antigradienttext">BitLopez MSP </h1>
      <hr />
    
      <br /><br />
    </center>

    <Hcard imgurl={BasicRound}  pcontent={'Otorga la mejor protección para Endpoint que puede existir en el mercado a un precio muy conveniente. Es una solución ligera, efectiva y muy personalizable, con amplia variedad de módulos y posibles configuraciones, para una seguridad personalizada '} strong={'Bitdefender Endpoint Security Tools'} /> <br />
    <Hcard imgurl={BasicRound}  pcontent={'Desde una única consola permiten la integración de soluciones para la seguridad de sus dispositivos móbiles y de su red corporativa con NEXT-GEN NIPS, NEXT-GEN Firewall, protección contra ataques de día cero (Zero-day attacks), protección Web, control de acceso a los recursos compartidos y las redes y prevención de pérdida de datos (Data Loss Prevention, DLP) '} strong={'Sophos Intercept X for Mobile, ZTNA y Network Firewall'} /> <br />
    </Layout> */}
    {/* <canvas id="VLost" style={{width:'100%', maxWidth:600}}></canvas> */}
    {/* <Image src={Object.entries(AVTestEndpointBlack)[0].slice(1)} wrapped ui={false} alt="No se pudo cargar la imagen" width={'100%'}  style={{paddingTop:0, marginTop:0, opacity: 1,}}  />  */}
  </center>
  );
}
