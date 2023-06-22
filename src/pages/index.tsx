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
        {/* <p></p>

        <h3 className="mt-4"> </h3>
        <p></p> */}
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

    </div>

    </div>
    </>
  );
}

export default HomePage;
