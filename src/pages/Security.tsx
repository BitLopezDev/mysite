import * as React from 'react';
import Layout from '../components/Layout/Layout';
import { SecurityCards } from '../components/Sections/SecurityCards';
import { PlatziSecurity } from '../components/Sections/PlatziSecurity';
import Head from 'next/head';
import { UdemySecurity } from '../components/Sections/UdemySecurity';

import './../../node_modules/bootstrap/dist/css/bootstrap.css';


const Security = () => {
    React.useEffect(() => {

    })
    return (
        <>
            <Head>
                <title>CV Online | Cybersecurity</title>
            </Head>
            <Layout nav={true} footer={false} paddTop={100} head={true}>

                <div>

                    <SecurityCards />
                    <PlatziSecurity />
                    <UdemySecurity />

                </div>

            </Layout>
        </>
    );
}

export default Security;