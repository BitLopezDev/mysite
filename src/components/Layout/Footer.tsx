import React from 'react';


// import './../../../node_modules/bootstrap/dist/css/bootstrap.css';

type LayoutProps = {
    children?: React.ReactNode
}


const Footer = ( { children }: LayoutProps) => {
    return (
        <React.Fragment >
    
    <footer className='mt-5 p-4 fondogradiente text-black text-center' >
<h4 style={{color: 'white'}}>BitLoez, BitLopez Dev y BitLopez MSP son apodos para una persona física y no nombres de empresa ni persona jurídica alguna.</h4>
</footer>

            

        </React.Fragment>
    );
};
export {Footer};