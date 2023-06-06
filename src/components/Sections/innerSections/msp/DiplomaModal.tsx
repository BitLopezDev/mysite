import React from 'react'
import { Image, Button, Header, Icon, Modal, Dimmer } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import intel from './../../../../../public/images/threat intelligence 1.png'

const inlineStyle = {
  modal: {
    marginTop: '0px !important',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};
function ObjectSlice(value) {

  if (typeof value === 'object') {
    return Object.entries(value)[0].slice(1);

  } else {

    return null;
  }

}

function DiplomaModal(props) {
  const [open, setOpen] = React.useState(false);
  var certificado;

  var nodiploma = '';

  switch (props.which) {
   


     
    case 'HTMLCSS':
      certificado = ObjectSlice(nodiploma) || 'https://static.platzi.com/media/learningpath/badges/08261d05-1b55-4c23-b9b4-8427d4247835.jpg';
      break;
    case 'intel':
      certificado = ObjectSlice(intel) || 'https://static.platzi.com/media/learningpath/badges/824ba606-359a-453b-925e-e1b81bed8785.jpg';
      break;
    case 'FrontendReact':
      certificado = ObjectSlice(nodiploma) || 'https://static.platzi.com/media/learningpath/badges/1690f090-fcce-4456-9e56-2882c2e68a8d.jpg';
      break;
    case 'JavaScriptProf':
      certificado = ObjectSlice(nodiploma) || 'https://static.platzi.com/media/learningpath/badges/f6885a96-a017-4123-a503-c776de5223de.jpg';
      break;
    case 'Fullstacknext':
      certificado = ObjectSlice(nodiploma) || 'https://static.platzi.com/media/learningpath/badges/4c39108f-765c-4d0c-ac66-addf1bf1730a.jpg';
      break;
      case 'CustomNode':
      certificado = ObjectSlice(nodiploma) || 'https://static.platzi.com/media/learningpath/badges/120643f5-377b-4b20-b223-cc793c432e9f.jpg';
      break;

      case 'CustomDBs':
      certificado = ObjectSlice(nodiploma) || 'https://static.platzi.com/media/learningpath/badges/a1e4f4bd-bdef-4529-81c3-6ce420be925b.jpg';
      break;


    default:
      certificado = 'https://react.semantic-ui.com/images/wireframe/image.png';
      break;
  }


  return (
    <center>

<Image src={certificado} alt="No se pudo cargar el certificado"/>
     
    </center>

  )
}

export { DiplomaModal };
