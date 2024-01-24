import * as React from 'react';
import Layout from '../components/Layout/Layout';
import IntroBubble from '../components/Sections/IntroBubble';
import NextuCourses from '../components/Sections/NextuCourses';
import {PlatziCourses} from '../components/Sections/PlatziCourses';
import { PlatziNextuThanks } from '../components/Sections/PlatziNextuThanks';

import { CoursesCards } from '../components/Sections/CoursesCards';
import Head from 'next/head';

import './../../node_modules/bootstrap/dist/css/bootstrap.css';
const FullStack = () => {
    return (
        <>
            <Head>
                <title>CV Online | Web Development</title>
            </Head>
            <Layout nav={true} footer={true} paddTop={100}>
                <IntroBubble />
                <NextuCourses >

    
                </NextuCourses>
                <PlatziCourses />
                <CoursesCards />
                <PlatziNextuThanks />
              


            </Layout>
        </>
    );
}

export default FullStack;
//TODO: Difs between sections: Code stinks. Refactor: generate abstractions.
