import React from 'react'
import { Route, Routes } from 'react-router-loading';
import HomePage from '../HomePage/HomePage';
import CourseDetailPage from './CourseDetailPage';
import MemberPage from './MemberPage';

function Course() {

  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path=":id/info" element={<CourseDetailPage />} />
      <Route path=":id/members" element={<MemberPage />} />
    </Routes>
  );
}

export default Course