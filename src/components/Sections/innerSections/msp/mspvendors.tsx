import React from "react";
import { Grid, Card } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import Layout from "../../../Layout/Layout";
import { StaticImageData } from "next/image";

// import Bitdefender from "./../../public/assets/users/Santiago/services/Bitdefender.ico";
// import Microsoft from "./../../public/assets/users/Santiago/services/Microsoft.png";
export function MSPVendors({ S, B, M, F, IBM, I, K, V, T, Cloudflare, Bitwarden, Comodo }: any) {
  return (
    <>
    <center>
      <br />
          <h1 className="antigradienttext">
            Nuestros<i> vendors </i>de preferencia
          </h1>
          <br />
          <h4>Para la empresa</h4>
          <br />
        </center>
      <Layout nav={true} paddTop={30} footer={false} head={true}>
        

       
      </Layout>
      {/* style={{border:2px solid black}} */}
      <center>
        <Grid columns="three" centered  >
          <Grid.Row>
            <Grid.Column>
              <center>
                <Image
                  src={Object.entries(S)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  height={190}
                  style={{ paddingRight: 10 }}
                />
              </center>
            </Grid.Column>
            <Grid.Column>
              <center>
                <Image
                  src={Object.entries(M)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  height={190}
                  style={{ paddingRight: 10 }}
                />
              </center>
            </Grid.Column>
            <Grid.Column>
              <center>
                <Image
                  src={Object.entries(B)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  height={190}
                  style={{ paddingRight: 10 }}
                />
              </center>
            </Grid.Column>
          </Grid.Row>
           {/*  */}
          <Grid.Row>
            <Grid.Column>
              <center>
                <Image
                  src={Object.entries(F)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  height={190}
                  style={{ paddingRight: 10 }}
                />
              </center>
            </Grid.Column>
            <Grid.Column>
              <center>
                <Image
                  src={Object.entries(I)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  height={190}
                  style={{ paddingRight: 10 }}
                />
              </center>
            </Grid.Column>
             <Grid.Column>
              <center>
                <Image
                  src={Object.entries(IBM)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  height={190}
                  style={{ paddingRight: 10 }}
                />
              </center>
            </Grid.Column> 
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <center>
                <Image
                  src={Object.entries(V)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  height={190}
                  style={{ paddingRight: 10 }}
                />
              </center>
            </Grid.Column>
            <Grid.Column>
              <center>
                <Image
                  src={Object.entries(K)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  height={190}
                  style={{ paddingRight: 10 }}
                />
              </center>
            </Grid.Column>
             {/* <Grid.Column>
              <center>
                <Image
                  src={Object.entries(T)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  height={190}
                  style={{ paddingRight: 10 }}
                />
              </center>
            </Grid.Column>  */}
            <Grid.Column>
              <center>
                <Image
                  src={Object.entries(Bitwarden)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  height={190}
                  style={{ paddingRight: 10 }}
                />
              </center>
            </Grid.Column>
          </Grid.Row>
          {/* <Grid.Row >
             <Grid.Column>
              <center>
                <Image
                  src={Object.entries(Comodo)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  height={190}
                  style={{ paddingRight: 10 }}
                />
              </center>
            </Grid.Column> 
             <Grid.Column >
              <center>
                <Image
                  src={Object.entries(Cloudflare)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  width={350}
                  style={{ paddingRight: 88, paddingTop:40 }}
                />
              </center>
            </Grid.Column>  
          </Grid.Row> */}
        </Grid>
      </center>
      <br />
      <br /> 
    </>
  );
}
