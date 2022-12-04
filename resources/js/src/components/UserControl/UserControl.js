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
                            <img src={userData.avatar} alt="" referrerpolicy="no-referrer" />
                            :
                            <em className="icon ni ni-user-alt" />
                        }
                    </div>
                    <div className="user-info d-none d-xl-block">
                        <div className={`user-status user-status-${userData.status === 1 ? "active" : "unverified"}`}>
                            {userData.status === 1 ? "Active" : "Unverified"}
                        </div>
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
                            <a href={`/users/${userData.id}`}>
                                <em className="icon ni ni-user-alt" />
                                <span>Thông tin cá nhân</span>
                            </a>
                        </li>
                        <li>
                            <a href="user-settings">
                                <em className="icon ni ni-setting-alt" />
                                <span>Cài đặt tài khoản</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown-inner">
                    <ul className="link-list">
                        <li>
                            <a href='#' onClick={logout}>
                                <em className="icon ni ni-signout" />
                                <span>Đăng xuất</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default UserControl
