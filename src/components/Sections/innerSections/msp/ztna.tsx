import React from "react";
import { Image, Item } from "semantic-ui-react";
// import intelimage from './../../../../../public/images/threat intelligence 1.png'

import zerotrust from "./../../../../../public/images/zerotrustnetwork.png";

const video = "/videos/video4.mp4";
const ZTNA = () => {
  const description =
    "Manténgase un paso más adelante que las ciberamenazas actuales, incluso las más complejas, con Cyber Threat Intelligence";
  /* 
    ['Name', 'Image', 'certification', "completion"]
    */

  return (
    <React.Fragment>
      {/* <Arsenal which={"intel"}  description={description} mediaurl={video} video={true}/> */}
      <Item.Group>
        <Item>
          <Item.Image size="huge">
            {/* <FullStackModal /> */}
            {/* https://react.semantic-ui.com/images/wireframe/image.png */}
            {/* ./../../../../public/assets/users/Santiago/credenciales/Platzi/FullStackJS.png */}
            <Image
              src={Object.entries(zerotrust)[0].slice(1)}
              alt="No se pudo cargar la imagen"
            />{" "}
            <br />
          </Item.Image>
        </Item>
        <Item style={{ overflowY: "scroll", maxHeight: 300 }}>
          <h5>
            El modelo Zero Trust es una estrategia de seguridad de la
            información que no confía implícitamente en nada dentro o fuera del
            perímetro de red de una organización. En cambio, requiere
            autenticación o verificación antes de otorgar acceso a datos
            confidenciales o recursos protegidos. <br />
            Una de las formas de implementar el modelo Zero Trust es desde la
            perspectiva centrada en la identidad, que se basa en el principio de
            acceso con privilegios mínimos. Esto significa que solo se otorga el
            acceso necesario y justo a tiempo a los usuarios y dispositivos,
            según el contexto y el riesgo de cada solicitud. De esta forma, se
            limita la superficie de ataque y se evita el movimiento lateral de
            los atacantes dentro de la red.
            <br />
            <br />
            El modelo Zero Trust centrado en la identidad ofrece múltiples
            beneficios para las organizaciones que quieren mejorar su seguridad
            y su productividad. Algunos de estos beneficios son:
            <br />
            <br />
            - Es lo novedoso: El modelo Zero Trust representa una transformación
            digital de la seguridad, que se adapta a las necesidades actuales de
            las organizaciones que operan con una infraestructura de cloud
            híbrido, una fuerza de trabajo dispersa y una gran cantidad de datos
            sensibles.
            <br />
            - Es lo más seguro: El modelo Zero Trust supera las limitaciones de
            la seguridad perimetral tradicional, que se basaba en cortafuegos y
            otras herramientas basadas en la red para inspeccionar y validar a
            los usuarios que entraban y salían de la red. Estas herramientas ya
            no son suficientes para proteger los recursos que se encuentran
            fuera del perímetro, como las aplicaciones en la nube, los
            dispositivos móviles o los usuarios remotos. El modelo Zero Trust
            asume que la red está siempre comprometida y aplica controles
            estrictos a todos los niveles: usuario, dispositivo, aplicación y
            dato.
            <br />
            - Es lo más eficaz: El modelo Zero Trust permite a las
            organizaciones optimizar sus recursos y reducir sus costes al
            eliminar las soluciones de seguridad redundantes o poco integradas.
            Además, al ofrecer una experiencia de usuario más fluida y segura,
            el modelo Zero Trust mejora la productividad y la satisfacción de
            los empleados, clientes y socios.
            <br />
            El modelo Zero Trust centrado en la identidad es una solución
            innovadora, segura y eficaz para proteger los recursos más valiosos
            de una organización en un entorno complejo y dinámico. Al adoptar
            este modelo, las organizaciones pueden obtener una ventaja
            competitiva y estar preparadas para enfrentar los desafíos actuales
            y futuros de la seguridad.
            <br />
            <br />
            <b>Hoy, la seguridad está en sus manos.</b>
          </h5>
        </Item>
      </Item.Group>
    </React.Fragment>
  );
};

export { ZTNA };
