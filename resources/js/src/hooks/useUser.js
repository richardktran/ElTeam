import React, { useEffect, useState } from 'react'
import { authApi } from '../api';

function useUser() {
  const [userData, setUserData] = useState(JSON.parse(window.localStorage.getItem('userData')));

  return userData;
}

export default useUser