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
    width?:number | string,
    head?:boolean

}


const Layout = ( { children, nav, footer, paddTop, width = 800, head }: LayoutProps ) => {
    return (
        <React.Fragment >
           

            {head && <Headf ogType="website"></Headf>}



            
            <header>
              { nav &&  <Navbar />}
                <Modals />

            </header>


            <Container text>
        
                <main id="GlobalMain" style={{paddingTop:paddTop, width: width, margin: 'auto',}} >
                    {children}


                </main>

            </Container>
            
           {footer && <Footer/>}
        </React.Fragment>
    );
};
export default Layout;