import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Routes } from 'react-router-loading';
import { TeacherLayout } from '../components';
import HomeTeacherPage from '../pages/HomePage/HomeTeacherPage';
import SplashPage from '../pages/HomePage/SplashPage';
import LoginPage from '../pages/LoginPage/LoginPage';


const hist = createBrowserHistory();

const Router = () => {
    return (
        <Routes history={hist}>
            <Route path="/" element={<SplashPage />} />
            <Route path="teacher" element={<TeacherLayout />}>
                <Route index element={<HomeTeacherPage />} />
            </Route>
            <Route exact path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default Router;
