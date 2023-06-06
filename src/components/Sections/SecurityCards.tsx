import React from 'react'
import { Image } from 'semantic-ui-react'
import './../../styles/fullstack.module.scss';

import './../../../node_modules/bootstrap/dist/css/bootstrap.css';
// ./../../assets/users/Santiago/credenciales/NextU/PHP_OOP.png
// import { FullStackRoute } from './innerSections/Section3/PlatziRoutes/FullStackRoute';
// import { FrontendReactRoute } from './innerSections/Section3/PlatziRoutes/FrontendReactRoute';
// import { FullStackNextRoute } from './innerSections/Section3/PlatziRoutes/FullStackNextRoute';
// import { HTMLCSSRoute } from './innerSections/Section3/PlatziRoutes/HTMLCSSRoute';
// import { JSaPRoute } from './innerSections/Section3/PlatziRoutes/JSaPRoute'
// import { Web3 } from './innerSections/Section3/PlatziRoutes/Web3';





//import './../../scripts/common';
/*import './../../scripts/Libs/bootstrap';
import './../../scripts/Libs/bootstrap.bundle';
import './../../scripts/index';*/

const SecurityCards = () => {
    return (

        <React.Fragment>
            <div className="container">
                <div className="row">

                    <div className="col-sm-4 sectile">
                        <div className="tile-progress fondogradiente">
                            <div className="tile-header">
                                <h4>Inteligencia en ciberseguridad </h4>
                                <span>Estudios en Ciberinteligencia</span>
                            </div>
                            <div className="tile-progressbar">
                                <span data-fill="48%" style={{ "width": "48%" }}></span>
                            </div>
                            <div className="tile-footer">
                                <h4>
                                    <span className="pct-counter">48</span>%
                                </h4>
                                {/* <span>Platzi | Udemy</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 sectile">
                        <div className="tile-progress fondoantigradiente">
                            <div className="tile-header">
                                <h4>Normal ISO/IEC 27001 </h4>
                                <span>Estudios en norma ISO/IEC 27001</span>
                            </div>
                            <div className="tile-progressbar">
                                <span data-fill="26%" style={{ "width": "26%" }}></span>
                            </div>
                            <div className="tile-footer">
                                <h4>
                                    <span className="pct-counter">26</span>%
                                </h4>
                                {/* <span>Platzi | Udemy </span> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 sectile">
                        <div className="tile-progress fondogradiente">
                            <div className="tile-header">
                                <h4>Análisis de malware</h4>
                                <span>Estudios de análisis de malware</span>
                            </div>
                            <div className="tile-progressbar">
                                <span data-fill="0%" style={{ "width": "0%" }}></span>
                            </div>
                            <div className="tile-footer">
                                <h4>
                                    <span className="pct-counter">0</span>%
                                </h4>
                                <span>Platzi | Udemy</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <style jsx>{`
            .tile-progress {
    background-color: #303641;
    color: #fff;
}

.tile-progress {
    background: #00a65b;
    color: #fff;
    margin-bottom: 20px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding;
    background-clip: padding-box;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}

.tile-progress .tile-header {
    padding: 15px 20px;
    padding-bottom: 40px;
}

.tile-progress .tile-progressbar {
    height: 2px;
    background: rgba(0, 0, 0, 0.18);
    margin: 0;
}

.tile-progress .tile-progressbar span {
    background: #fff;
}

.tile-progress .tile-progressbar span {
    display: block;
    background: #fff;
    width: 0;
    height: 100%;
    -webkit-transition: all 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000);
    -moz-transition: all 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000);
    -o-transition: all 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000);
    transition: all 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000);
}

.tile-progress .tile-footer {
    padding: 20px;
    text-align: right;
    background: rgba(0, 0, 0, 0.1);
    -webkit-border-radius: 0 0 3px 3px;
    -webkit-background-clip: padding-box;
    -moz-border-radius: 0 0 3px 3px;
    -moz-background-clip: padding;
    border-radius: 0 0 3px 3px;
    background-clip: padding-box;
    -webkit-border-radius: 0 0 3px 3px;
    -moz-border-radius: 0 0 3px 3px;
    border-radius: 0 0 3px 3px;
}

.tile-progress.tile-red {
    background-color: #f56954;
    color: #fff;
}

.tile-progress {
    background-color: #303641;
    color: #fff;
}

.tile-progress.tile-blue {
    background-color: #0073b7;
    color: #fff;
}

.sectile {
    /**/
    height: 315px;
    max-height: 315px;
    min-height: 315px;
}
                
                
                `}</style>

        </React.Fragment>

    );
}

export { SecurityCards };





