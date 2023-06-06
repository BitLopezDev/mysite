import React, { ReactElement } from 'react';
import { Image, Item } from 'semantic-ui-react'
import { DiplomaModal } from './DiplomaModal';

const Arsenal = ( {...props }) => {

   
    if(props.diplomaurl.length <1){
        var seesconde :string | undefined = '';
    } else {
        var seesconde :string | undefined = 'seesconde';
    }
    

    return (
        <React.Fragment>

            <Item.Group >
                <Item >
                    <Item.Image size='giant'  >
                        {/* <FullStackModal /> */}
                        {/* https://react.semantic-ui.com/images/wireframe/image.png */}
                        {/* ./../../../../public/assets/users/Santiago/credenciales/Platzi/FullStackJS.png */}
                        <DiplomaModal which={props.which} />
                        {/* props.diplomaurl.lenght == 0  && 'seesconde' */}

                       

                    </Item.Image>

                   
                </Item>
            </Item.Group>

            <div style={{ 'overflow': 'scroll', maxHeight: 250, minHeight: 50, 'height' : '250px' }} >
                <p>{props.description}</p>

                
            </div>
           








        </React.Fragment>
    );

}

export { Arsenal };