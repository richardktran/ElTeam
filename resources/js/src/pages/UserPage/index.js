import React from 'react'
import { Route, Routes } from 'react-router-loading';
import Layout from '../../components/Layout/Layout';
import UserDetailPage from './UserDetailPage';

function User() {

  return (
    <Layout>
      <Routes>
        <Route path=":id" element={<UserDetailPage />} />
      </Routes>
    </Layout>
  );
}

export default User