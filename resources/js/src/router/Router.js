import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Routes } from 'react-router-loading';
import { GuestLayout } from '../components';
import {
    HomeTeacherPage, LoginPage
} from '../pages';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeTeacherPage />} />
            <Route exact path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default Router;
