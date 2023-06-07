import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import Layout from '../components/Layout/Layout';
import { Arsenal } from '../components/Sections/innerSections/msp/arsenal';
import {Intel} from './../components/Sections/innerSections/msp/intel';
import {NGFW} from './../components/Sections/innerSections/msp/ngfw';
import {ZTNA} from './../components/Sections/innerSections/msp/ztna';

import Head from 'next/head';


// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";


//import '../scripts/reactvueangular.js';

function hideElement(segment) {
    console.log(segment);
    const segmentsArray = ['intel', 'ngfw', 'ztna', 'ep', 'siem', 'office', 'mail', 'ddos', 'sand'];

    if (document.getElementById(segment)?.classList.contains("seesconde")) {
        document.getElementById(segment)?.classList.remove('seesconde');
    }

    for (let i = 0; i < segmentsArray.length; i++) {
        if (!document.getElementById(segmentsArray[i])?.classList.contains("seesconde") && document.getElementById(segmentsArray[i]) != document.getElementById(segment)) {
            document.getElementById(segmentsArray[i])?.classList.add('seesconde');
        }
    }

    //console.log(segmentsArray);
}




   



class arsenalcontainer extends Component {



    state = { activeItem: 'Desarrollador Web 2016' }

    handleItemClick = (e, { name, segment }) => {
        this.setState({ activeItem: name })


        hideElement(segment);
    }

    render() {
        const { activeItem } = this.state

        return (
            <React.Fragment>
                <Layout>
                <br />
                <br />

                <center>
                    <div style={{ maxWidth: 500 }}>

                        <h2>

                            Nuestro arsenal de combate:</h2>
                        <h6>Las herramientas con las que nos manejamos para protegerlo a usted y a su negocio</h6>
                    </div>
                </center>
                <br />


                <Grid>
                    <Grid.Column width={4}>
                        <Menu fluid vertical tabular>
                            <Menu.Item
                                name='Threat Intelligence'
                                active={activeItem === 'Threat Intelligence'}
                                onClick={this.handleItemClick}
                                segment='intel'
                                
                            />
                            <Menu.Item
                                name='Next-Gen Firewall'
                                active={activeItem === 'Next-Gen Firewall'}
                                onClick={this.handleItemClick}
                                segment='ngfw'
                            />
                            <Menu.Item
                                name='Zero Trust Network Access'
                                active={activeItem === 'Zero Trust Network Access'}
                                onClick={this.handleItemClick}
                                segment='ztna'
                            />
                            <Menu.Item
                                name='Endpoint Protection'
                                active={activeItem === 'Endpoint Protection'}
                                onClick={this.handleItemClick}
                                segment='ep'
                            />
                            <Menu.Item
                                name='SIEM'
                                active={activeItem === 'SIEM'}
                                onClick={this.handleItemClick}
                                segment='siem'
                            />
                            <Menu.Item
                                name='Office Security'
                                active={activeItem === 'Office Security'}
                                onClick={this.handleItemClick}
                                segment='office'
                            />
                            <Menu.Item
                                name='Mail Security'
                                active={activeItem === 'Mail Security'}
                                onClick={this.handleItemClick}
                                segment='mail'
                            />
                            <Menu.Item
                                name='DDoS Protection'
                                active={activeItem === 'DDoS Protection'}
                                onClick={this.handleItemClick}
                                segment='ddos'
                            />
                            <Menu.Item
                                name='Cloud Sandbox'
                                active={activeItem === 'Cloud Sandbox'}
                                onClick={this.handleItemClick}
                                segment='sand'
                            />

                        </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={12}>
                        <Segment id='intel' >
                        <Intel />

                        </Segment>
                        <Segment id='ngfw' className='seesconde' style={{ marginTop: 0 }}>
                          <NGFW />
                        </Segment>
                        <Segment id='ztna' className='seesconde' style={{ marginTop: 0 }}>
                           <ZTNA />
                        </Segment>


                        <Segment id='ep' className='seesconde' style={{ marginTop: 0 }}>

                           
                        </Segment>
                        <Segment id='siem' className='seesconde' style={{ marginTop: 0 }}>
                          
                        </Segment>
                        <Segment id='office' className='seesconde' style={{ marginTop: 0 }}>
                           
                        </Segment> 
                        <Segment id='mail' className='seesconde' style={{ marginTop: 0 }}>
                           
                        </Segment>
                        <Segment id='ddos' className='seesconde' style={{ marginTop: 0 }}>
                           
                        </Segment>
                        <Segment id='sand' className='seesconde' style={{ marginTop: 0 }}>
                         
                        </Segment>
                    </Grid.Column>
                </Grid>


                </Layout>

            </React.Fragment >
        )
    }
}






export default arsenalcontainer;

//TODO: correc