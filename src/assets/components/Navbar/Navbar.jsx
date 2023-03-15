import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography } from 'antd'
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import logo from '../../images/bar-logo.png'
import './navbar.scss'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setscreenSize] = useState(undefined);

    useEffect(() => {
        const handleResize = () => setscreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className="navbar-container">
            <div className="navbar-container-logo">
                <img src={logo} alt="logo" />
                <Typography.Title level={2} className="logo">Cocktail DB</Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
            </div>

            {activeMenu && (
                <Menu className='ant-menu'>
                    <Menu.Item icon={<HomeOutlined />}>
                        Home
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        Random Cocktail
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        Ten Random Cocktails
                    </Menu.Item>
                </Menu>
            )
            }
        </div >
    )
}

export default Navbar