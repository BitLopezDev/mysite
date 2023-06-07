import React, { ReactElement } from 'react';
import { Image, Item } from 'semantic-ui-react'


const Arsenal = ( {...props }) => {

   
    
    

    return (
        <React.Fragment>

            <Item.Group >
                <Item >
                    <Item.Image size='giant'  >
                        {/* <FullStackModal /> */}
                        {/* https://react.semantic-ui.com/images/wireframe/image.png */}
                        {/* ./../../../../public/assets/users/Santiago/credenciales/Platzi/FullStackJS.png */}
                       {!!props.video ? <video width="100%" autoPlay loop style={{ height: '450px' }}>
            <source src={props.mediaurl} type="video/mp4" />
            Sorry, your browser does not support videos.
          </video>  :  <Image src={props.imageurl} alt="No se pudo cargar el certificado"/>}
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