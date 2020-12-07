import App, {Container} from 'next/app';
import React from 'react';
import withReduxStore from '../lib/redux-store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

class _App extends App{
    render(){
        const {Component, pageProps, reduxStore} = this.props
        return(
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(_App)