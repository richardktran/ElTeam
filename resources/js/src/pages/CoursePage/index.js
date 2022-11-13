import React from 'react'
import { Route, Routes } from 'react-router-loading';
import Layout from '../../components/Layout/Layout';
import GroupListPage from '../GroupPage/GroupListPage';
import MyGroupPage from '../GroupPage/MyGroupPage';
import HomePage from '../HomePage/HomePage';
import CourseDetailPage from './CourseDetailPage';
import MemberPage from './MemberPage';

function Course() {

  return (
    <Layout>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path=":id/lesson" element={<CourseDetailPage />} />
        <Route path=":id/members" element={<MemberPage />} />
        <Route path=":courseId/my-group" element={<MyGroupPage />} />
        <Route path=":id/groups" element={<GroupListPage />} />
      </Routes>
    </Layout>
  );
}

export default Course