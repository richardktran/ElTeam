import React from 'react'
import { useLocation } from 'react-router-dom';
import CourseSidebar from './CourseSidebar'
import HomeSidebar from './HomeSidebar';

function Sidebar() {
  let { pathname } = useLocation();

  // Switch sidebar by pathname if match pattern '/courses/*/*'
  const CustomSidebar = () => {
    if (pathname.match(/\/courses\/\d+\/\w+/)) {
      return <CourseSidebar pathname={pathname} />
    }
    return <HomeSidebar pathname={pathname} />
  }

  return (
    <CustomSidebar />
  )
}

export default Sidebar