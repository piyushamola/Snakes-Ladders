import React, { Component } from 'react';
import classes from './Layout.css';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Board from '../../components/Board/Board'

const Layout = () => {

    return (
        <div>
        <div className={classes.Layout}>
            <Header></Header>
            <Board></Board>
            <Footer></Footer>
        </div>
        </div>
    )
}

export default Layout;