import * as React from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import ReactPlayer from 'react-player';
import { Hcard } from "styles/components/hcard";
import { Image, Item } from "semantic-ui-react";
import { Grid, Rail, Segment, Card, List } from "semantic-ui-react";
import { LateralBar } from "../components/Index/LateralBar";
import { School } from "../components/Sections/School";
import MSPBlack from "./../../public/assets/users/Santiago/services/MSPBlack.png";
import BasicRound from "./../../public/assets/users/Santiago/imágenes/Logo/BasicRound.ico";
import Sophos from "./../../public/assets/users/Santiago/services/Sophos.ico";
import Bitdefender from "./../../public/assets/users/Santiago/services/Bitdefender.ico";
import BitdefenderHome from "./../../public/assets/users/Santiago/services/BitdefenderHome.ico";
import GlassWire from "./../../public/assets/users/Santiago/services/glasswire.svg";
import Comodo from "./../../public/assets/users/Santiago/services/Comodo.ico";
import Bitwarden from "./../../public/assets/users/Santiago/services/Bitwarden.ico";
import MSPWhite from "./../../public/assets/users/Santiago/services/MSPWhite.png";
import MSPWhiteICO from "./../../public/assets/users/Santiago/services/MSPWhiteICO.ico";
import Microsoft from "./../../public/assets/users/Santiago/services/Microsoft.png";
const malworld=  './../../public/videos/malworld.mp4';
import AVTestEndpointBlack from "./../../public/assets/users/Santiago/services/AVTestEndpointBlack.jpg";
const cybermap = "https://cybermap.kaspersky.com/es/widget/dynamic/dark";
import "../scripts/charts/AVScores.js";
//import '../scripts/charts/VLost.js';

// import _JSXStyle from './../styles/global';

