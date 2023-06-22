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
    
    </>
  );
}

export default HomePage;
