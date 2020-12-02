import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/Style';
import reset from '../static/Reset';

class Layout extends Component {

    render(){
        return (<div>
            <Head>
                <title>鬼滅力診断</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            {reset}
            {style}
            <Header />
            {this.props.children}
            <Footer />
        </div>);
    }
}

export default Layout;