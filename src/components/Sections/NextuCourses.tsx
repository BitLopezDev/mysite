import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import './../../styles/fullstack.module.scss';
// ./../../assets/users/Santiago/credenciales/NextU/PHP_OOP.png

import { WebDev2016 } from './innerSections/NextuCourses/2016';
import { OtrosNextU } from './innerSections/NextuCourses/OtrosNextU';
import { FrontEndNextU } from './innerSections/NextuCourses/FrontEndNextU';


import './../../../node_modules/bootstrap/dist/css/bootstrap.css';
//import './../../scripts/common';
/*import './../../scripts/Libs/bootstrap';
import './../../scripts/Libs/bootstrap.bundle';
import './../../scripts/index';*/


function hideElement(name, ...others) {

    //document.getElementById(elementsofaccordion[Object.keys(elementsofaccordion)[i]].li).classList.remove('active');

    //document.getElementById('carousel-item-1').classList.contains("active")
    if (document.getElementById(name).classList.contains("seesconde")) {
        document.getElementById(name).classList.remove('seesconde');
    }
    //console.log(others);


    for (let i = 0; i < others.length; i++) {
        // const StringArray = othersArray[i];
        if (!document.getElementById(others[i]).classList.contains("seesconde")) {
            document.getElementById(others[i]).classList.add('seesconde');
        }

    }
    //console.log(othersArray);
}



class NextuCourses extends Component {



    state = { activeItem: 'Desarrollador Web 2016' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        var thename = name;
        console.log(name);
        switch (thename) {
            case 'Desarrollador Web 2016':
                hideElement('wd', 'FrontEnd', 'otros');
                break;
            case 'Frontend con JS 2022':
                hideElement('FrontEnd', 'wd', 'otros');
                break;
            case 'Otros Cursos 2022':
                hideElement('otros', 'FrontEnd', 'wd');
                break;
        }

    }

    render() {
        const { activeItem } = this.state

        return (
            <React.Fragment>
                <br />
                <br />

                <center>
                    <div style={{ maxWidth: 500 }}>

                        <h2>

                            Estudios Técnicos en NextU:</h2>
                        <h6>Desarrollador Web | Frontend Developer con JS | Otros</h6>
                    </div>
                </center>
                <br />


                <Menu pointing secondary>
                    <Menu.Item
                        name='Desarrollador Web 2016'

                        active={activeItem === 'Desarrollador Web 2016'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Frontend con JS 2022'

                        active={activeItem === 'Frontend con JS 2022'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Otros Cursos 2022'

                        active={activeItem === 'Otros Cursos 2022'}
                        onClick={
                            this.handleItemClick

                        }
                    />

                </Menu>

                <Segment id='wd' className=''>

                    <WebDev2016></WebDev2016>
                </Segment>
                <Segment id='FrontEnd' className='seesconde'>

                    <FrontEndNextU></FrontEndNextU>
                </Segment>
                <Segment id='otros' className='seesconde'>

                    <OtrosNextU></OtrosNextU>

                </Segment>
                {/* <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' /> */}

            </React.Fragment >
        )
    }
}






export default NextuCourses;