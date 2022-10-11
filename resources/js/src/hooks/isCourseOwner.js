import React, { useEffect, useState } from 'react'
import { courseApi } from '../api/courseApi';
import useUser from './useUser';

function isCourseOwner(id) {
  const [isOwner, setIsOwner] = useState(false);
  const currentUser = useUser();

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await courseApi.getDetail(id);
      const { data } = response.data;
      if (data.teacher.id == currentUser.id) {
        setIsOwner(true);
      }
    }
    fetchCourse();
  }, []);

  return isOwner;
}

export default isCourseOwner