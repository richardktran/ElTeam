import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-loading';
import Layout from '../../components/Layout/Layout';
import GroupDetailPage from '../GroupPage/GroupDetailPage';
import GroupListPage from '../GroupPage/GroupListPage';
import MyGroupPage from '../GroupPage/MyGroupPage';
import HomePage from '../HomePage/HomePage';
import CourseDetailPage from './CourseDetailPage';
import CourseSettingPage from './CourseSettingPage';
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
        <Route path=":courseId/groups/:groupId" element={<GroupDetailPage />} />
        <Route path=":courseId/settings" element={<CourseSettingPage />} />
      </Routes>
    </Layout>
  );
}

export default Course