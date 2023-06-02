import React from 'react';
import { Container } from 'semantic-ui-react';
import {Navbar} from './Navbar';
import Modals from '../Modals/Modals';
import Headf from '../Head/Headf';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {Footer} from './Footer';

interface LayoutProps {
    children?: React.ReactNode,
    nav?: Boolean,
    footer?: Boolean,
    paddTop?: number,
    width?:string

}


const Layout = ( { children, nav, footer, paddTop, width }: LayoutProps ) => {
    return (
        <React.Fragment >
            {/* <Script src={"./../../scripts/common.js"} ></Script>*/}

            {/* <Script src="./scripts/Libs/bootstrap.bundle.js" /> */}

            {/* <Script src="./scripts/Libs/jquery-3.6.1.min.js" /> */}

            <Headf ogType="website">



            </Headf>
            <header>
              { nav &&  <Navbar />}
                <Modals />

            </header>


            <Container text>
                <main id="GlobalMain" style={{paddingTop:paddTop}} >
                    {children}


                </main>

            </Container>
            
           {footer && <Footer/>}
        </React.Fragment>
    );
};
export default Layout;