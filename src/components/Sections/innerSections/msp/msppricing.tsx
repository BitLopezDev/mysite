import React from "react";
import { Card, Icon, Grid, Image } from "semantic-ui-react";

import Layout from "../../../Layout/Layout";
import { StaticImageData } from "next/image";
import MSPsquare from "./../../../../../public/assets/users/Santiago/imágenes/Logo/BasicClose.png";
import "./../../../../../node_modules/bootstrap/dist/css/bootstrap.css";
// import Bitdefender from "./../../public/assets/users/Santiago/services/Bitdefender.ico";
// import Microsoft from "./../../public/assets/users/Santiago/services/Microsoft.png";
export function MSPPricing() {
  return (
    <>
      <div id="PricesReturn">
        <br />
      </div>

      <div className="container">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4
                className="card-title"
                data-bs-toggle="collapse"
                data-bs-target="#prices"
              >
                Precios
              </h4>
              <p className="card-text">Consulte nuestros precios</p>
              <br />
              <h6>
                <a data-bs-toggle="collapse" data-bs-target="#prices">
                  {" "}
                  Expandir / Colapsar
                </a>
              </h6>
              <div id="prices" className="collapse">
                <Grid columns="five" centered>
                  <Grid.Row>
                    {/*  */}
                    <Grid.Column>
                      <Card>
                        <Image
                          src={Object.entries(MSPsquare)[0].slice(1)}
                          wrapped
                          ui={false}
                          alt="No se pudo cargar la imagen"
                        />
                        <Card.Content>
                          <Card.Header>Starter</Card.Header>
                          <Card.Meta>1 - 5 dispositivos</Card.Meta>
                          <b>15 USD</b>
                          <Card.Description>
                            <ul>
                              <li>Bitdefender Endpoint Security Tools</li>
                              <br />
                              <li>eXtended Detection and Response</li>
                              <br />
                              <li>Endpoint Detection and Response</li>
                              <br />
                              <li>Inline Sandbox</li>
                              <br />
                              <br />

                              <li>Anomaly Defense</li>
                              <br />
                              <li>Professional Email, custom domain.</li>
                              <br />
                              <li>
                                Basic site DDoS, common certificate protection
                              </li>
                              <br />
                            </ul>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a>
                            Precio de Honorarios sugerido. Consultar por precio
                            final. Precio por usuario por dispositivo por mes.
                          </a>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                    <Grid.Column>
                      <Card>
                        <Image
                          src={Object.entries(MSPsquare)[0].slice(1)}
                          wrapped
                          ui={false}
                          alt="No se pudo cargar la imagen"
                        />
                        <Card.Content>
                          <Card.Header>Basic</Card.Header>
                          <Card.Meta>1 - 10 dispositivos</Card.Meta>
                          <b>25 USD</b>
                          <Card.Description>
                            <ul>
                              <li>
                                <b>Starter Plan plus:</b>
                              </li>
                              <br />

                              <li>Email, Office Security</li>
                              <br />
                              <li>Basic NEXT-GEN firewall</li>
                              <br />
                              <li>SIEM</li>
                              <br />
                              <li>
                                Paid Site protection, javascript captchas and
                                firewall rules.
                              </li>
                              <br />
                            </ul>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a>
                            Precio de Honorarios sugerido. Consultar por precio
                            final. Precio por usuario por dispositivo por mes.
                          </a>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                    <Grid.Column>
                      <Card style={{ marginLeft: 5 }}>
                        <Image
                          src={Object.entries(MSPsquare)[0].slice(1)}
                          wrapped
                          ui={false}
                          alt="No se pudo cargar la imagen"
                        />
                        <Card.Content>
                          <Card.Header>Standart</Card.Header>
                          <Card.Meta>5 - 35 dispositivos</Card.Meta>
                          <b>40 USD</b>
                          <Card.Description>
                            <ul>
                              <li>
                                <b>Basic Plan plus:</b>
                              </li>
                              <br />
                              <li>Pro Network Firewall</li>
                              <br />
                              <li>Pro site, domain defense</li>
                              <br />
                              <li>Next-Gen IPS</li>
                              <br />
                              <li>Zero Day firewall protection</li>
                              <br />
                              <li>Zero Trust Network Access</li>
                              <br />
                              <li>Network Detection and Response</li>
                              <br />
                            </ul>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a>
                            Precio de Honorarios sugerido. Consultar por precio
                            final. Precio por usuario por dispositivo por mes.
                          </a>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    {/*  */}
                    <Grid.Column>
                      <Card>
                        <Image
                          src={Object.entries(MSPsquare)[0].slice(1)}
                          wrapped
                          ui={false}
                          alt="No se pudo cargar la imagen"
                        />
                        <Card.Content>
                          <Card.Header>Standart Premium</Card.Header>
                          <Card.Meta>25 - 50 dispositivos</Card.Meta>
                          <b>45 USD</b>

                          <Card.Description>
                            <ul>
                              <li>
                                <b>Standart Plan plus:</b>
                              </li>
                              <br />

                              <li>Secure Access Service Edge</li>
                              <br />
                              <li>Cloud Access Secure Broker (part of SASE)</li>
                              <br />
                              <li>Secure Web Gataway (part of SASE)</li>
                              <br />
                              <li>Azure, AWS, Security</li>
                              <br />
                              <li>GitHub Security</li>
                              <br />
                              <li>Web Application Firewall</li>
                              <br />
                              <li>Cloud Inline Sandbox</li>
                              <br />
                            </ul>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a>
                            Precio de Honorarios sugerido. Consultar por precio
                            final. Precio por usuario por dispositivo por mes.
                          </a>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                    <Grid.Column>
                      <Card>
                        <Image
                          src={Object.entries(MSPsquare)[0].slice(1)}
                          wrapped
                          ui={false}
                          alt="No se pudo cargar la imagen"
                        />
                        <Card.Content>
                          <Card.Header>Pro</Card.Header>
                          <Card.Meta>30 - 100 dispositivos</Card.Meta>
                          <b>60 USD</b>
                          <Card.Description>
                            <ul>
                              <li>
                                <b>Standart Premium Plan plus:</b>
                              </li>
                              <br />
                              <li>Azure Sentinel SIEM</li>
                              <br />
                              <li>Advanced GitHub Security</li>
                              <br />
                              <li>Additional Threat Intelligence sources</li>
                              <br />
                              <li>Identity Protection</li>
                              <br />
                              <li>Azure, AWS, Security</li>
                              <br />
                              <li>Azure Active Directory</li>
                              <br />
                              <li>Microsoft Intune</li>
                              <br />
                            </ul>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a>
                            Precio de Honorarios sugerido. Consultar por precio
                            final. Precio por usuario por dispositivo por mes.
                          </a>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                    <Grid.Column>
                      <Card style={{ marginLeft: 5 }}>
                        <Image
                          src={Object.entries(MSPsquare)[0].slice(1)}
                          wrapped
                          ui={false}
                          alt="No se pudo cargar la imagen"
                        />
                        <Card.Content>
                          <Card.Header>Pro+</Card.Header>
                          <Card.Meta>50 - 200 dispositivos</Card.Meta>
                          <b>70 USD</b>
                          <Card.Description>
                            <ul>
                              <li>
                                <b>Pro Plan plus: </b>
                              </li>
                              <br />
                              <li>Defender for IoT</li>
                              <br />
                              <li>Security for NAS Servers</li>
                              <br />
                              <li>Separate DLP Software</li>
                              <br />
                              <li>Security for DevOps</li>
                              <br />
                              <li>Azure Web Application Firewall</li>
                              <br />
                              <li>Enterprise E3, E5 accounts </li>
                              <br /> <br />
                            </ul>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a>
                            Precio de Honorarios sugerido. Consultar por precio
                            final. Precio por usuario por dispositivo por mes.
                          </a>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    {/*  */}
                    <Grid.Column>
                      <Card>
                        <Image
                          src={Object.entries(MSPsquare)[0].slice(1)}
                          wrapped
                          ui={false}
                          alt="No se pudo cargar la imagen"
                        />
                        <Card.Content>
                          <Card.Header>Advanced</Card.Header>
                          <Card.Meta>75 - 350 dispositivos</Card.Meta>
                          <b>85 USD</b>
                          <Card.Description>
                            <ul>
                              <li>
                                <b>Pro+ Plan plus:</b>
                              </li>
                              <br />
                              <li>Network Access Control</li>
                              <br />
                              <li>More advanced Next-Gen Firewall, IPS</li>
                              <br />
                              <li>SOAR</li>
                              <br />
                              <li>Windows Enterprise OS</li>
                              <br />
                            </ul>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a>
                            Precio de Honorarios sugerido. Consultar por precio
                            final. Precio por usuario por dispositivo por mes.
                          </a>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                    {/* <Grid.Column>
                        <Card >
                         <Image src={Object.entries(MSPsquare)[0].slice(1)} wrapped ui={false} alt="No se pudo cargar la imagen"/> 
                            <Card.Content>
                                <Card.Header>NextU</Card.Header>
                                <Card.Meta>2015 - 2016 | 2022</Card.Meta>
                                <Card.Description>
                                    Next University me dio las bases de la programación y me permitió actualizarme en 2022.

                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>

                                   Precio de Honorarios sugerido. Consultar por precio de software, hardware y precio final. Precio por dispositivo. N usuarios compartiendo un dispositivo se contará como N dispositivos.
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card style={{ marginLeft: 5 }}>
                             <Image src={Object.entries(MSPsquare)[0].slice(1)} wrapped ui={false} alt="No se pudo cargar la imagen"/> 
                            <Card.Content>
                                <Card.Header>Platzi</Card.Header>
                                <Card.Meta>2022 - 2023</Card.Meta>
                                <Card.Description>
                                    Platzi me permitió profundizar en todos mis conocimientos y llevarlos al siguiente nivel.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>

                                   Precio de Honorarios sugerido. Consultar por precio de software, hardware y precio final. Precio por dispositivo. N usuarios compartiendo un dispositivo se contará como N dispositivos.
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column> */}
                  </Grid.Row>

                  <Grid.Row>
                    <h6>
                      Nos reservamos el derecho de modificar precios, cantidad
                      de dispositivos y beneficios en todo momento.
                      <br />
                      Consultar precios por respuesta a incidentes, guardias,
                      terciarización de SOC parcial o completa y precio de
                      software y Hardware a emplearse.
                      <br />
                      Recuerde que BitLopez MSP (BitLopez MSSP) es un
                      emprendimiento a futuro, la empresa no está creada y de
                      momento no existen interacciones ni operaciones
                      comerciales con Bitopez MSP a la fecha, ni existirán hasta
                      la creación formal de la compañía.
                      <br />
                      Si tiene interés en lo que se ofrece, consulte y creamos
                      la empresa tan pronto como sea posible para satisfacer sus
                      necesidades de Seguridad.
                    </h6>
                  </Grid.Row>
                </Grid>
                <br /> <br />
                <b>Hoy, la seguridad está en sus manos.</b>
                <h6>
                  <a href="#PricesReturn">
                    <p data-bs-toggle="collapse" data-bs-target="#prices">
                      Colapsar
                    </p>
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
