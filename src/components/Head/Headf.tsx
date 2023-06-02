import React from 'react';
import Head from 'next/head';
import globalMeta from './globalmeta';



const TheHead = ({
    title = globalMeta.siteName,
    description = globalMeta.description,
    canonicalUrl = globalMeta.siteUrl,
    ogType,
    ogImgUrl = globalMeta.siteLogo,
    ...other
}

) => {
    return (
        <Head>


            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta httpEquiv="Content-Type" content="text/html" />
            {/* <meta name="description" content="CV online de Santiago Comesaña" />  */}
            <meta name="keywords" content="Santiago Comesaña, CV Online, desarrollador" />
            <meta name="author" content="Santiago Comesaña López" />
            <meta name="robots" content="index, nofollow, noarchive" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta httpEquiv="expires" content="1000" />
            <meta property="og:site_name" content={globalMeta.siteName} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content={ogType} />
            <meta property="og:image" content={ogImgUrl} />
            <link rel="shortcut icon" href="/images/favicon.ico"></link>
            <link rel="icon" type="image/x-icon" href='/images/favicon.ico'></link>
            {/*  */}
            <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
         
            <meta property="og:locale" content="es_UY" />
           
             
    	 <meta property="og:description" content={description} />
    	
    	
    

            {/* <title>{title}</title> */}
        </Head>

    );

}

export default TheHead;