function Managed() {
  return (
    <React.Fragment>
      <Head>
        <title>BitLopez MSP</title>
      </Head>
      <header>
      <div
        style={{
          position: 'relative',
          width: '100%',
          background: 'black',
          marginTop: 60,
          paddingLeft: 50,
          height: 450,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'calc(100% - 450px)',
            background: 'transparent',
            marginTop: 60,
            paddingLeft: 0,
            marginLeft: 10,
            // height: 450,
            zIndex: 5,
          }}
        >
          <h1 className="antigradienttext" style={{ fontSize: "6em" }}>
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
          <br />
          <h3
            style={{
              marginLeft: 0,
              paddingLeft: 0,
              fontSize: "1.7em",
              color: "white",
            }}
          >
            Descanse tranquilo con las mejores herramientas de seguridad en las
            mejores manos
          </h3>
          <br />
          <h3
            style={{
              marginLeft: 0,
              paddingLeft: 0,
              fontSize: "1em",
              color: "white",
            }}
          >
            EDR | XDR | MDR | NDR | ZTNA | NEXT-GEN FIREWALL | NIPS/HIPS | SIEM
            | Mail Security | Office Security | NAS Server Protection | AWS &
            Azure Security |
            
             WAF | DDOS protection | VPN | DLP | Hipervisor
            software | Threat Intelligence | Cloud Sandbox{" "}
          </h3>
        </div>
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
        >
          <video width="100%" autoPlay loop style={{ height: '450px' }}>
            <source src="/videos/malworld.mp4" type="video/mp4" />
            Sorry, your browser does not support videos.
          </video>
        </div>
      </div>
      {/* TODO: if screen.width < (n+1)px => Descanse tranquilo en adelante : display:none;  */}
    </header>
      <Layout nav={true} paddTop={30} footer={false} head={true} width={800}>
        <center>
          <h1 className="antigradienttext">
            Nuestros<i> vendors </i>de preferencia
          </h1>
          <br />
          <h4>Para la empresa</h4>
          <br />
        </center>
        <Grid columns="three" centered>
          <Grid.Row>
            <Grid.Column>
              <Card style={{ marginLeft: "-10px" }}>
                <Image
                  src={Object.entries(Bitdefender)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  height={190}
                  width={190}
                  style={{ padding: 10 }}
                />
                <Card.Content>
                  <Card.Header>Bitdefender</Card.Header>
                  <Card.Meta></Card.Meta>
                  <Card.Description>
                    {/*  Trabajamos con Bitdefender Endpoint Security Tools para la protección de Endpoints físicos y viertuales así como servidores.
                                   Su protección multicapa EDR combinado con <i>Tunable machine Learning</i>, su Firewall poderoso, su alta capaciad de adaptación, su protección contra Exploits y su capacidad de mitigar el Ransomeware, su administración automática de parches de seguridad para el SO y aplicaciones variadas y gestión de encriptación, a la par de su gran y precisa capacidad de detección de vulnerabilidades y malas configuraciones hacen de este software una herramienta muy poderosa para la protección de Endpoints. */}
                    Trabajamos con Bitdefender Endpoint Security Tools para la
                    protección de Endpoints físicos y virtuales así como
                    servidores. <br />
                    La renombrada firma de Antivirus ofrece un producto sencillo
                    y poderoso para las mejores compañías.
                    <br />
                    <i>The best for the best</i>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>Algunos elementos se adquieres por separado</a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card style={{ marginLeft: 10 }}>
                <Image
                  src={Object.entries(Microsoft)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  width={200}
                />
                <Card.Content>
                  <Card.Header>Microsoft</Card.Header>
                  <Card.Meta></Card.Meta>
                  <Card.Description>
                    Elegimos Microsoft por su reputación y su alta integración
                    con Windows, Office (Microsoft 365), Exchange.
                    <br /> Micorosft Sentinel, Microsoft 365 Defender y
                    Microsoft Defender Threat Intelligence son parte de nuestro
                    arsenal de preferencia para mantenerlo seguro a usted y su
                    negocio.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>Algunos elementos se adquieres por separado</a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card style={{ marginLeft: 10 }}>
                <Image
                  src={Object.entries(Sophos)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  height={190}
                  width={190}
                  style={{ padding: 10 }}
                />
                <Card.Content>
                  <Card.Header>Sophos</Card.Header>
                  <Card.Meta></Card.Meta>
                  <Card.Description>
                    La multiplicidad y gran variedad de herramientas de
                    seguridad de Sophos como Firewall de Red, NDR e Intercept X
                    hacen de la firma de la firma una gran aliada contra la
                    lucha del malware, y la simplicidad de la centralización lo
                    torna en infalibre.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>Algunos elementos se adquieres por separado</a>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <br />
        {/* <hr />
         */}
        <center>
          <h4>Para el hogar</h4>
          <br />
        </center>
       
        <Hcard imgurl={BitdefenderHome} pcontent={'Confiamos en Bitdefender Antivirus para el hogar por su robustez, su precisión, sencillez de instalación y su poderosa consola. Creemos en un antimalware posicionado como Líder en el mercado según estudios independientes.'} strong ={'Bitdefender Antivirus:'} /> 
        <br />
        <Hcard imgurl={GlassWire} pcontent={'Confiamos en un firewall modelo con capacidades sorprendentes y una excelente reputación.'} strong ={'GlassWire:'} />       
          <br />

        <Hcard imgurl={Comodo} pcontent={'Confiamos en un firewall gratuito con HIPS, modo de aprendizaje y sandbox y, por sobre todo, robusto. Confiamos en el Firewall de Comodo como opción para quienes lo deseen.'} strong ={'Comodo Firewall:'} /> 
        <br />
        
        <Hcard imgurl={Sophos} pcontent={'Confiamos en el Antivirus NEXT-GEN de Sophos para el hogar por el renombre de la firma desarrolladora y los estudios independientes que validan su eficacia.'} strong ={'Sophos:'} /> 
      </Layout>
      <center>
        <center>
          <h1 className="antigradienttext">
            <i>Productos Líder certificados por la industria</i>
          </h1>
          <br />
          <h4>Reconocimiento AV-Test</h4>
        </center>
        {/* */}
        <br />
        <canvas id="AVScores" style={{ maxWidth: "80%" }}></canvas>
        <br /> <br />
        <Layout nav={false}>
         <Hcard imgurl={Bitdefender} pcontent={'lidera la protección de Endpoints contra ataques de Día Cero (Zero-day attack) y, aunque el gráfico no lo señale, protección contra malwares más extendidos en Endpoints. Por esta razón es nuestra herramienta preferida para este tipo de dispositivos; la historia nos da la razón.'} strong ={'Bitdefender Endpoint Security Tools '} /> 
          
          <br />
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
      
        <iframe
          width={"100%"}
          height={600}
          src={cybermap}
          style={{ paddingBottom: 0, marginBottom: 0 }}
        />
        <Layout nav={false}>
        {/* <Hcard imgurl={Comodo} pcontent={'Lady'} /> */}
       <br />
       <br />
       <br />
       
        
        <Hcard imgurl={MSPWhiteICO}  pcontent={'Los tipos más comunes de ciberataques son Pishing e Ingeniería social, hurto o extravío de dispositivos y robo de credenciales.  '} /> <br />
        <Hcard imgurl={MSPWhiteICO}  pcontent={'No sea parte de esta estadística.  '} strong={'Los cibercriminales son capaces de pentrar el 93% de las redes corporativas del mundo.'} />
        <br />
        <br />
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
        </Layout>
        {/* <canvas id="VLost" style={{width:'100%', maxWidth:600}}></canvas> */}
        {/* <Image src={Object.entries(AVTestEndpointBlack)[0].slice(1)} wrapped ui={false} alt="No se pudo cargar la imagen" width={'100%'}  style={{paddingTop:0, marginTop:0, opacity: 1,}}  />  */}
      </center>
      <Layout nav={false}></Layout>
      {/* <section className='barraLateral fixed-top '>
                <LateralBar />
            </section> */}
    </React.Fragment>
  );
}

export default Managed;