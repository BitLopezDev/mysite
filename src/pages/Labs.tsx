import React from 'react';
import {Image} from 'semantic-ui-react';
import { Arsenalcontainer } from './../components/Sections/innerSections/msp/arsenal';
import threatintel from './../../public/images/threat intelligence 1.png'
 function Labs (){

    return(

        <>
    <Arsenalcontainer />
    <Image
                  src={Object.entries(threatintel)[0].slice(1)}
                  wrapped
                  ui={false}
                  alt="No se pudo cargar la imagen"
                  height={'auto'}
                  width={'100%'}
                  style={{ padding:0}}
                />
    </>
    );
    


}

export default Labs;