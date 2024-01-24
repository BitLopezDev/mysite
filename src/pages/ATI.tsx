import React from "react";
import Head from "next/head";

import { Image } from "semantic-ui-react";

import lunettes from "./../../public/images/threat intelligence 2 trimmed.png";
import { Navbar } from "../components/Layout/Navbar";
// import Layout from "../components/Layout/Layout";

// import { Nav } from "react-bootstrap";

export default function ATI() {
  return (
    <div className="backgradient">
      {/* <iframe
        width={"100%"}
        height={600}
        src={cybermap}
        style={{ paddingBottom: 0, marginBottom: 0 }}
      /> */}

      {/* 
    
    
    */}

      <br />
      <Head>
        <title>BitLopez ATI</title>
      </Head>
      <header>
        <Navbar />
        <div style={{ zIndex: 20 }}>
          <h1
            className="antigradienttext"
            style={{ fontSize: "6em", paddingTop: 60, paddingLeft: 25 }}
          >
            <i>BitLopez ATI</i>
          </h1>
          <h4 style={{ color: "white", marginLeft: 60 }}>
            Analista en Tecnologías de la Información
          </h4>
          <br />
          <p
            className="antigradienttext"
            style={{ marginLeft: 0, paddingLeft: 25, fontSize: "2em" }}
          >
            <i>CURSANDO ACTUALMENTE </i>
          </p>
        </div>
        <div
          id="headerIMG"
          style={{
            position: "absolute",
            top: 60,
            right: 0,
            textAlign: "right",
            paddingRight: 0,
            marginRight: 0,
            zIndex: 1,
            overflow: "hidden",

            background: "black",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={Object.entries(lunettes)[0].slice(1)}
              alt="Chania"
              layout="fill"
              objectFit="cover"
              height={350}
            />
          </div>
        </div>
      </header>

      {/* <Layout nav={true} footer={true} paddTop={100} head={true}></Layout> */}

      <br />
      <br />
      <center>
        <div className="container">
          <h1 className="colorwhite">Materias aprobadas del plan antiguo</h1>
          <div className="row" id="row0">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title ">Programación 1</h5>
                  <p className="card-text antigradienttext">APROBADA (94%)</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Pensamiento computacional</h5>
                  <p className="card-text antigradienttext">APROBADA (86%)</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <h1 className="colorwhite">Plan 2024</h1>
          <br />
          <br />
          <div className="row" id="row1">
            <h3 className="colorwhite">Primer semestre</h3>
            <br />
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5
                    className="card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#p1"
                  >
                    Programación 1
                  </h5>
                  <p className="card-text antigradienttext">APROBADA (94%)</p>

                  <br />
                  <h6>
                    <a data-bs-toggle="collapse" data-bs-target="#p1">
                      {" "}
                      Expandir / Colapsar
                    </a>
                  </h6>
                  <div id="p1" className="collapse">
                    Introduce a los principios generales de la programación,
                    abordando particularmente la resolución de algoritmos
                    básicos; trabaja sobre estructuras en memoria, asumiendo que
                    el estudiante no tiene conocimientos previos en informática.
                    <h6>
                      <a href="#row0">
                        <p data-bs-toggle="collapse" data-bs-target="#p1">
                          Colapsar
                        </p>
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5
                    className="card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#diseñoIWeb"
                  >
                    Diseño de interfaz web
                  </h5>
                  <p className="card-text antigradienttext">
                    CURSANDO / POR CURSAR
                  </p>
                  <br />
                  <h6>
                    <a data-bs-toggle="collapse" data-bs-target="#diseñoIWeb">
                      {" "}
                      Expandir / Colapsar
                    </a>
                  </h6>
                  <div id="diseñoIWeb" className="collapse">
                    Poniendo énfasis en la usabilidad y la experiencia del
                    usuario, capacita al estudiante en el diseño de interfaz en
                    ambiente web implementado con HTML, CSS y frameworks de
                    desarrollo front-end (Bootstrap), que cumpla con estándares
                    y buenas prácticas del mercado.
                    <h6>
                      <a href="#row0">
                        <p
                          data-bs-toggle="collapse"
                          data-bs-target="#diseñoIWeb"
                        >
                          Colapsar
                        </p>
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5
                    className="card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#pensamiento"
                  >
                    Pensamiento lógico
                  </h5>
                  <p className="card-text antigradienttext">
                    CURSANDO / POR CURSAR
                  </p>
                  <br />
                  <h6>
                    <a data-bs-toggle="collapse" data-bs-target="#pensamiento">
                      {" "}
                      Expandir / Colapsar
                    </a>
                  </h6>
                  <div id="pensamiento" className="collapse">
                    Introduce a los estudiantes en los conceptos
                    lógico-matemáticos fundamentales que se aplican en el
                    desarrollo de software y permiten desarrollar habilidades de
                    abstracción.
                    <h6>
                      <a href="#row0">
                        <p
                          data-bs-toggle="collapse"
                          data-bs-target="#pensamiento"
                        >
                          Colapsar
                        </p>
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <center>
              <br /> <br />
              <div style={{ maxWidth: 600 }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Taller despliegue de aplicaciones
                    </h5>
                    <p className="card-text">
                      <span
                        className="antigradienttext"
                        style={{ display: "block", marginBottom: "1rem" }}
                      >
                        CURSANDO / POR CURSAR
                      </span>
                      Mediante una dinámica práctica de trabajo, establece las
                      bases necesarias para la instalación y configuración de
                      aplicaciones en ambientes web.
                    </p>
                  </div>
                </div>
              </div>
            </center>
          </div>
          <br /> <br />
          <div className="row" id="row1">
            <h3 className="colorwhite">Segundo semestre</h3>

            <br />
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5
                    className="card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#p2"
                  >
                    Programación 2
                  </h5>
                  <p className="card-text antigradienttext">
                    CURSANDO / POR CURSAR
                  </p>
                  <br />
                  <h6>
                    <a data-bs-toggle="collapse" data-bs-target="#p2">
                      {" "}
                      Expandir / Colapsar
                    </a>
                  </h6>
                  <div id="p2" className="collapse">
                    Extiende los conocimientos de programación adquiridos e
                    introduce a los principios generales de la programación
                    orientada a objetos. Capacita en Lenguaje Unificado de
                    Modelado (UML) y brinda los fundamentos del concepto de
                    testing de software.
                    <h6>
                      <a href="#row1">
                        <p data-bs-toggle="collapse" data-bs-target="#p2">
                          Colapsar
                        </p>
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5
                    className="card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#DB1"
                  >
                    Bases de datos 1
                  </h5>
                  <p className="card-text antigradienttext">
                    CURSANDO / POR CURSAR
                  </p>
                  <br />
                  <h6>
                    <a data-bs-toggle="collapse" data-bs-target="#DB1">
                      {" "}
                      Expandir / Colapsar
                    </a>
                  </h6>
                  <div id="DB1" className="collapse">
                    Enseña la teoría y el diseño de bases de datos: modelado de
                    datos, normalización, y conceptos de Lenguaje de Consulta
                    Estructurado. Introduce las técnicas que permiten realizar
                    el modelado conceptual de los datos.
                    <h6>
                      <a href="#row1">
                        <p data-bs-toggle="collapse" data-bs-target="#DB1">
                          Colapsar
                        </p>
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5
                    className="card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#metadevcolab"
                  >
                    Metodologías de desarrollo colaborativo
                  </h5>
                  <p className="card-text antigradienttext">
                    CURSANDO / POR CURSAR
                  </p>
                  <br />
                  <h6>
                    <a data-bs-toggle="collapse" data-bs-target="#metadevcolab">
                      {" "}
                      Expandir / Colapsar
                    </a>
                  </h6>
                  <div id="metadevcolab" className="collapse">
                    Permite un abordaje sobre conceptos de ingeniería de
                    software, requerimientos y metodologías de desarrollo,
                    apuntando a formalizar el marco metodológico y desarrollar
                    habilidades blandas, trabajo en equipo y comunicación
                    efectiva.
                    <h6>
                      <a href="#row1">
                        <p
                          data-bs-toggle="collapse"
                          data-bs-target="#metadevcolab"
                        >
                          Colapsar
                        </p>
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <center>
              <br /> <br />
              <div style={{ maxWidth: 600 }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Taller de desarrollo para dispositivos móviles
                    </h5>
                    <p className="card-text">
                      <span
                        className="antigradienttext"
                        style={{ display: "block", marginBottom: "1rem" }}
                      >
                        CURSANDO / POR CURSAR
                      </span>
                      El taller se enfoca en la arquitectura, el diseño y la
                      experimentación de nuevas tecnologías, como el desarrollo
                      de aplicaciones móviles. Realiza un proyecto basado en la
                      aplicación de herramientas integradoras y nuevos entornos
                      de desarrollo.
                    </p>
                  </div>
                </div>
              </div>
            </center>
          </div>
          <br /> <br />
          <div className="row" id="row2">
            <h3 className="colorwhite">Tercer semestre</h3>

            <br />
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5
                    className="card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#p3"
                  >
                    Programación 3
                  </h5>
                  <p className="card-text antigradienttext">
                    CURSANDO / POR CURSAR
                  </p>
                  <br />
                  <h6>
                    <a data-bs-toggle="collapse" data-bs-target="#p3">
                      {" "}
                      Expandir / Colapsar
                    </a>
                  </h6>
                  <div id="p3" className="collapse">
                    Estudia técnicas que permiten desarrollar aplicaciones
                    orientadas a objetos, desde la concepción del sistema hasta
                    la implementación, fijando los conceptos teóricos mediante
                    la práctica intensa en laboratorio. Las aplicaciones se
                    construyen bajo el modelo de tres capas persistiendo los
                    datos en bases de datos relacionales. Profundiza en los
                    fundamentos de UML y en técnicas de desarrollo de software.
                    <h6>
                      <a href="#row2">
                        <p data-bs-toggle="collapse" data-bs-target="#p3">
                          Colapsar
                        </p>
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5
                    className="card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#DB1"
                  >
                    Bases de datos 1
                  </h5>
                  <p className="card-text antigradienttext">
                    CURSANDO / POR CURSAR
                  </p>
                  <br />
                  <h6>
                    <a data-bs-toggle="collapse" data-bs-target="#DB1">
                      {" "}
                      Expandir / Colapsar
                    </a>
                  </h6>
                  <div id="DB1" className="collapse">
                    Enseña la teoría y el diseño de bases de datos: modelado de
                    datos, normalización, y conceptos de Lenguaje de Consulta
                    Estructurado. Introduce las técnicas que permiten realizar
                    el modelado conceptual de los datos.
                    <h6>
                      <a href="#row2">
                        <p data-bs-toggle="collapse" data-bs-target="#DB1">
                          Colapsar
                        </p>
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5
                    className="card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#algoritmos"
                  >
                    Algoritmos y estructuras de datos
                  </h5>
                  <p className="card-text antigradienttext">
                    CURSANDO / POR CURSAR
                  </p>
                  <br />
                  <h6>
                    <a data-bs-toggle="collapse" data-bs-target="#algoritmos">
                      {" "}
                      Expandir / Colapsar
                    </a>
                  </h6>
                  <div id="algoritmos" className="collapse">
                    Estudia las técnicas de construcción de algoritmos y de
                    recuperación y almacenamiento de información. Presenta las
                    herramientas necesarias que permiten diseñar distintas
                    alternativas para diseñar problemas complejos.
                    <h6>
                      <a href="#row2">
                        <p
                          data-bs-toggle="collapse"
                          data-bs-target="#algoritmos"
                        >
                          Colapsar
                        </p>
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <center>
              <br /> <br />
              <div style={{ maxWidth: 600 }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Taller de ingeniería de software
                    </h5>
                    <p className="card-text">
                      <span
                        className="antigradienttext"
                        style={{ display: "block", marginBottom: "1rem" }}
                      >
                        CURSANDO / POR CURSAR
                      </span>
                      Complementa lo visto en semestres previos e incorpora
                      herramientas para la aplicación práctica de gestión y
                      estimación en proyectos de software.
                    </p>
                  </div>
                </div>
              </div>
            </center>
            <center>
              <br /> <br />
              <div style={{ maxWidth: "100%", color: "#8d40f6" }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Título intermedio:{" "}
                      <b>
                        <i style={{ color: "#8d40f6" }}>Programador Web</i>
                      </b>
                    </h5>
                  </div>
                </div>
              </div>
            </center>
          </div>
          <br /> <br />
          <div className="row" id="row3">
            <h3 className="colorwhite">Tercer año</h3>

            <br />

            <center>
              <br /> <br />
              <div style={{ maxWidth: 600 }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Proyecto integrador</h5>
                    <p className="card-text">
                      <span
                        className="antigradienttext"
                        style={{ display: "block", marginBottom: "1rem" }}
                      >
                        CURSANDO / POR CURSAR
                      </span>
                      Mediante la guía de un tutor y trabajando en equipo, el
                      estudiante releva las necesidades de una aplicación para
                      un cliente real; efectúa el análisis, diseño y
                      programación del sistema, finalizando con la
                      implementación y posterior defensa ante un tribunal de
                      corrección.
                    </p>
                  </div>
                </div>
              </div>
            </center>
            <center>
              <br /> <br />
              <div style={{ maxWidth: "100%", color: "#8d40f6" }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Título intermedio:{" "}
                      <b>
                        <i style={{ color: "#8d40f6" }}>Analista Programador</i>
                      </b>
                    </h5>
                  </div>
                </div>
              </div>
            </center>
            <center>
              <br /> <br />
              <div style={{ maxWidth: 600 }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Electiva de profundización tecnológica
                    </h5>
                    <p className="card-text">
                      Esta asignatura permite al estudiante elegir un área
                      temática sobre la cual profundizar sus conocimientos. Las
                      áreas a elegir dependerán de las alternativas habilitadas
                      en la universidad previo a la inscripción.
                      <br />
                      La Electiva en Profundización Tecnológica puede cursarse
                      en paralelo, previo o posteriormente al Proyecto
                      Integrador.
                    </p>
                  </div>
                </div>
              </div>
            </center>
            <center>
              <br /> <br />
              <div style={{ maxWidth: 600 }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">programación avanzada</h5>
                    <p className="card-text">
                      Complementa lo visto en Algoritmos y Estructuras de Datos,
                      profundizando en aspectos de eficiencia de algoritmos e
                      incorporando estructuras avanzadas, con un enfoque
                      orientado al tipo de problemas que se piden en entrevistas
                      técnicas de inserción laboral. Puede cursarse en paralelo,
                      previo o posteriormente al Proyecto Integrador.
                    </p>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </center>

      <br />
      <br />
      <center>
        <br /> <br />
        <div style={{ maxWidth: "100%" }}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Título final:{" "}
                <b>
                  <i style={{ color: "#8d40f6" }}>
                    Analista en Tecnologías de la Información
                  </i>
                </b>
              </h5>
            </div>
          </div>
        </div>
      </center>

      <style jsx>{`
        .backgradient {
          background: linear-gradient(
            90deg,
            rgba(27, 164, 216, 1) 0%,
            rgba(67, 127, 227, 1) 35%,
            rgba(151, 53, 252, 1) 100%
          );
        }

        div.scrollmenu {
          background: white;
          overflow: auto;
          white-space: nowrap;
          width: 80%;
          -webkit-border-radius: 5px;
          -webkit-border-top-left-radius: 50px;
          -moz-border-radius: 5px;
          -moz-border-radius-topleft: 50px;
          border-radius: 5px;
          border-top-left-radius: 50px;
        }

        div.scrollmenu::-webkit-scrollbar {
          /*  background-color: rgba(67, 127, 227, 1);*/ /* color of the top and bottom buttons */
          background-color: rgba(67, 127, 227, 1);
          /*background-color:black;*/
          height: 12px; /* height of the top and bottom buttons */
        }

        div.scrollmenu::-webkit-scrollbar-thumb {
          background-color: rgba(
            151,
            53,
            252,
            1
          ); /* color of the scroll thumb */
          /*background-color: white;*/
          max-width: 150px;
        }

        div.scrollmenu {
          scrollbar-width: auto; /* "auto" or "thin" */
          scrollbar-color: rgba(151, 53, 252, 1) rgba(67, 127, 227, 1); /* scroll thumb and track */
        }

        div.scrollmenu .scrollchild {
          display: inline-block;
          color: white;

          padding: 14px;
        }
        .colorwhite {
          color: white;
        }

        header {
          height: 350px;
          background: black;
        }
        #headerIMG {
          height: 310px !important;
          background: black;
        }
        @media screen and (max-width: 510px) {
          header {
            height: 480px;
            background: black;
          }
        }
        @media screen and (max-width: 946px) {
          #headerIMG {
            display: none !important;
          }
        }
        body {
        }
      `}</style>
    </div>
  );
}
