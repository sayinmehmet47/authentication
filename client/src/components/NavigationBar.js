import React from 'react';
import { Layout, Menu } from 'antd';
import { connect, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
const { Header } = Layout;

export default function NavigationBar() {
  const username = useSelector((state) => state.authSlice.user.username);
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        {username ? (
          <Menu.Item style={{ float: 'right' }} key="2">
            <Link to="/account/login">Logout - {username}</Link>
          </Menu.Item>
        ) : (
          <Menu.Item key="2">
            <Link to="/account/login">Login</Link>
          </Menu.Item>
        )}
        <Menu.Item key="3">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
