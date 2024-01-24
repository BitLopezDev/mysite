import React from "react";
import { Image, Item } from "semantic-ui-react";
// import intelimage from './../../../../../public/images/threat intelligence 1.png'

import SOARIBM from "./../../../../../public/images/SOAR2.png";

const SOAR = () => {
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
              src={Object.entries(SOARIBM)[0].slice(1)}
              alt="No se pudo cargar la imagen"
            />{" "}
            <br />
          </Item.Image>
        </Item>
        <Item style={{ overflowY: "scroll", maxHeight: 300 }}>
          <h5>
            Una de las soluciones más avanzadas y eficaces para la gestión de la
            seguridad cibernética es el SOAR, que significa Security
            Orchestration, Automation and Response (Orquestación, Automatización
            y Respuesta de Seguridad). El SOAR utiliza la inteligencia
            artificial para filtrar las alertas de seguridad que recibe de
            múltiples fuentes, aliviando así la sobrecarga de trabajo que sufre
            el equipo SOC (Security Operations Center).
            <br />
            <br />
            Además, el SOAR analiza los datos de seguridad para detectar las
            amenazas más relevantes y alerta a los equipos de seguridad para que
            puedan actuar rápidamente.
            <br />
            <br />
            Los SOAR también pueden ayudar a los equipos de seguridad a
            responder a las amenazas de forma eficiente y efectiva, mediante la
            automatización y la orquestación de una variedad de procesos de
            seguridad. La automatización implica que el SOAR puede ejecutar
            acciones predefinidas para mitigar o resolver los incidentes de
            seguridad, sin necesidad de intervención humana. La orquestación
            implica que el SOAR puede coordinar las acciones de los diferentes
            equipos de seguridad, como el equipo de análisis, el equipo de
            respuesta y el equipo de gestión de riesgos, para que puedan
            trabajar juntos y compartir información. De esta forma, el SOAR
            mejora la capacidad de respuesta a las amenazas y reduce el tiempo y
            el coste de la resolución de incidentes. El SOAR es una solución
            sofisticada, innovadora e imprescindible para cualquier gran
            organización que quiera protegerse de las amenazas cibernéticas
            actuales y futuras.
            <br /> <br />
            <b>Hoy, la seguridad está en sus manos.</b>
          </h5>
        </Item>
      </Item.Group>
    </React.Fragment>
  );
};

export { SOAR };
