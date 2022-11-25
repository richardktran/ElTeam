import React from 'react'
import { Route, Routes } from 'react-router-loading';
import Layout from '../../components/Layout/Layout';
import TaskDetailPage from './TaskDetailPage';

function Task() {

  return (
    <Layout>
      <Routes>
        <Route path=":id" element={<TaskDetailPage />} />
      </Routes>
    </Layout>
  );
}

export default Task