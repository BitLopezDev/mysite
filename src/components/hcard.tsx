import React from 'react';
import Image from 'next/image';


interface HcardProps {
    imgurl?: any,
    imgheight?:any,
    imgwidht?:any,
    pcontent: String,
    strong?: String
    isporcentage?: any,
}

const Hcard = (props : HcardProps) => {
   
//Object.entries(imgurl)[0].slice(1)
    

    return (
        <React.Fragment>
 <div
          className="card w-60"
          style={{ width: "100%", backgroundColor: "white !important" }}
        >
          <div className="card-img-top d-flex align-items-center ">
            <div>
              {!!props.imgurl && <Image
                className="img-fluid"
                src={props.imgurl}
                
                alt=""
                style={{ padding: 10 }}
                width={props.imgwidht }
                height={props.imgheight  }
              />}
            </div>

            <p className="card-text">
              {!!props.strong && <strong>{props.strong}</strong>} {props.pcontent} 
            </p>
          </div>
        </div>
           
        </React.Fragment>

    );
}

export {Hcard};