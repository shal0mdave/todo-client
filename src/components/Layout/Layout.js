import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import Navbar from '../Navbar/Navbar'

const Layout = (props) => {

    return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="author" content="Shalom Effiom" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                <meta name="theme-color" content={props.themeColour ? props.themeColour : '#9B9B9B'} />
                <meta name="description" content={props.description ? props.description : 'A simple e-commerce app for Bejamas | Built on Next.js & GraphCMS'} />

                <meta property="og:title" content={props.title ? props.title : 'Bejamas E-commerce'} />
                <meta property="og:description" content={props.description ? props.description : 'A simple e-commerce app for Bejamas | Built on Next.js & GraphCMS'} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={props.url ? props.url : 'https://bejamasecommerce.vercel.app/'} />
                <meta property="og:image" content={props.image ? props.image : `https://bejamasecommerce.vercel.app/img/ship.png`} />

                <title>{props.title ? props.title : 'Bejamas E-commerce'}</title>

                <link rel="icon" href="/favicon.ico" />
            </Helmet>

            <Navbar />

            <Fragment>
                {props.children}
            </Fragment>

        </Fragment>
    )
}

export default Layout;