import React, { useEffect, useState } from 'react'
import { authApi } from '../../api';

const UserControl = () => {
    const [userData, setUserData] = useState(
        JSON.parse(window.localStorage.getItem('userData'))
    );

    useEffect(() => {
        const getProfile = async () => {
            const { data } = await authApi.me();
            data && setUserData(data.data);
        };
        getProfile();
    }, []);

    const logout = async () => {
        const response = await authApi.logout();
        console.log(response);
        location.reload();
        window.localStorage.clear();
    };
    return (
        <>
            <a href="#" className="dropdown-toggle mr-n1" data-toggle="dropdown">
                <div className="user-toggle">
                    <div className="user-avatar sm">
                        {userData && userData.avatar ?
                            <img src={userData.avatar} alt="" />
                            :
                            <em className="icon ni ni-user-alt" />
                        }
                    </div>
                    <div className="user-info d-none d-xl-block">
                        <div className="user-status user-status-unverified">Unverified</div>
                        <div className="user-name dropdown-indicator">{userData.name}</div>
                    </div>
                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                    <div className="user-card">
                        <div className="user-avatar">
                            {userData && userData.avatar ?
                                <img src={userData.avatar} alt="" />
                                :
                                <span>AB</span>
                            }
                        </div>
                        <div className="user-info">
                            <span className="lead-text">{userData.name}</span>
                            <span className="sub-text">{userData.email}</span>
                        </div>
                    </div>
                </div>
                <div className="dropdown-inner">
                    <ul className="link-list">
                        <li>
                            <a href="html/user-profile-regular.html">
                                <em className="icon ni ni-user-alt" />
                                <span>View Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="html/user-profile-setting.html">
                                <em className="icon ni ni-setting-alt" />
                                <span>Account Setting</span>
                            </a>
                        </li>
                        <li>
                            <a href="html/user-profile-activity.html">
                                <em className="icon ni ni-activity-alt" />
                                <span>Login Activity</span>
                            </a>
                        </li>
                        <li>
                            <a className="dark-switch" href="#">
                                <em className="icon ni ni-moon" />
                                <span>Dark Mode</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown-inner">
                    <ul className="link-list">
                        <li>
                            <a href='#' onClick={logout}>
                                <em className="icon ni ni-signout" />
                                <span>Sign out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default UserControl
