import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";
import Player from "../components/Player";
import Head from "next/head";

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> =
    ({children, title, description = '', keywords=''}) => {
        return (
            <>
                <Head>
                    <title>{title || 'Music Platform'}</title>
                    <meta name="description" content={"Music Platform. Everyone can upload here their track and become famous. " + description} />
                    <meta name="robots" content="index, follow"/>
                    <meta name="keywords" content={keywords || "Music, tracks, songs, artist"}/>

                </Head>
                <Navbar/>
                <Container style={{margin: '90px 0'}}>
                    {children}
                </Container>
                <Player/>
            </>
        );
    };

export default MainLayout;