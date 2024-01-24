import React, { Component } from "react";
import { Grid, Menu, Segment, Image, Item } from "semantic-ui-react";
import Layout from "../../../Layout/Layout";
import Head from "next/head";
//import { Arsenal } from '../components/Sections/innerSections/msp/arsenal';
import { Intel } from "./intel";
import { NGFW } from "./ngfw";
import { ZTNA } from "./ztna";
import { SASE } from "./sase";
import { NAC } from "./nac";
import { NDR } from "./ndr";
import { EndpointProtection } from "./endpoint";
import { SIEM } from "./siem";
import { SOAR } from "./soar";
import { OfficeSecurity } from "./officesecurity";
import { DDOS } from "./ddos";
import { Sandbox } from "./sandbox";
import image2 from "./../../../../../public/images/BitLopez MSP.png";
import image3 from "./../../../../../public/images/threat intelligence 1.png";

// import { Hcard } from "styles/components/hcard";

// import { Rail,  Card, List } from "semantic-ui-react";

// import MSPBlack from "./../../../../../public/assets/users/Santiago/services/MSPBlack.png";
// import BasicRound from "./../../../../../public/assets/users/Santiago/imágenes/Logo/BasicRound.ico";
// import Sophos from "./../../../../../public/assets/users/Santiago/services/Sophos.ico";
// import Bitdefender from "./../../../../../public/assets/users/Santiago/services/Bitdefender.ico";
// import BitdefenderHome from "./../../../../../public/assets/users/Santiago/services/BitdefenderHome.ico";
// import GlassWire from "./../../../../../public/assets/users/Santiago/services/glasswire.svg";
// import Comodo from "./../../../../../public/assets/users/Santiago/services/Comodo.ico";
// import Bitwarden from "./../../../../../public/assets/users/Santiago/services/Bitwarden.ico";
// import MSPWhite from "./../../../../../public/assets/users/Santiago/services/MSPWhite.png";
// import MSPWhiteICO from "./../../../../../public/assets/users/Santiago/services/MSPWhiteICO.ico";
// import Microsoft from "./../../../../../public/assets/users/Santiago/services/Microsoft.png";

// import AVTestEndpointBlack from "./../../../../../public/assets/users/Santiago/services/AVTestEndpointBlack.jpg";
// const cybermap = "https://cybermap.kaspersky.com/es/widget/dynamic/dark";
// import "./../../../../scripts/charts/AVScores.js";

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

//import '../scripts/reactvueangular.js';

function hideElement(segment) {
  console.log(segment);
  const segmentsArray = [
    "intel",
    "ngfw",
    "ztna",
    "sase",
    "nac",
    "ndr",
    "ep",
    "siem",
    "soar",
    "office",
    "ddos",
    "sand",
  ];

  if (document.getElementById(segment)?.classList.contains("seesconde")) {
    document.getElementById(segment)?.classList.remove("seesconde");
  }

  for (let i = 0; i < segmentsArray.length; i++) {
    if (
      !document
        .getElementById(segmentsArray[i])
        ?.classList.contains("seesconde") &&
      document.getElementById(segmentsArray[i]) !=
        document.getElementById(segment)
    ) {
      document.getElementById(segmentsArray[i])?.classList.add("seesconde");
    }
  }

  //console.log(segmentsArray);
}

class Arsenalcontainer extends Component {
  state = { activeItem: "Desarrollador Web 2016" };

  handleItemClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    { name, segment }: any
  ) => {
    this.setState({ activeItem: name });

    hideElement(segment);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <Layout>
          <br />
          <br />

          <center>
            <div style={{ maxWidth: 500 }}>
              <h2 className="antigradienttext">Nuestro arsenal de combate:</h2>
              {/* <h6>Las herramientas con las que nos manejamos para protegerlo a usted y a su negocio</h6> */}
            </div>
          </center>
          <br />

          <Grid>
            <Grid.Column width={4}>
              <Menu fluid vertical tabular>
                <Menu.Item
                  name="Threat Intelligence"
                  active={activeItem === "Threat Intelligence"}
                  onClick={this.handleItemClick}
                  segment="intel"
                />
                <Menu.Item
                  name="Next-Gen Firewall"
                  active={activeItem === "Next-Gen Firewall"}
                  onClick={this.handleItemClick}
                  segment="ngfw"
                />
                <Menu.Item
                  name="Zero Trust"
                  active={activeItem === "Zero Trust"}
                  onClick={this.handleItemClick}
                  segment="ztna"
                />
                <Menu.Item
                  name="Secure Access Service Edge"
                  active={activeItem === "Secure Access Service Edge"}
                  onClick={this.handleItemClick}
                  segment="sase"
                />
                <Menu.Item
                  name="Network Access Control"
                  active={activeItem === "Network Access Control"}
                  onClick={this.handleItemClick}
                  segment="nac"
                />
                <Menu.Item
                  name="Network Detection and Response"
                  active={activeItem === "Network Detection and Response"}
                  onClick={this.handleItemClick}
                  segment="ndr"
                />
                <Menu.Item
                  name="Endpoint Protection con EDR y XDR"
                  active={activeItem === "Endpoint Protection con EDR y XDR"}
                  onClick={this.handleItemClick}
                  segment="ep"
                />
                <Menu.Item
                  name="SIEM"
                  active={activeItem === "SIEM"}
                  onClick={this.handleItemClick}
                  segment="siem"
                />
                <Menu.Item
                  name="SOAR"
                  active={activeItem === "SOAR"}
                  onClick={this.handleItemClick}
                  segment="soar"
                />
                <Menu.Item
                  name="Office Security"
                  active={activeItem === "Office Security"}
                  onClick={this.handleItemClick}
                  segment="office"
                />

                <Menu.Item
                  name="Directed Denial of Service"
                  active={activeItem === "Directed Denial of Service"}
                  onClick={this.handleItemClick}
                  segment="ddos"
                />
                <Menu.Item
                  name="Cloud Sandbox"
                  active={activeItem === "Cloud Sandbox"}
                  onClick={this.handleItemClick}
                  segment="sand"
                />
              </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
              <Segment id="intel">
                <Intel />
              </Segment>
              <Segment id="ngfw" className="seesconde" style={{ marginTop: 0 }}>
                <NGFW />
              </Segment>
              <Segment id="ztna" className="seesconde" style={{ marginTop: 0 }}>
                <ZTNA />
              </Segment>
              <Segment id="sase" className="seesconde" style={{ marginTop: 0 }}>
                <SASE />
              </Segment>

              <Segment id="nac" className="seesconde" style={{ marginTop: 0 }}>
                <NAC />
              </Segment>
              <Segment id="ndr" className="seesconde" style={{ marginTop: 0 }}>
                <NDR />
              </Segment>
              <Segment id="ep" className="seesconde" style={{ marginTop: 0 }}>
                <EndpointProtection />
              </Segment>
              <Segment id="siem" className="seesconde" style={{ marginTop: 0 }}>
                <SIEM />
              </Segment>
              <Segment id="soar" className="seesconde" style={{ marginTop: 0 }}>
                <SOAR />
              </Segment>
              <Segment
                id="office"
                className="seesconde"
                style={{ marginTop: 0 }}
              >
                <OfficeSecurity />
              </Segment>

              <Segment id="ddos" className="seesconde" style={{ marginTop: 0 }}>
                <DDOS />
              </Segment>
              <Segment id="sand" className="seesconde" style={{ marginTop: 0 }}>
                <Sandbox />
              </Segment>
            </Grid.Column>
          </Grid>
        </Layout>
      </React.Fragment>
    );
  }
}

export { Arsenalcontainer };

//TODO: correc
