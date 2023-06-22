import * as React from "react";
import Layout from "../components/Layout/Layout";
import {Image} from 'semantic-ui-react';
import Head from "next/head";
import { Grid, Rail, Segment, Card, List } from "semantic-ui-react";
import { LateralBar } from "../components/Index/LateralBar";
import { School } from "../components/Sections/School";
import { Footer } from '../components/Layout/Footer';
import Logo from '../../public/images/BasicRound.png';

// import _JSXStyle from './../styles/global';
const items = [
  {
    header: "BitLopez Dev",
    description: "Vea mi Currículum como Desarrollador Web Full Stack",
    meta: "Full Stack Web Development",
    href: "FullStack",
  },
  {
    header: "BitLopez MSP",
    description:
      "Vea mi futuro emprendimiento como MSP y MDR Provider",
    meta: "Ciberseguridad",
    href: "MSP",
  },
];
//FIXME: Fix multile calls to Layout

function HomePage() {
  return (
    <>
    <Head>
    <title>Santiago Comesaña | index</title>
  </Head>
  <Layout nav={true} paddTop={75} > </Layout>
<center>
      <h1 className="antigradienttext">
        <i>Santiago Comesaña López</i>
      </h1>
      <h4>BitLopez</h4>

    </center>
    <div className="container mt-5">
    <div className="row">
    <div className="col-sm-4">
        <h2>Sobre mí</h2>

        <Image src={Object.entries(Logo)[0].slice(1)} width={150} />
        <p>Desarrollador web Full Stack con JavaScript, TypeScript, PHP y experiencia en cyberseguridad con formación
          que lo respalda.</p>
        
        <div className='hideonmobile'>
           <ul className="nav nav-pills flex-column ">
            <li className="nav-item">
              <a className="nav-link active" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Desarrollador web FullStack</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="MSP">BitLopez MSP</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/Labs">Labs</a>
            </li>
          </ul>

        </div>
        
        <hr className="d-sm-none" />
      </div> 
      <div className="col-sm-8">
        <h2>TITLE HEADING</h2>
        <Card.Group centered items={items} />
        <br />
        <Grid columns={3}>

          <Grid.Column>



            <Segment className="coloredshadow">

              <h3>Datos Rápidos:</h3>
              <br />
              <List as="ol">
                <List.Item as="li" value="*">
                  <h5>Educación Formal:</h5>
                  <List.Item as="ol">
                    <List.Item as="li" value="-">
                      Sexto Ingeniería (2020)
                    </List.Item>
                    <List.Item as="li" value="-">
                      Sexto Medicina (2022)
                    </List.Item>
                  </List.Item>
                </List.Item>

                {/* */}
                <List.Item as="li" value="*">
                  <h5>Idiomas:</h5>
                  <List.Item as="ol">
                    <List.Item as="li" value="-">
                      Español (Nativo)
                    </List.Item>
                    <List.Item as="li" value="-">
                      Inglés (C1)
                    </List.Item>
                    <List.Item as="li" value="-">
                      Francés (idioma de infancia)
                    </List.Item>
                  </List.Item>
                </List.Item>

                {/* */}

                <List.Item as="li" value="*">
                  <h5>Credenciales de Development:</h5>
                  <List.Item as="ol">
                    <List.Item as="li" value="-">
                      Full Stack Web Developer con JavaScript | 2023
                    </List.Item>

                    <List.Item as="li" value="-">
                      Frontend Web developer con JavaScript | 2022
                    </List.Item>
                    <List.Item as="li" value="-">
                      Web Developer | 2016
                    </List.Item>
                    {/* <List.Item as='li' value='-'>
                      Full Stack Web Developer con Next.js | TO BE
                    </List.Item>
                    <List.Item as='li' value='-'>
                      Frontend con React.js | TO BE
                    </List.Item>
                    <List.Item as='li' value='-'>
                      JavaScript a profundidad | TO BE
                    </List.Item>
                    <List.Item as='li' value='-'>
                      HTML y CSS a profundidad | TO BE
                    </List.Item>
                    <List.Item as='li' value='-'>
                      Desarrollo Web 3 | TO BE
                    </List.Item> */}
                  </List.Item>
                </List.Item>
                <List.Item as="li" value="*">
                  <h5>Credenciales en Ciberseguridad:</h5>
                  <List.Item as="ol">
                    <List.Item as="li" value="-">
                      Ciberseguridad para empresas | 2023
                    </List.Item>
                    <List.Item as="li" value="-">
                      Curso de preparación para norma 27001 | TO BE
                    </List.Item>
                  </List.Item>
                </List.Item>
                {/* */}
                <List.Item as="li" value="*">
                  <h5>Experiencia laboral:</h5>
                  <List.Item as="ol">
                    <List.Item as="li" value="-">
                      TCS | 2021 - 2022
                      <p>
                        Era agente del call center de soporte técnico para
                        una farmacéutica.
                        <br />
                        Aprendí a manejar el trabajo bajo presión, el
                        manejar varios idiomas a la vez -que hoy me es
                        absolutamente natural-, a consultar con los
                        compañeros y trabajar en equipo.
                      </p>
                    </List.Item>
                    <List.Item as="li" value="-">
                      Emprendiminto de Reparación de PCs
                      <p>
                        Interacción con clientes, manejo, instalación y
                        configuración de software de Microsoft en
                        distintas versiones, manejo de antivirus
                        domésticos, entre otros.
                      </p>
                    </List.Item>
                  </List.Item>
                </List.Item>

                {/* */}
                <List.Item as="li" value="*">
                  <h5>Otras habilidades:</h5>
                  <List.Item as="ol">
                    <List.Item as="li" value="-">
                      Buen organizador
                    </List.Item>
                    <List.Item as="li" value="-">
                      Buenas habilidades interpersonales
                    </List.Item>
                    <List.Item as="li" value="-">
                      Buen escucha
                    </List.Item>
                    <List.Item as="li" value="-">
                      Buen manejo de Microsoft Word y Windows
                    </List.Item>
                  </List.Item>
                </List.Item>
                <List.Item as="li" value="*">
                  <h5>Contacto:</h5>
                  <List.Item as="ol">
                    <List.Item as="li" value="-">
                      contacto@bitlopez.bio
                    </List.Item>
                    <List.Item as="li" value="-">
                      santiagocomesanalopez@gmail.com
                    </List.Item>
                    <List.Item as="li" value="-">
                      097104930
                    </List.Item>

                  </List.Item>
                </List.Item>
              </List>
            </Segment>

          </Grid.Column>
        </Grid>
      </div>
    </div>
  </div>
  <section className="barraLateral barralateralwrapper fixed-top ">
    <LateralBar />
  </section>

  <Footer />

  
    </>
  );
}

export default HomePage;
