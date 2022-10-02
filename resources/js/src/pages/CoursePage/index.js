import React from 'react'
import { Route, Routes } from 'react-router-loading';
import Layout from '../../components/Layout/Layout';
import HomePage from '../HomePage/HomePage';
import CourseDetailPage from './CourseDetailPage';
import MemberPage from './MemberPage';

function Course() {

  return (
    <Layout>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path=":id/info" element={<CourseDetailPage />} />
        <Route path=":id/members" element={<MemberPage />} />
      </Routes>
    </Layout>
  );
}

export default Course