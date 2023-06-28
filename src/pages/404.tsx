import * as React from 'react';
import Layout from '../components/Layout/Layout';

import Head from 'next/head';


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
           <Layout nav={true} footer={false} paddTop={100}>

           <center >
                <h1 className="antigradienttext">Atención: La página que buscaba no existe, o se ha movido de ubicación.</h1>
                {/* <h4>CV Online</h4> */}
                <br />
            </center>
            <style jsx>{`
    body {
        background-color:black;
    }
    
    `}</style>
           </Layout>


           
        </ React.Fragment>

    );


}

export default Custom404;