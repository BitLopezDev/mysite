import React from 'react';
import { Grid, Card } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import Layout from "../../../Layout/Layout";
import { StaticImageData } from 'next/image';
// import Sophos from "/assets/users/Santiago/services/Sophos.ico";
// import Bitdefender from "./../../public/assets/users/Santiago/services/Bitdefender.ico";
// import Microsoft from "./../../public/assets/users/Santiago/services/Microsoft.png";
export function MSPVendors({S, B, M} :any) {
  

  return (
    <Layout nav={true} paddTop={30} footer={false} head={true} >
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
              <Card style={{ marginLeft: "-20" }}>
                <Image
                  src={Object.entries(B)[0].slice(1)}
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
                  src={Object.entries(M)[0].slice(1)}
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
              <Card style={{ marginLeft: 15 }}>
                <Image
                  src={Object.entries(S)[0].slice(1)}
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
       </Layout>
  );
}
