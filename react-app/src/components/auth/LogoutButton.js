import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import './LogoutButton.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {

    await dispatch(logout());
    window.location.href = '/'

  };

  return <button className="logout-style-button" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
