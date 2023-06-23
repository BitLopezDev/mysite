import React from 'react';
import Image from 'next/image';
import './../../styles/fullstack.module.scss';

import PHP_OOP from './../../../public/assets/users/Santiago/credenciales/NextU/PHP_OOP.png';
import HTML5 from './../../../public/assets/users/Santiago/credenciales/NextU/HTML5.png';
import JavaScript from './../../../public/assets/users/Santiago/credenciales/NextU/JavaScript.png';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';





const IntroBubble = () => {
   
    // <style jsx>{`
  
  
      
    
    // `}</style>
    

    return (
        <React.Fragment>

            <center >
                <div className="row justify-content-center">
                    <div className="col-sm-3 " style={{ maxWidth: 290 }}>
                        <h2 id='quiensoy'>
                            Quién soy:</h2>
                    </div>
                    <div className="col-sm-3 " style={{ maxWidth: 280, minHeight: 30 }}></div>
                </div>
            </center>
            <section id="introbubble" className="row justify-content-center  ">

                <div id="carouselcontainer" className="col-sm-4  fondoantigradiente justify-content-center"
                    style={{ minHeight: 160, paddingTop: 30, maxWidth: 350, paddingLeft: 40 }}>
                    <center>

                        {/* <!-- Carousel --> */}
                        <div id="badges" className="carousel slide" data-bs-ride="carousel" style={{ minHeight: 160 }}>

                            {/* <!-- Indicators/dots --> */}
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#badges" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#badges" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#badges" data-bs-slide-to="2"></button>
                            </div>

                            {/* <!-- The slideshow/carousel --> */}
                            <div className="carousel-inner " style={{ minHeight: 160 }}>
                                <div id="carousel-item-1" className="carousel-item active">
                                    <center>
                                        <Image src={PHP_OOP} id="carouselIMG1" alt="PHP OOP" width={120} height={120} className="d-block" />
                                    </center>
                                </div>

                                <div className="carousel-item  " id="carousel-item-2">
                                    <center>
                                        <Image id="carouselIMG2" src={HTML5} alt="HTML 5"
                                            className="d-block" width={120} height={120} />
                                    </center>
                                </div>
                                <div className="carousel-item" id="carousel-item-3">
                                    <center>
                                        <Image id="carouselIMG3" src={JavaScript}
                                            alt="JavaScript" className="d-block" width={120} height={120} />
                                    </center>
                                </div>



                            </div>



                            {/* <!-- Left and right controls/icons --> */}
                            <button id="carouselPrevious" className="carousel-control-prev" type="button" data-bs-target="#badges"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button id="carouselNext" className="carousel-control-next" type="button" data-bs-target="#badges"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>

                        <div className="container-fluid mt-3">
                            {/* <!--<h3>Carousel Example</h3>
        <p>The following example shows how to create a basic carousel with indicators and controls.</p>--> */}
                        </div>
                    </center>
                    {/* <!--</div id="carouselcontainer">--> */}
                </div>
                <div className="col-sm-6 fondogradiente justify-content-center hideonmobile" data-bs-toggle="tooltip"
                    title="Puede hacer click en los datos personales para más información y click nuevamente para cerrar." >
                    <center>
                       <h1 style={{textAlign:'center', marginTop:50, fontSize:50, color: 'white',}} className='hideonmobile'>BitLopez Dev
                                          </h1><h4 style={{color: 'white'}}>Santiago Comesaña López</h4>
                    </center>

                </div>
            </section>
        </React.Fragment>

    );
    
}

export default IntroBubble;