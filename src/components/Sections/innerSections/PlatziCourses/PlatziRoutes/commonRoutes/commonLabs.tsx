import React from 'react';

import { HeadRoute } from './RoutesAbstract';
// import { HeadRoute } from './commonRoutes/RoutesAbstract';


//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';

const CommonRoute = () => {
    const description = "Descripción";
    /* 
    ['Name', 'Image', 'certification', "completion"]
    */
    let coursesArray = [
        [
            'Name',
            'Image',
            'certification',
            'completion',
        ],
        [
            'Name',
            'Image',
            'certification',
            'completion',
        ],
        [
            'Name',
            'Image',
            'certification',
            'completion',
        ],
        [
            'Name',
            'Image',
            'certification',
            'completion',
        ],
        [
            'Name',
            'Image',
            'certification',
            'completion',
        ],

    ];
    return (

        <>
            <HeadRoute which={""} route={"LabsRoute"} year={"2025"} description={description} completion={95} coursesArray={coursesArray} />
        </>

    );


}

export { CommonRoute };