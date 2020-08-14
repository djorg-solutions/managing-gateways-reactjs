import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

function TopBar(props) {

    const [current, setCurrent] = useState('home');

    const handleClick = e => {
        setCurrent(e.key);
    };

    return (
        <Menu theme="dark" mode="horizontal" onClick={handleClick} selectedKeys={[current]}>
            <Menu.Item>
                <Link to={'/'}>Managing Gateways Task</Link>
            </Menu.Item>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to={'/'}>Home</Link>
            </Menu.Item>
            <SubMenu icon={<SettingOutlined />} title="Management">
                <Menu.ItemGroup>
                    <Menu.Item key="setting:1"> <Link to={'/gateways'}>Gateways</Link></Menu.Item>
                    <Menu.Item key="setting:2"><Link to={'/devices'}>Devices</Link></Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>
    );
}

export default TopBar;