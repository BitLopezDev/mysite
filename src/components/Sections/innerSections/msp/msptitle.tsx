import React from "react";

export function MSPTitle() {
  return (
    <div id="MSPTitle">
      <h1 className="antigradienttext" style={{ fontSize: "6em" }}>
        <i>BitLopez MSP</i>
      </h1>
      <h4 style={{ color: "white", marginLeft: 60 }}>
        Managed Security Services Provider
      </h4>
      <br />
      <h2
        className="antigradienttext"
        style={{ marginLeft: 0, paddingLeft: 0, fontSize: "3.5em" }}
      >
        <i>Seguridad Líder</i>
      </h2>
      <br />
      <h3
        style={{
          marginLeft: 0,
          paddingLeft: 0,
          fontSize: "1.65em",
          color: "white",
        }}
      >
        Descanse tranquilo con las mejores herramientas de seguridad en las
        mejores manos
      </h3>
      <br />
      <h3
        className="antigradienttext"
        style={{
          marginLeft: 0,
          paddingLeft: 0,
          marginTop: -8,
          fontSize: "1.1em",
          //color: "white",
        }}
      >
        EDR | XDR | MDR | NDR | Zero Trust | ZTNA | NAC | SASE | SD-WAN |
        NEXT-GEN FIREWALL | NIPS/HIPS | SIEM | SOAR | CASB | SWG | Mail Security
        | Office Security | NAS Server Protection | Cloud Security | WAF | DDOS
        protection | VPN | DLP | NAC | Cyber-Threat Intelligence | (inline)
        Cloud Sandbox
      </h3>
    </div>
  );
}
