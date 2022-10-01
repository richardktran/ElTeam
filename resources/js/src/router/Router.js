import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Routes } from 'react-router-loading';
import GoogleCallback from '../components/Form/GoogleCallback';
import Course from '../pages/CoursePage';
import CourseDetailPage from '../pages/CoursePage/CourseDetailPage';
import MemberPage from '../pages/CoursePage/MemberPage';
import HomePage from '../pages/HomePage/HomePage';
import SplashPage from '../pages/HomePage/SplashPage';
import LoginPage from '../pages/LoginPage/LoginPage';


const hist = createBrowserHistory();

const Router = () => {
    return (
        <Routes history={hist}>
            <Route path="/" element={<SplashPage />} />
            <Route path="/courses/*" element={<Course />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/auth/google" element={<GoogleCallback />} />
        </Routes>
    );
}

export default Router;
