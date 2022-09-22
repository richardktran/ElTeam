import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Routes } from 'react-router-loading';
import CoursePage from '../pages/CoursePage/CoursePage';
import MemberPage from '../pages/CoursePage/MemberPage';
import HomePage from '../pages/HomePage/HomePage';
import SplashPage from '../pages/HomePage/SplashPage';
import LoginPage from '../pages/LoginPage/LoginPage';


const hist = createBrowserHistory();

const Router = () => {
    return (
        <Routes history={hist}>
            <Route path="/" element={<SplashPage />} />
            <Route path="/courses" element={<HomePage />} />
            <Route path="/courses/:id" element={<CoursePage />} />
            <Route path="/courses/:id/members" element={<MemberPage />} />
            <Route exact path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default Router;
