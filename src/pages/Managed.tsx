import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import { Image, Item } from 'semantic-ui-react';
import { Grid, Rail, Segment, Card, List } from 'semantic-ui-react';
import { LateralBar } from '../components/Index/LateralBar';
import { School } from '../components/Sections/School';
import HTML5 from './../../public/assets/users/Santiago/services/MSPBlack.png';
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
function Managed() {

    return (

        <React.Fragment>
            <Head>
                <title>BitLopez MSP</title>
            </Head>
            <header><div style={{width:'100%', background: '#0d0c15', marginTop:60, paddingLeft:50, height:500}}>
                <br/>
                <div style={{textAlign:'right', paddingRight:50, marginRight:0, float:'right'}} >
                      
                 <Image className="" src={Object.entries(HTML5)[0].slice(1)} alt='imagen' height={450} /> 
                </div>
                <br /> <br /> <br />
                    <h1 className="antigradienttext" style={{fontSize:'6em'}}><i>BitLopez MSP</i></h1>
                    <h4 style={{color:'white', marginLeft:60}}>Managed Services Provider</h4>
                    
                    <br />
                    <h2 className="antigradienttext" style={{marginLeft:0, paddingLeft:0, fontSize:'4em'}}><i>Seguridad Líder</i></h2><br />
                    <h3 style={{marginLeft:0, paddingLeft:0, fontSize:'2em', color:'white'}}>Descanse tranquilo con las mejores herramientas de seguridad en las mejores manos</h3>

                    
                </div></header>

            
               
                
            <Layout>
            



            </Layout>
            {/* <section className='barraLateral fixed-top '>
                <LateralBar />
            </section> */}

        </ React.Fragment>
    )


}

export default Managed;