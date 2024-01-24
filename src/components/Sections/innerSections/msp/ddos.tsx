import React from "react";
import { Image, Item } from "semantic-ui-react";
// import intelimage from './../../../../../public/images/threat intelligence 1.png'

import DDoS from "./../../../../../public/images/DDoS.png";

const DDOS = () => {
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
              src={Object.entries(DDoS)[0].slice(1)}
              alt="No se pudo cargar la imagen"
            />{" "}
            <br />
          </Item.Image>
        </Item>
        <Item style={{ overflowY: "scroll", maxHeight: 300 }}>
          <h5>
            Los ataques DDoS son una amenaza cada vez más frecuente y peligrosa
            para las empresas y organizaciones que dependen de sus servicios y
            aplicaciones web. Un ataque DDoS consiste en enviar un flujo masivo
            de datos desde múltiples sistemas infectados hacia un servidor o un
            recurso web, con el fin de sobrecargar su capacidad y provocar su
            caída o interrupción. Esto puede ocasionar:
            <br />
            <br />
            - Pérdida de ingresos por la imposibilidad de realizar transacciones
            o ventas online.
            <br />- Interrupción de los sitios web y las aplicaciones, afectando
            a la experiencia y la satisfacción de los usuarios y clientes.
            <br />- Daño a la reputación y la imagen de la empresa u
            organización, que puede perder credibilidad y confianza ante el
            público.
            <br />- Costos de recuperación y reparación de los sistemas
            afectados, así como posibles sanciones o demandas por incumplimiento
            de contratos o normativas.
            <br />
            <br />
            Por eso, es fundamental contar con una solución de protección contra
            ataques DDoS que sea capaz de detectar y mitigar este tipo de
            amenazas, garantizando la continuidad del negocio y la seguridad de
            los datos. Una solución de protección contra ataques DDoS ofrece las
            siguientes ventajas:
            <br />
            <br />
            <br />- Monitoriza el tráfico entrante y saliente de los recursos
            web, identificando los patrones anómalos o maliciosos que puedan
            indicar un ataque DDoS en curso o inminente.
            <br />- Filtra y bloquea las solicitudes o paquetes atacantes,
            impidiendo que lleguen al servidor o al recurso web objetivo, y
            permitiendo que sólo pasen las solicitudes legítimas de los usuarios
            reales.
            <br />- Distribuye la carga de trabajo entre varios servidores o
            recursos web, utilizando técnicas como el balanceo de carga o el uso
            de redes de distribución de contenido (CDN), para evitar que un solo
            punto se sature y se colapse.
            <br />- Proporciona una respuesta rápida y eficaz ante cualquier
            tipo de ataque DDoS, independientemente de su volumen, duración,
            complejidad o variabilidad, gracias a su sofisticación tecnológica y
            a su capacidad de adaptación.
            <br />- Ofrece una visibilidad y un control total sobre el estado y
            el rendimiento de los recursos web, así como sobre las acciones
            realizadas para mitigar los ataques DDoS, mediante informes
            detallados y alertas en tiempo real. Una solución de protección
            contra ataques DDoS es una inversión inteligente y rentable para
            cualquier empresa u organización que quiera asegurar la
            disponibilidad, la funcionalidad y la seguridad de sus servicios y
            aplicaciones web. Con esta solución, se puede prevenir y evitar las
            consecuencias negativas que un ataque DDoS puede tener sobre el
            negocio, los usuarios y los clientes.
            <br /> <br />
            <b>Hoy, la seguridad está en sus manos.</b>
          </h5>
        </Item>
      </Item.Group>
    </React.Fragment>
  );
};

export { DDOS };
