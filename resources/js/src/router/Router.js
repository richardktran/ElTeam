import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Routes } from 'react-router-loading';
import {
    HomePage,
    About
  } from '../pages';


const hist = createBrowserHistory();

const Router = () => {
    return (
        <>
            <Routes history={hist}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default Router;
