import * as React from 'react';
import Layout from '../components/Layout/Layout';
import {Footer} from '../components/Layout/Footer';
import Head from 'next/head';
import { Grid, Rail, Segment, Card, List } from 'semantic-ui-react';
import { LateralBar } from '../components/Index/LateralBar';
import { School } from '../components/Sections/School';
import Navbar from './../components/Header/Navbar';
// import _JSXStyle from './../styles/global';
const items = [
    {
        header: 'Web Development',
        description:
            'Vea mi Currículum como Desarrollador Web Full Stack',
        meta: 'Junior',
        href: 'FullStack',

    },
    {
        header: 'Cybersecurity',
        description:
            'Vea mi currículum como estudiante y entusiasta de la cyberseguriad',
        meta: 'Estudiante, entusiasta',
        href: 'Security',

    },
];
function Custom404() {
   
    return (

        <React.Fragment>
             <Head>
                <title>BitLopez | 404</title>
            </Head>
            <Navbar />

           
            <center style={{paddingTop:100}}>
                    <h1 className="antigradienttext">Atención: La página que buscaba no existe, o se ha movido de ubicación.</h1>
                    {/* <h4>CV Online</h4> */}
                    <br />
                </center>
                <style jsx>{`
    body {
        background-color:black;
    }
    
    `}</style>
        </ React.Fragment>

    );


}

export default Custom404;