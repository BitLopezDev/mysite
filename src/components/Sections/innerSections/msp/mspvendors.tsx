import React from "react";
import { Grid, Card } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import Layout from "../../../Layout/Layout";
import { StaticImageData } from "next/image";

// import Bitdefender from "./../../public/assets/users/Santiago/services/Bitdefender.ico";
// import Microsoft from "./../../public/assets/users/Santiago/services/Microsoft.png";
export function MSPVendors({ S, B, M, F, }: any) {
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
      
      <center>
        <Grid columns="three" centered >
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
            {/* <Grid.Column>
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
            </Grid.Column> */}
          </Grid.Row>
          
        </Grid>
      </center>
      <br />
      <br /> 
    </>
  );
}
