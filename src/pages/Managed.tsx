import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import { Image, Item } from 'semantic-ui-react';
import { Grid, Rail, Segment, Card, List } from 'semantic-ui-react';
import { LateralBar } from '../components/Index/LateralBar';
import { School } from '../components/Sections/School';
import MSPBlack from './../../public/assets/users/Santiago/services/MSPBlack.png';
import Sophos from './../../public/assets/users/Santiago/services/Sophos.ico';
import Bitdefender from './../../public/assets/users/Santiago/services/Bitdefender.ico';
import BitdefenderHome from './../../public/assets/users/Santiago/services/BitdefenderHome.ico';

import Comodo from './../../public/assets/users/Santiago/services/Comodo.ico';
import Bitwarden from './../../public/assets/users/Santiago/services/Bitwarden.ico';
import MSPWhite from './../../public/assets/users/Santiago/services/MSPWhite.png';
import Microsoft from './../../public/assets/users/Santiago/services/Microsoft.png';

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
            <header><div style={{width:'100%', background: '#0d0c15', marginTop:60, paddingLeft:50, height:450}}>
                <br/>
                <div style={{textAlign:'right', paddingRight:50, marginRight:0, float:'right'}} >
                      
                 <Image className="" src={Object.entries(MSPBlack)[0].slice(1)} alt='imagen' height={400} /> 
                </div>
                <br /> <br /> 
                    <h1 className="antigradienttext" style={{fontSize:'6em'}}><i>BitLopez MSP</i></h1>
                    <h4 style={{color:'white', marginLeft:60}}>Managed Services Provider y Managed Detection and Response Provider</h4>
                    
                    <br />
                    <h2 className="antigradienttext" style={{marginLeft:0, paddingLeft:0, fontSize:'4em'}}><i>Seguridad Líder</i></h2><br />
                    <h3 style={{marginLeft:0, paddingLeft:0, fontSize:'2em', color:'white'}}>Descanse tranquilo con las mejores herramientas de seguridad en las mejores manos</h3>

                    
                </div></header>

            
               
                
            <Layout>
            <center>
                    <h1 className="antigradienttext"><i>Nuestros vendors de preferencia</i></h1>
                    <br />
                    <h4>Software Empresarial</h4>
                    <br />
                </center>
            <Grid columns='three'  centered>
                <Grid.Row>

                    <Grid.Column>
                        <Card style={{ marginLeft: '-10px' }}>
                            <Image src={Object.entries(Bitdefender)[0].slice(1)} wrapped ui={false} alt="No se pudo cargar la imagen" height={200} width={200}/>
                            <Card.Content>
                               <Card.Header>Bitdefender</Card.Header>
                                <Card.Meta></Card.Meta>
                                <Card.Description>
                                  {/*  Trabajamos con Bitdefender Endpoint Security Tools para la protección de Endpoints físicos y viertuales así como servidores.
                                   Su protección multicapa EDR combinado con <i>Tunable machine Learning</i>, su Firewall poderoso, su alta capaciad de adaptación, su protección contra Exploits y su capacidad de mitigar el Ransomeware, su administración automática de parches de seguridad para el SO y aplicaciones variadas y gestión de encriptación, a la par de su gran y precisa capacidad de detección de vulnerabilidades y malas configuraciones hacen de este software una herramienta muy poderosa para la protección de Endpoints. */}
                               
                                   Trabajamos con Bitdefender Endpoint Security Tools para la protección de Endpoints físicos y viertuales así como servidores. <br />La renombrada firma de Antivirus ofrece un producto sencillo y poderoso para las mejores compañías.<br />
                                   <i>The best for the best</i>

                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>

                                    Algunos elementos se adquieres por separado
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card style={{ marginLeft: 10 }}>
                            <Image src={Object.entries(Microsoft)[0].slice(1)} wrapped ui={false} alt="No se pudo cargar la imagen"  width={200}/>
                            <Card.Content>
                                <Card.Header>Microsoft</Card.Header>
                                <Card.Meta></Card.Meta>
                                <Card.Description>
                                  Elegimos Microsoft por su reputación y su altaintegración con Windows, Office (Microsoft 365), Exchange. Micorosft Sentinel, Microsoft 365 Defender yMicrosoft Defender Threat Intelligence son parte de nuestro arsenal. 
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>

                                Algunos elementos se adquieres por separado
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card style={{ marginLeft: 10 }}>
                            <Image src={Object.entries(Sophos)[0].slice(1)} wrapped ui={false} alt="No se pudo cargar la imagen" height={200} width={200}/>
                            <Card.Content>
                                <Card.Header>Sophos</Card.Header>
                                <Card.Meta></Card.Meta>
                                <Card.Description>
                                   La multiplicidad y gran variedad de herramientas de seguridad de Sophos como Firewall de Red, NDR e Intercept X hacen de la firma de la firma una gran aliada contra la lucha del malware, y la simplicidad de la centralización lo torna en infalibre. 
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>

                                Algunos elementos se adquieres por separado
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    
                </Grid.Row>


            </Grid>
            <br /><br />
            {/* <hr />
             */}
            <center>
                    
                    <h4>Software de Hogar</h4>
                    <br />
                </center>
                <div className="card w-60" style={{ width: '100%', backgroundColor: 'white !important' }} >
                <div className="card-img-top d-flex align-items-center ">
                    <div>
                        <Image className="img-fluid" src={Object.entries(BitdefenderHome)[0].slice(1)} alt="Bitdefender for Home" style={{padding:10}} />
                    </div>

                    <p className="card-text"><strong>Bitdefender Antivirus</strong> Confiamos en Bitdefender Antivirus para el hogar por su robustez, su precisión, sencillez de instalación y su poderosa consola. Creemos en un antimalware posicionado como Líder en el mercado según estudios independientes.
                    </p>
                </div>


            </div>
             <br /> 
            
             <div className="card w-60" style={{ width: '100%', backgroundColor: 'white !important' }} >
                <div className="card-img-top d-flex align-items-center ">
                    <div>
                        <Image className="img-fluid" src={Object.entries(Comodo)[0].slice(1)} alt="Comodo for Home" style={{padding:5}} />
                    </div>

                    <p className="card-text"><strong>Comodo Firewall</strong> Confiamos en un firewall gratuito con HIPS, modo de aprendizaje y sandbox y, por sobre todo, robusto. Confiamos en el Firewall de Comodo como opción para quienes lo deseen.
                    </p>
                </div>


            </div>   
            <br />
            <div className="card w-60" style={{ width: '100%', backgroundColor: 'white !important' }} >
                <div className="card-img-top d-flex align-items-center ">
                    <div>
                        <Image className="img-fluid" src={Object.entries(Sophos)[0].slice(1)}alt="Sophos for Home" style={{padding:10}} />
                    </div>

                    <p className="card-text"><strong>Sophos</strong> Confiamos en el NEXT-GEN Antivirus de Sophos para el hogar por el renombre de la firma desarrolladora y los estudios independientes que validan su eficacia.
                    </p>
                </div>


            </div>

            </Layout>
            {/* <section className='barraLateral fixed-top '>
                <LateralBar />
            </section> */}

        </ React.Fragment>
    )


}

export default Managed;