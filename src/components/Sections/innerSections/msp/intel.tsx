import React from 'react';

import intelimage from './../../../../../public/images/threat intelligence 1.png'
import { Arsenal } from './aresenal';

const Intel = () => {
    const description = "Manténgase un paso más adelante que las ciberamenazas actuales, incluso las más complejas, con Cyber Threat Intelligence";
    /* 
    ['Name', 'Image', 'certification', "completion"]
    */
   
    return (

        <React.Fragment>
            <Arsenal which={"intel"}  description={description} imageurl={Object.entries(intelimage)[0].slice(1)} />
        </ React.Fragment>

    );

}

export { Intel };