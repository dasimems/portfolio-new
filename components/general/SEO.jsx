
import { siteName } from "@/utils/general";
import Head from "next/head";
import Script from "next/script";

const SEO = ({title, description, image, imageDescription, locale}) => {
    return(

        <>
        
        
            <Head>
        
                <title>{`Duyil Ayomid | ${title? title : siteName}`}</title>
                <meta property="og:title" content={`Duyil Ayomid | ${title? title : siteName}`} />
                
                <meta name="author" content="Dasimems" />
                
                <meta name="description" content={description? description : "I am a web, mobile app, Blockchain Developer and also an Electrical ELectronics Engineer"} />
                <meta property="og:description" content={description? description : "I am a web, mobile app, Blockchain Developer and also an Electrical ELectronics Engineer"} />
                
                <meta property="og:image" content={image? image : "/meta_image.png"} />
                <meta name="twitter:card" content={image? image : "/meta_image.png"} />
                <link rel="apple-touch-icon" href={image? image : "/meta_image.png"} />
        
                <meta property="og:image:alt" content={`Duyil Ayomid | ${title? title : siteName}`} /> 
                <meta property="og:locale" content={locale? locale :"en_US"} />
                <meta property="og:type" content="website" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@dasimems" />
                <meta name="twitter:title" content={`Duyil Ayomid | ${title? title : siteName}`} />
                <meta name="twitter:description" content={description? description : "I am a web, mobile app, Blockchain Developer and also an Electrical ELectronics Engineer"} />
                <meta name="twitter:image" content={image? image : "/meta_image.png"} />

        
            </Head>
            <Script src="https://www.google-analytics.com/analytics.js" async></Script>
        </>


)}

export default SEO;